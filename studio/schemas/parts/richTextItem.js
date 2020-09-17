import link from "./link";

export default {
  name: "richText",
  title: "Brødtekst",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
      ],
      lists: [],
      marks: {
        // Only allow these decorators
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Ekstern lenke",
            fields: [link],
          },
        ],
      },
    },
  ],
};
