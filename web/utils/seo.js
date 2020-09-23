import PropTypes from "prop-types";
import { NextSeo } from "next-seo";

const Seo = ({ page, isFrontpage }) => {
  const title = page?.seo?.title || page?.title || "Whee!";
  const wheeTitle = isFrontpage ? "" : " | Whee!";

  const description =
    page?.seo?.description ||
    page?.intro ||
    "En hverdagsmaskin med det du trenger til fast månedspris";

  const defaultImage = [
    {
      url: "https://whee.no/images/some-default-image.jpg",
      width: 2000,
      height: 1739,
      alt: "Whee!"
    }
  ];

  const images = defaultImage;
  return (
    <NextSeo
      title={`${title}${wheeTitle}`}
      description={description}
      openGraph={{
        images
      }}
    />
  );
};

Seo.defaultProps = {
  isFrontpage: false
};

Seo.propTypes = {
  page: PropTypes.shape({
    intro: PropTypes.string,
    title: PropTypes.string,
    seo: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  }).isRequired,
  isFrontpage: PropTypes.bool
};

export default Seo;
