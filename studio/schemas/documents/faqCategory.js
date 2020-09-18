export default {
  name: "faqCategory",
  title: "Spørsmål og svar kategorier",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Kategorinavn",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
