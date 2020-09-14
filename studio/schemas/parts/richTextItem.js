import InternalLink from "react-icons/lib/md/insert-link";
import ExternalLink from "react-icons/lib/md/launch";

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
        { title: "H3", value: "h3" },
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
            name: "internalLink",
            type: "object",
            title: "Intern lenke",
            icon: InternalLink,
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [{ type: "page" }],
              },
            ],
          },
          {
            name: "link",
            type: "object",
            title: "Ekstern lenke",
            icon: ExternalLink,
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
            ],
          },
        ],
      },
    },
  ],
};
