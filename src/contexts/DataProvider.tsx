import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { type Product } from "../pages/Store";

type ShopContext = {
  products: Product[];
  userCart: Product[];
  addToCart: (id: number) => void;
};

const ShopContext = createContext<ShopContext>({
  products: [],
  userCart: [],
  addToCart: () => {},
});

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [userCart, setUserCart] = useState<Product[]>([]);
  const addToCart = (id: number) => {
    const matched = userCart.find((product) => product.id === id);
    if (matched) return;
    products.map((product) => {
      if (product.id === id) {
        setUserCart((prev) => [...prev, product]);
      }
    });
    console.log(userCart);
  };

  useEffect(() => {
    async function getShopData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    getShopData();
  }, []);

  return (
    <ShopContext.Provider value={{ products, userCart, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
}

export const useData = () => {
  const { products, userCart, addToCart } = useContext(ShopContext);
  return { products, userCart, addToCart };
};
