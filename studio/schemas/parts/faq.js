export default {
  name: "faq",
  title: "Spørsmål og svar",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Overskrift",
      type: "string",
    },
    {
      name: "faq",
      title: "Spørsmål og svar",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: "reference",
          title: "Velg en eller flere spørsmål",
          to: [{ type: "faq" }],
        },
      ],
    },
  ],
};
