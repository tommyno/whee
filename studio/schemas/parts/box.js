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
};
