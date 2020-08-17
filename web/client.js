import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "38sqgmq0",
  dataset: "production",
  useCdn: false, // Change to true when in production
});
