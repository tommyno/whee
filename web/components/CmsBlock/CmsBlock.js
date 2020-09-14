import imageUrlFor from "utils/imageUrlFor";

import { Section } from "components/Layout";

const CmsBlock = ({ data }) => {
  console.log(data);
  const block = data._type;

  if (block === "richText") {
    console.log("riktekst");
  }
  if (block === "image") {
    return <img src={imageUrlFor(data).url()} alt="" />;
    console.log("bilde");
  }

  return <Section inner="none">CmsBlock</Section>;
};

export default CmsBlock;
