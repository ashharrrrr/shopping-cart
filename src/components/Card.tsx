import styles from "./Card.module.css";
import { useData } from "../contexts/DataProvider";
type CardProps = {
    title: string,
    price: number,
    image: string,
    id: number,

}
export default function Card({ id, title, price, image }: CardProps) {
  const { addToCart } = useData();
  return (
    <div className={styles.card}>
      <div className={styles.imgholder}>
        <img
          className={styles.img}
                    src={image}
                    alt={title}
        />
      </div>
      <div className={styles.cardinfo}>
        <div className={styles.productnameholder}>
          <h1 className={styles.productname}>{title}</h1>
        </div>
        <div className={styles.productpriceholder}>
          <p className={styles.productprice}>{`$${price}`}</p>
        </div>
        <div className={styles.btnholder}>
          <button onClick={() =>addToCart(id)} className={styles.btn}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
