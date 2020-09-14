import title from "./title";
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
};
