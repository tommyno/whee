import sanity from "settings/client";
import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanity);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function imageUrlFor(source) {
  return builder.image(source);
}

export default imageUrlFor;
