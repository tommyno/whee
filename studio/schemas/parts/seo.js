import image from "./image";

export default {
  name: "seo",
  title: "SEO",
  type: "object",
  description: "Brukes for å overstyre hvordan siden vises på Google og når den deles på Facebook og sosiale medier.",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "title",
      title: "SEO tittel",
      description: "Overstyrer sidens tittel for SEO",
      type: "string",
    },
    {
      name: "description",
      title: "SEO ingress ",
      type: "text",
      description: "Vises på Google resultater og ved deling. Maks 160 tegn",
    },
    {
      name: "image",
      title: "SEO bilde",
      type: "image",
    },
  ],
};
