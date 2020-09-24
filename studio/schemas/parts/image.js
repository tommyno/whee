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
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "caption",
      title: "Bildetekst",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "size",
      type: "string",
      title: "Størrelse",
      description: "Standard er utfallende bredde (large)",
      options: {
        list: ["large", "medium"],
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      title: "caption",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Bilde",
      };
    },
  },
};
