export default {
  name: "image",
  title: "Bilde",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "altText",
      title: "Alternativ text",
      description: "Beskrivelse av bilde. Brukes for blinde og svaksynte",
      type: "string",
    },
    {
      name: "caption",
      title: "Bildetekst",
      type: "string",
    },
  ],
};
