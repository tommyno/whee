import slugify from "standard-slugify";

export default {
  name: "slug",
  title: "Slug",
  type: "slug",
  description: `NB! Bør ikke endres etter siden er publisert og delt.`,
  options: {
    source: "title",
    maxLength: 200, // will be ignored if slugify is set
    slugify: (input) => slugify(input),
  },
  validation: (Rule) => Rule.required(),
};
