import Navbar from "./components/Navbar.tsx";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import DataProvider from "./contexts/DataProvider.tsx";

export default function App() {
  return (
    <DataProvider>
      <div className={styles.page}>
        <Navbar />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </DataProvider>
  );
}
