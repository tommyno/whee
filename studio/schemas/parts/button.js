import link from "./link";

export default {
  name: "button",
  title: "Knapp",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Tekst på knapp",
      type: "string",
    },
    link,
    {
      name: "primary",
      title: "Vis som primær-knapp",
      type: "boolean",
    },
  ],
};
