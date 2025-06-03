import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./pages/Auth/sign-up.jsx";
import SignIn from "./pages/Auth/sign-in.jsx";
import AuthLayout from "./pages/Auth/AuthLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import AllProduct from "./pages/ALLProduct/AllProduct.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* public routes */}
          <Route  path="/" element={<Home/>}/>
          <Route  path="/all-product" element={<AllProduct/>}/>
          <Route  path="/search" element={<SearchPage/>}/>
          <Route path="/cart" element={<CartPage />} />

          <Route element={<AuthLayout />}>
            <Route path="auth/signin" element={<SignUp />} />
            <Route path="auth/signup" element={<SignIn />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
