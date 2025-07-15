import styles from './CartItem.module.css';
import {type Product } from '../pages/Store';

type CartItemProps = {
    item: Product
}

export default function CartItem({item}: CartItemProps) {
  return (
    <tr>
      <td className={styles.td}>
        <img src={item.image} className={styles.image} />
      </td>
      <td className={`${styles.td} ${styles.name}`}>{item.title}</td>
      <td className={`${styles.td} ${styles.price}`}>{item.price}</td>
    </tr>
  );
}
