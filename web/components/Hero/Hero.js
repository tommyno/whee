import PropTypes from "prop-types";

import Button from "components/Button";
import Image from "components/Image";
import { Section, Flow } from "components/Layout";

const Hero = ({ data = {} }) => {
  const { image = {}, intro = "", button = {} } = data;
  return (
    <Section limitedWidth center>
      <Flow>
        <Image imageObject={image} />
        {intro && <h2>{intro}</h2>}

        {button.href && (
          <Button link={button.href} primary={button.primary}>
            <span className="h2">{button.text}</span>
          </Button>
        )}
      </Flow>
    </Section>
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
