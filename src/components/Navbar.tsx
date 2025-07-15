import { ShoppingBag } from "lucide-react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.leftNav}>
        <h1 className={styles.logo}>StreetB4nds.</h1>
        <div className={styles.leftLinks}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="store">
            Store
          </Link>
        </div>
      </div>
      <div>
        <Link className={styles.link} to="cart">
          <ShoppingBag />
        </Link>
      </div>
    </div>
  );
}
