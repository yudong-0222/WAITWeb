export function parseHeadings(content) {
  const headingRegex = /^(#{1,3})\s+(.*)$/gm;
  const headings = [];
  let match;
  let i = 0;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; //1=h1, 2=h2, 3=h3;
    const text = match[2];
    const baseId = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\u4e00-\u9fa5-]/g, "");
    headings.push({
      level,
      text,
      id: baseId,
      key: `${baseId}-${i}`, //Insure the KEY is only-one.
    });
    i++;
  }
  return headings;
}
