import title from "./title";
import text from "./text";
import image from "./image";

export default {
  name: "listItem",
  type: "array",
  title: "Listen",
  of: [
    {
      type: "object",
      fields: [title, text, image],
    },
  ],
};
