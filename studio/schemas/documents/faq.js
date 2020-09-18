import richTextItem from "../parts/richTextItem";

export default {
  name: "faq",
  title: "Spørsmål og svar",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Spørsmål",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "richText",
      title: "Svar",
      type: "object",
      fields: [richTextItem],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Tilhører kategori(er)",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: "reference",
          title: "Velg kategori",
          to: [{ type: "faqCategory" }],
        },
      ],
    },
  ],
};
