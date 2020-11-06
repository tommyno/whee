import PropTypes from "prop-types";

import { Grid, Block } from "components/Layout";
import Image from "components/Image";
import AddToBasket from "components/AddToBasket";

const ProductCard = ({ data = {} }) => {
  const { image, title, text } = data;

  return (
    <Grid verticalCenter>
      {image && <Image imageObject={image} maxImageWidth="670" />}
      <div>
        {title && <h3 className="h2">{title}</h3>}

        <Block top={4}>
          <AddToBasket data={data} />
        </Block>

        {text && (
          <Block top={4}>
            <p>{text}</p>
          </Block>
        )}
      </div>
    </Grid>
  );
};

ProductCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
  }).isRequired
};

export default ProductCard;
