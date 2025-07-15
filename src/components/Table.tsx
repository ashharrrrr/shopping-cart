import { useData } from "../contexts/DataProvider";
import CartItem from "./CartItem";
import styles from "./Table.module.css";

const Table = () => {
  const { userCart } = useData();
  return (
    <main className={styles.cart}>
      <h1 className={styles.heading}>Cart</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Image</th>
            <th className={styles.th}>Product</th>
            <th className={styles.th}>Price</th>
          </tr>
        </thead>
        <tbody>
                    {userCart.map((item) => <CartItem item={item} />)}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
