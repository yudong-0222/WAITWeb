const ignoredElements = new Set(["code", "pre"]);

function splitStrikethrough(value) {
  const nodes = [];
  let cursor = 0;
  let changed = false;

  while (cursor < value.length) {
    const opening = value.indexOf("~~", cursor);
    if (opening === -1) break;

    const closing = value.indexOf("~~", opening + 2);
    if (closing === -1 || closing === opening + 2) break;

    if (opening > cursor) {
      nodes.push({ type: "text", value: value.slice(cursor, opening) });
    }

    nodes.push({
      type: "element",
      tagName: "del",
      properties: {},
      children: [
        { type: "text", value: value.slice(opening + 2, closing) },
      ],
    });

    cursor = closing + 2;
    changed = true;
  }

  if (!changed) return null;

  if (cursor < value.length) {
    nodes.push({ type: "text", value: value.slice(cursor) });
  }

  return nodes;
}

function transformChildren(parent) {
  if (!Array.isArray(parent.children)) return;

  for (let index = 0; index < parent.children.length; index += 1) {
    const child = parent.children[index];

    if (child.type === "text") {
      const replacement = splitStrikethrough(child.value);
      if (!replacement) continue;

      parent.children.splice(index, 1, ...replacement);
      index += replacement.length - 1;
      continue;
    }

    if (
      child.type === "element" &&
      !ignoredElements.has(child.tagName)
    ) {
      transformChildren(child);
    }
  }
}

export default function rehypeStrikethrough() {
  return (tree) => transformChildren(tree);
}
