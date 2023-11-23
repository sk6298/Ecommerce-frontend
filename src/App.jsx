import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />}>
        <Route path=":category" element={<ProductList />}></Route>
      </Route>
      <Route path="/product" element={<Product />}>
        <Route path=":id" element={<Product />}></Route>
      </Route>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
      <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" Component={Home} />
      {/* <Home /> */}
      {/* <ProductList/> */}
      {/* <Product /> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart /> */}
    </Routes>
  );
}

export default App;
