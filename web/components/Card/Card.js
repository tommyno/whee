import PropTypes from "prop-types";

import { Grid } from "components/Layout";
import Image from "components/Image";

const Card = ({ data }) => {
  const { image, title, text } = data;
  return (
    <Grid>
      {image && <Image imageObject={image} />}
      <div>
        {title && <h3 className="h2 color--red">{title}</h3>}
        {text && <p>{text}</p>}
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
