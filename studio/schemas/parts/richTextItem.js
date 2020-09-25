import React from "react";
import link from "./link";

const highlightRender = (props) => <span style={{ color: "#f45338", fontWeight: "bold" }}>{props.children}</span>;

const highlightIcon = () => <span style={{ color: "#f45338" }}>H</span>;

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
          {
            title: "Highlight",
            value: "highlight",
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Lenke",
            fields: [link],
          },
        ],
      },
    },
  ],
};
