import richTextItem from "./richTextItem";
import box from "./box";
import image from "./image";
import button from "./button";

export default {
  name: "twoRows",
  title: "To rader (tekst og farget boks)",
  type: "object",
  fields: [richTextItem, image, button, box],
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
        subtitle: "To rader (tekst og farget boks)",
      };
    },
  },
};
