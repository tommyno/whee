import sanityClient from "@sanity/client";

// eslint-disable-next-line no-unneeded-ternary
const isProduction = process.env.NEXT_PUBLIC_IS_LOCALHOST ? false : true;

export default sanityClient({
  projectId: "38sqgmq0",
  dataset: "production",
  useCdn: isProduction // Use CDN for production
});
