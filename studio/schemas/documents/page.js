import slug from "../parts/slug";
import title from "../parts/title";
import seo from "../parts/seo";
import intro from "../parts/intro";
import headerMedia from "../parts/headerMedia";
import image from "../parts/image";
import video from "../parts/video";
import list from "../parts/list";

export default {
  name: "page",
  title: "Side",
  type: "document",
  fields: [
    title,
    slug,
    headerMedia,
    intro,
    seo,
    {
      name: "content",
      type: "array",
      title: "Innholdsseksjoner",
      of: [video, image, list],
    },
  ],
};
