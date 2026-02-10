import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { RootLayout } from "./pages/RootLayout";

// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home></Home>}></Route>
//     <Route path="/products" element={<Product></Product>}></Route>
//   </Route>,
// );

// const router = createBrowserRouter(routeDefinations);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/products", element: <Product></Product> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
