// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Import document schemas
import page from "./documents/page";
import frontpage from "./documents/frontpage";
import faq from "./documents/faq";
import faqCategory from "./documents/faqCategory";
import products from "./documents/products";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",

  // Then proceed to concatenate our document types
  // to the ones provided by any plugins that are installed
  types: [...schemaTypes, frontpage, page, faq, faqCategory, products],
});
