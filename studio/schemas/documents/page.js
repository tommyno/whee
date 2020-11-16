import slug from "../parts/slug";
import title from "../parts/title";
import seo from "../parts/seo";
import intro from "../parts/intro";
import headerMedia from "../parts/headerMedia";
import image from "../parts/image";
import video from "../parts/video";
import list from "../parts/list";
import listWithNumbers from "../parts/listWithNumbers";
import richText from "../parts/richText";
import twoRows from "../parts/twoRows";
import hero from "../parts/hero";
import faq from "../parts/faq";
import divider from "../parts/divider";
import box from "../parts/box";

export default {
  name: "page",
  title: "Sider",
  type: "document",
  fields: [
    title,
    slug,
    intro,
    headerMedia,
    {
      name: "content",
      type: "array",
      title: "Innholdsseksjoner",
      of: [richText, video, image, list, listWithNumbers, twoRows, hero, faq, divider, box],
    },
    seo,
  ],
};
