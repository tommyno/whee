import PropTypes from "prop-types";

import Button from "components/Button";
import Image from "components/Image";
import PortableText from "components/PortableText";
import { Flow, Block } from "components/Layout";

const Hero = ({ data = {}, frontpage }) => {
  const { image = {}, intro = "", button = {}, richText = {} } = data;
  const imageWidth = frontpage ? "1340" : "800";

  return (
    <Flow>
      <Image
        imageObject={image}
        maxImageWidth={imageWidth}
        imageLoading="eager"
      />

      {intro && <p className="h2">{intro}</p>}

      {!!richText?.richText?.length && (
        <Flow blockContent>
          <PortableText blocks={richText.richText} />
        </Flow>
      )}

      {button.href && (
        <Block top={6} bottom={6}>
          <Button link={button.href} primary={button.primary}>
            <span className="text-button">{button.text}</span>
          </Button>
        </Block>
      )}
    </Flow>
  );
};

Hero.defaultProps = {
  frontpage: false
};

Hero.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.object,
    intro: PropTypes.string,
    button: PropTypes.object
  }).isRequired,
  frontpage: PropTypes.bool
};

export default Hero;
