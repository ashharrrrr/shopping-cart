import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <div className={styles.landing}>
      <p className={styles.tagline}>Flex your b4nds like never before</p>
        <Link className={styles.shoplink} to="store">
          shop now
        </Link>
    </div>
  );
}
