import richText from "./richText";
import image from "./image";
import button from "./button";

export default {
  name: "frontpageHero",
  title: "Hero (forside)",
  type: "object",
  fields: [image, richText, button],
  preview: {
    select: {
      intro: "intro",
    },
    prepare(selection) {
      const { intro } = selection;
      return {
        title: `Hero: ${intro}`,
      };
    },
  },
};
