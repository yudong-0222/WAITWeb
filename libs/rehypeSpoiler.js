const spoilerMarker = /^:::(?:spolier|spoiler)(?:\s+(.+?))?\s*$/i;

function getParagraphText(node) {
  if (
    node.type !== "element" ||
    node.tagName !== "p" ||
    node.children.length !== 1 ||
    node.children[0].type !== "text"
  ) {
    return null;
  }

  return node.children[0].value;
}

function createSpoiler(summary, content) {
  return {
    type: "element",
    tagName: "details",
    properties: {
      className: [
        "group",
        "my-6",
        "overflow-hidden",
        "rounded-sm",
        "border",
        "border-gray-600",
        "bg-white/5",
      ],
    },
    children: [
      {
        type: "element",
        tagName: "summary",
        properties: {
          className: [
            "cursor-pointer",
            "list-none",
            "select-none",
            "px-4",
            "py-3",
            "font-mono",
            "text-sm",
            "font-bold",
            "text-white",
            "transition-colors",
            // --- Animation for the Bar Charge. ---
            "relative",
            "overflow-hidden",
            "before:absolute",
            "before:inset-0",
            "before:bg-white/10",
            "before:origin-left",
            "before:scale-x-0",
            "hover:before:scale-x-100",
            "before:transition-transform",
            "before:duration-300",
            // ---------------------------------------------
            "[&::-webkit-details-marker]:hidden",
          ],
        },
        children: [
          {
            type: "element",
            tagName: "span",
            properties: {
              ariaHidden: "true",
              className: [
                "mr-2",
                "inline-block",
                "transition-transform",
                "group-open:rotate-90",
              ],
            },
            children: [{ type: "text", value: "▶" }],
          },
          { type: "text", value: summary },
        ],
      },
      {
        type: "element",
        tagName: "div",
        properties: {
          className: [
            "border-t",
            "border-gray-600",
            "px-4",
            "py-3",
            "[&>*:first-child]:mt-0",
            "[&>*:last-child]:mb-0",
          ],
        },
        children: content,
      },
    ],
  };
}

function getInlineSpoiler(node) {
  if (
    node.type !== "element" ||
    node.tagName !== "p" ||
    node.children.length === 0 ||
    node.children[0].type !== "text" ||
    node.children.at(-1).type !== "text"
  ) {
    return null;
  }

  const firstChild = node.children[0];
  const lastChild = node.children.at(-1);
  const firstLineEnd = firstChild.value.indexOf("\n");
  if (firstLineEnd === -1) return null;

  const opening = firstChild.value.slice(0, firstLineEnd).match(spoilerMarker);
  const closing = lastChild.value.match(/(?:^|\n):::\s*$/);
  if (!opening || !closing) return null;

  const contentChildren = node.children.map((child) => ({ ...child }));

  if (firstChild === lastChild) {
    contentChildren[0].value = firstChild.value.slice(
      firstLineEnd + 1,
      closing.index,
    );
  } else {
    contentChildren[0].value = firstChild.value.slice(firstLineEnd + 1);
    contentChildren.at(-1).value = lastChild.value.slice(0, closing.index);
  }

  const visibleChildren = contentChildren.filter(
    (child) => child.type !== "text" || child.value.length > 0,
  );

  return {
    summary: opening[1]?.trim() || "點擊展開詳情",
    content:
      visibleChildren.length > 0
        ? [{ ...node, children: visibleChildren }]
        : [],
  };
}

function transformChildren(parent) {
  if (!Array.isArray(parent.children)) return;

  for (const child of parent.children) {
    if (child.type === "element" && child.tagName !== "pre") {
      transformChildren(child);
    }
  }

  for (let index = 0; index < parent.children.length; index += 1) {
    const inlineSpoiler = getInlineSpoiler(parent.children[index]);
    if (inlineSpoiler) {
      parent.children.splice(
        index,
        1,
        createSpoiler(inlineSpoiler.summary, inlineSpoiler.content),
      );
      continue;
    }

    const openingText = getParagraphText(parent.children[index]);
    const opening = openingText?.match(spoilerMarker);
    if (!opening) continue;

    const closingIndex = parent.children.findIndex(
      (child, childIndex) =>
        childIndex > index && getParagraphText(child)?.trim() === ":::",
    );

    if (closingIndex === -1) continue;

    const content = parent.children.slice(index + 1, closingIndex);
    const summary = opening[1]?.trim() || "點擊展開詳情";
    const spoiler = createSpoiler(summary, content);

    parent.children.splice(index, closingIndex - index + 1, spoiler);
  }
}

export default function rehypeSpoiler() {
  return (tree) => transformChildren(tree);
}
