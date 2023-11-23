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

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/products"
        element={
          <RequireAuth>
            <ProductList />
          </RequireAuth>
        }
      >
        <Route
          path=":category"
          element={
            <RequireAuth>
              <ProductList />
            </RequireAuth>
          }
        ></Route>
      </Route>
      <Route
        path="/product"
        element={
          <RequireAuth>
            <Product />
          </RequireAuth>
        }
      >
        <Route
          path=":id"
          element={
            <RequireAuth>
              <Product />
            </RequireAuth>
          }
        ></Route>
      </Route>
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <Login />}
      ></Route>
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route
        path="/cart"
        element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        }
      />
      <Route
        path="/success"
        element={
          <RequireAuth>
            <Success />
          </RequireAuth>
        }
      />
      <Route path="*" Component={Home} />
    </Routes>
  );
}

export default App;
