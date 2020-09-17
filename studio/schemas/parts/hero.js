import intro from "./intro";
import image from "./image";
import button from "./button";

export default {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [intro, image, button],
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
