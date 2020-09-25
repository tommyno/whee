export default {
  name: "href",
  title: "Lenke",
  description: "Bruk formatet: /sykkelen for internlenker. Bruk fullstendig url for eksternlenker, feks: https://sykkel.no/hjul. For e-post, bruk: mailto:hei@whee.no",
  type: "url",
  validation: (Rule) =>
    Rule.uri({
      scheme: ["http", "https", "mailto", "tel"],
      allowRelative: true,
    }),
};
