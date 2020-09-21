export default {
  name: "divider",
  title: "Delestrek",
  type: "object",
  description: "Brukes for å dele opp seksjoner. Viser en grønn delestrek.",
  fields: [
    {
      name: "margin",
      title: "Avstand til innhold over og under",
      type: "string",
      options: {
        list: ["medium"],
      },
    },
  ],
};
