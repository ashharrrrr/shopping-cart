import Table from "../components/Table.tsx";
import Total from "../components/Total.tsx";
import style from "../styles/Cart.module.css";
export default function Cart() {
  return (
    <div className={style.cart}>
      <Table />
      <div className={style.total}>
        <Total />
      </div>
    </div>
  );
}
