import richTextItem from "./richTextItem";
import box from "./box";

export default {
  name: "twoRows",
  title: "To rader (tekst og farget boks)",
  type: "object",
  fields: [richTextItem, box],
};
