import Navbar from "./components/Navbar.tsx";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
export default function App() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
