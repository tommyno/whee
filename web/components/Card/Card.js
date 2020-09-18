import PropTypes from "prop-types";

import { Grid, Block } from "components/Layout";
import Image from "components/Image";

const Card = ({ data = {} }) => {
  const { image, title, text } = data;
  return (
    <Grid verticalCenter>
      {image && <Image imageObject={image} />}
      <div>
        {title && <h3 className="h2">{title}</h3>}
        {text && (
          <Block top={2}>
            <p>{text}</p>
          </Block>
        )}
      </div>
    </Grid>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
  }).isRequired
};

export default Card;
