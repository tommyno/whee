import richTextItem from "./richTextItem";

export default {
  name: "box",
  title: "Farget boks",
  type: "object",
  fields: [
    richTextItem,
    {
      name: "bgColor",
      title: "Bakgrunnsfarge på boks",
      type: "string",
      options: {
        list: ["ingen", "peach", "yellow", "green"],
      },
    },
  ],
  preview: {
    select: {
      color: "bgColor",
      blocks: "richText",
    },
    prepare(selection) {
      const { color = "", blocks } = selection;
      const block = (blocks || []).find((block) => block._type === "block");
      const blockTitle = block
        ? block.children
            .filter((child) => child._type === "span")
            .map((span) => span.text)
            .join("")
        : "No title";
      return {
        title: `[${color}] ${blockTitle}`,
        subtitle: "Farget boks",
      };
    },
  },
};
