import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Guilherme Duccini - Teste Taskify" />
    </div>
  );
}
