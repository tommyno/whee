export default {
  name: "image",
  title: "Bilde",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "caption",
      title: "Bildetekst",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
  ],
};
