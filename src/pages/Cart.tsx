import Card from "../components/Card";
import { useData } from "../contexts/DataProvider";
import { type Product } from "./Store";

export default function Cart() {
  const { userCart } = useData();
  return (
    <div>
      {userCart.map((product: Product) => {
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
