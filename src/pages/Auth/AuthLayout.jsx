// Create a new AuthLayout.jsx
// import './auth.css'
import { Outlet } from 'react-router-dom';

const AuthLayout = ({ children }) => {
    return (
      <div className="auth-container">
        {[...Array(20)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        <Outlet /> 

      </div>
    );
  };
  export default AuthLayout;