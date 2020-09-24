import listItem from "./listItem";

export default {
  name: "list",
  title: "Liste med bilder",
  type: "object",
  fields: [
    {
      name: "alternating",
      title: "Alternerende visning",
      description: "Vis annenhver til høyre og venstre",
      type: "boolean",
    },
    listItem,
  ],
  preview: {
    select: {
      blocks: "listItem",
    },
    prepare({ blocks }) {
      const titles = blocks.map((block) => block.title).join(", ") || "";
      return {
        title: titles,
        subtitle: "Liste med bilder",
      };
    },
  },
};
