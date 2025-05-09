import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./pages/Auth/sign-up.jsx";
import SignIn from "./pages/Auth/sign-in.jsx";
import AuthLayout from "./pages/Auth/AuthLayout.jsx";
import Home from "./pages/Home/Home.jsx";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* public routes */}
          <Route  path="/" element={<Home/>}/>

          <Route element={<AuthLayout />}>
            <Route path="auth/signup" element={<SignUp />} />
            <Route path="auth/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
