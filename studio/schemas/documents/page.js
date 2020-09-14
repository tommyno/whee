import slug from "../parts/slug";
import title from "../parts/title";
import seo from "../parts/seo";
import intro from "../parts/intro";
import headerMedia from "../parts/headerMedia";
import image from "../parts/image";
import video from "../parts/video";
import list from "../parts/list";
import richText from "../parts/richText";

export default {
  name: "page",
  title: "Side",
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
      of: [richText, video, image, list],
    },
    seo,
  ],
};
