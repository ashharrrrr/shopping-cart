import style from './Total.module.css'
import { useData } from "../contexts/DataProvider";
export default function Total() {
  const { userCart } = useData();
  let total = 0;
  userCart.map((item) => {
    total = total + item.price;
  });

  return (
    <div>
      <div className={style.total}>
        <h1>Total:</h1>
        <p>{`$ ${total}`}</p>
      </div>
      <button className={style.btn}>Buy Now</button>
    </div>
  );
}
