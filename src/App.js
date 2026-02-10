import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";


const router = createBrowserRouter([
  {path:'/',element:<Home></Home>},
  {path:'/products',element:<Product></Product>},
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
