import richTextItem from "./richTextItem";

export default {
  name: "richText",
  title: "Tekst",
  type: "object",
  fields: [richTextItem],
  preview: {
    select: {
      blocks: "richText",
    },
    prepare(value) {
      const block = (value.blocks || []).find((block) => block._type === "block");
      return {
        title: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No title",
        subtitle: "Tekst",
      };
    },
  },
};
