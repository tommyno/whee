import PropTypes from "prop-types";
import Grid from "components/Grid";

import styles from "./Card.module.scss";

const Card = ({ image, title, description }) => {
  return (
    <Grid>
      {image && <img src={image} alt="" className={styles.image} />}
      <div className="grid__item">
        {title && <h3 className="h2 color--red">{title}</h3>}
        {description && <p>{description}</p>}
      </div>
    </Grid>
  );
};

Card.defaultProps = {
  image: null,
  title: null,
  description: null
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Card;
