import slug from "../parts/slug";
import title from "../parts/title";
import seo from "../parts/seo";
import intro from "../parts/intro";
import productList from "../parts/productList";

export default {
  name: "products",
  title: "Ekstrautstyr",
  type: "document",
  fields: [title, slug, intro, productList, seo],
};
