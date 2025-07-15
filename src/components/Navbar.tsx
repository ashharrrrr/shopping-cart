import { ShoppingBag } from "lucide-react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useData } from "../contexts/DataProvider";
export default function Navbar() {
  const { userCart } = useData();
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
        <Link className={`${styles.link} ${styles.shoppingCart}`} to="cart">
          <ShoppingBag />
          <p>{userCart.length}</p>
        </Link>
      </div>
    </div>
  );
}
