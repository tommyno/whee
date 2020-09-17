export default {
  name: "href",
  title: "Lenke",
  description: "Bruk formatet: /hvem-er-whee for internlenker. Bruk fullstendig url for eksternlenker, feks: https://hoioslo.no",
  type: "url",
  validation: (Rule) =>
    Rule.uri({
      scheme: ["http", "https", "mailto", "tel"],
      allowRelative: true,
    }),
};
