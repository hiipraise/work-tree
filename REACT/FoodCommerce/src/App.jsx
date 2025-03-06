import "./App.css";
import NavBar from "./components/nav/navbar";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import PrivateRoute from "./privateroute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/cartContext";
import Cart from "./pages/cart/cart";
import { ToastContainer } from "react-toastify";
import About from "./pages/about/about";
import Login from "./auth/login";
import Register from "./auth/signup";
// import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
              errorElement={
                <div>
                  <p>Oops!</p>
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/shop"
              element={
                <PrivateRoute>
                  <Shop />
                </PrivateRoute>
              }
            />
          </Routes>
          {/* <Footer /> */}
          <ToastContainer />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
