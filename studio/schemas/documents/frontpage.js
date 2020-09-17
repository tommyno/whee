import title from "../parts/title";
import seo from "../parts/seo";
import image from "../parts/image";
import video from "../parts/video";
import list from "../parts/list";
import richText from "../parts/richText";
import twoRows from "../parts/twoRows";
import hero from "../parts/hero";

export default {
  name: "frontpage",
  title: "Forside",
  type: "document",
  fields: [
    title,
    {
      name: "content",
      type: "array",
      title: "Innholdsseksjoner",
      of: [richText, video, image, list, twoRows, hero],
    },
    seo,
  ],
};
