import sanityClient from "@sanity/client";

const isProduction = process.env.NEXT_PUBLIC_IS_LOCALHOST;

export default sanityClient({
  projectId: "38sqgmq0",
  dataset: "production",
  useCdn: isProduction // Use CDN for production
});
