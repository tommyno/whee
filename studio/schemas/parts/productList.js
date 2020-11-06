import title from "./title";
import text from "./text";
import image from "./image";
import price from "./price";

export default {
  name: "productList",
  title: "Produkter med bilder",
  type: "array",
  of: [
    {
      type: "object",
      fields: [title, text, price, image],
    },
  ],
};
