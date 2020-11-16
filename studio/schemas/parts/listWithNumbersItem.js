import title from "./title";
import text from "./text";

export default {
  name: "listWithNumbersItem",
  type: "array",
  title: "Legg til på listen",
  of: [
    {
      type: "object",
      fields: [title, text],
    },
  ],
};
