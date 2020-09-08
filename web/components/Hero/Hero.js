import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h2>
        Gir deg en <span>hverdagsmaskin</span> til fast månedspris med alt
        inkludert
      </h2>
      <p>
        Elektrisk lastesykkel med plass til last og passasjerer med kundestøtte,
        forsikring og service inkludert.
      </p>
      <div>Fra 1400,-/mnd</div>
      <img src="#" alt="Nyttesykkel" />
    </div>
  );
};

export default Hero;
