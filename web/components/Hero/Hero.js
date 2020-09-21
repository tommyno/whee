import PropTypes from "prop-types";

import Button from "components/Button";
import Image from "components/Image";
import { Flow, Block } from "components/Layout";

const Hero = ({ data = {} }) => {
  const { image = {}, intro = "", button = {} } = data;
  return (
    <Flow>
      <Image imageObject={image} />

      {intro && <p className="h2">{intro}</p>}

      {button.href && (
        <div>
          <Block top={5}>
            <Button link={button.href} primary={button.primary}>
              <span className="text-button">{button.text}</span>
            </Button>
          </Block>
        </div>
      )}
    </Flow>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.object,
    intro: PropTypes.string,
    button: PropTypes.object
  }).isRequired
};

export default Hero;
