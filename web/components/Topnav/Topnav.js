import styles from "./topnav.module.scss";

const Topnav = () => {
  return (
    <div className={styles.topnav}>
      Logo
      <ul className={styles.topnav}>
        <li>Kontakt</li>
        <li>Hvordan virker det?</li>
        <li>Registrer deg nå</li>
      </ul>
    </div>
  );
};

export default Topnav;
