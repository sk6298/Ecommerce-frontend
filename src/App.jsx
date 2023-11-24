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
import RequireAuth from "./components/RequireAuth";
import CreateProduct from "./pages/admin/CreateProduct";
import EditProduct from "./pages/admin/EditProduct";
import AdminProductList from "./pages/admin/AdminProductList";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
      <Route path="/" element={ <RequireAuth> <Home /> </RequireAuth> } />

      <Route path="login" element={user ? <Navigate to="/" /> : <Login />}></Route>

      <Route path="register" element={user ? <Navigate to="/" /> : <Register />}/>

      <Route path="cart" element={<RequireAuth><Cart /></RequireAuth>}/>

      <Route path="success"element={<RequireAuth><Success /></RequireAuth>}/>

{
  user && user.isAdmin ?
  <>
    <Route path="products" >
      <Route index element={<RequireAuth><AdminProductList /></RequireAuth> }/>
      <Route path="create"element={<RequireAuth><CreateProduct /></RequireAuth>}/>
      <Route path="edit/:id"element={<RequireAuth><EditProduct /></RequireAuth>}>
        <Route index element={<EditProduct></EditProduct>}></Route>
      </Route>
    </Route>
  </>

:
  <>
    <Route path="products" element={<RequireAuth><ProductList /></RequireAuth> }>
      <Route path=":category" element={<RequireAuth><ProductList /></RequireAuth> }></Route>
    </Route>

    <Route path="product" element={<RequireAuth><Product /></RequireAuth>}>
      <Route path=":id"element={<RequireAuth><Product /></RequireAuth>}></Route>
    </Route>
  </>
}



      <Route path="*" Component={Home} />
    </Routes>
  );
}

export default App;
