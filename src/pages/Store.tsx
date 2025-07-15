import styles from "../styles/store.module.css";
import Card from "../components/Card";
import { useData } from "../contexts/DataProvider";

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: object;
  title: string;
};
export default function Store() {
  const { products } = useData();
  return (
    <div className={styles.store}>
      {products.map((product: Product) => {
        return (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
