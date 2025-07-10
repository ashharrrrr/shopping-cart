import App from "./App.tsx"
import Home from "./pages/Home.tsx"
import Store from "./pages/Store.tsx";
import Cart from "./pages/Cart.tsx";
const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {index: true, element: <Home /> },
            {path: "store", element: <Store /> },
            {path: "cart", element: <Cart />},
        ],
    },
]

export default routes;
