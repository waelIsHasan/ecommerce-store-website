import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './pages/Auth/sign-up.jsx';
import SignIn from './pages/Auth/sign-in.jsx';
import AuthLayout from './pages/Auth/AuthLayout.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
const App = () => {
  return (
    <Router>
      <div className="app">
    
        <Routes>
        <Route path="/" element={<Navbar/>}></Route>
          <Route  element={<AuthLayout/>}>
            <Route path="auth/signup" element={<SignUp />} />
            <Route path="auth/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};


export default App;