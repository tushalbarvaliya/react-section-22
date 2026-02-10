import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { RootLayout } from "./pages/RootLayout";
import Error from "./pages/Error";
import ProductPage from "./pages/ProductPage";

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
    errorElement:<Error></Error>,
    children: [
      { path: "", element: <Home></Home> },
      { path: "products", element: <Product></Product> },
      {path : 'products/:id',element:<ProductPage></ProductPage>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
