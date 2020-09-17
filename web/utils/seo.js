import PropTypes from "prop-types";
import { NextSeo } from "next-seo";

const Seo = ({ page }) => {
  const title = page?.seo?.title || page?.title || "Whee!";
  const description =
    page?.seo?.description ||
    page?.intro ||
    "En hverdagsmaskin til fast månedspris med alt inkludert";

  const defaultImage = [
    {
      url: "/images/example-illustration.png", // TODO: Replace this with real image
      width: 956,
      height: 680,
      alt: "Whee!"
    }
  ];

  const images = defaultImage;
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        images
      }}
    />
  );
};

Seo.propTypes = {
  page: PropTypes.shape({
    intro: PropTypes.string,
    title: PropTypes.string,
    seo: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  }).isRequired
};

export default Seo;