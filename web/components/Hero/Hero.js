import Block from "components/Layout/Block";
import Button from "components/Button";
import { Section } from "components/Layout";

const Hero = () => {
  return (
    <Section limitedWidth center>
      <img src="/images/example-illustration.png" alt="Nyttesykkel" />
      <h2>
        Gir deg en <span className="color--red">hverdagsmaskin</span> til fast
        månedspris med alt inkludert
      </h2>
      <Block top={8}>
        <Button link="#">Meld interesse</Button>
      </Block>
    </Section>
  );
};

export default Hero;
