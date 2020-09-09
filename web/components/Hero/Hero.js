import Block from "components/Block";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
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
    </div>
  );
};

export default Hero;
