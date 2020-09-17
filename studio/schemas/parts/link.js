export default {
  name: "href",
  title: "Lenke",
  description: "Bruk formatet: /fortroppen for internlenker. Bruk fullstendig url for eksternlenker, feks: https://sykkel.no/hjul",
  type: "url",
  validation: (Rule) =>
    Rule.uri({
      scheme: ["http", "https", "mailto", "tel"],
      allowRelative: true,
    }),
};
