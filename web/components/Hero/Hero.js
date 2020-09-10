import Block from "components/Block";
import Section from "components/Section";

const Hero = () => {
  return (
    <Section limitedWidth center>
      <img src="/images/example-illustration.png" alt="Nyttesykkel" />
      <h2>
        Gir deg en <span className="color--red">hverdagsmaskin</span> til fast
        månedspris med alt inkludert
      </h2>
      <Block top={8}>
        <a href="#" className="button">
          Sett deg på venteliste
        </a>
      </Block>
    </Section>
  );
};

export default Hero;
