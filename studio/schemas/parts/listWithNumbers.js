import listWithNumbersItem from "./listWithNumbersItem";
import title from "./title";

export default {
  name: "listWithNumbers",
  title: "Liste med 1-2-3",
  type: "object",
  fields: [title, listWithNumbersItem],
  preview: {
    select: {
      blocks: "listWithNumbersItem",
    },
    prepare({ blocks }) {
      const titles = blocks.map((block) => block.title).join(", ") || "";
      return {
        title: titles,
        subtitle: "Liste med 1-2-3",
      };
    },
  },
};
