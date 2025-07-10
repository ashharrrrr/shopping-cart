import styles from "../styles/store.module.css";
import getShopData from "../data";
import Card from "../components/Card";
const products = await getShopData();
export default function Store() {
  type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: object;
    title: string;
  };
  return <div className={styles.store}>
  {products.map((product: Product) => {
      return <Card title={product.title} image={product.image} price={product.price}/>
  })}
    </div>;
}
