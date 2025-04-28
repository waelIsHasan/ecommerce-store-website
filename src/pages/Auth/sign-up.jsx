
import { useState } from 'react';
import  {auth}  from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './auth.css'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkedTerms , setCheckedTerms] = useState(false)

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if(!checkedTerms){
        alert('Check Terms first !');
        return
      }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User created successfully');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    
    <div className="signup-container">
      <h2>Register your Account</h2>
      <form className="signup-form" onSubmit={handleCreateUser}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            className="form-input"
            value={confirmPassword}
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
          />
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="terms"
            className="mr-2"
            checked = {checkedTerms}
            onChange={(e)=>{setCheckedTerms(e.target.checked)}}
          />
          <label htmlFor="terms">
            I agree to the{' '}
            <a href="#">
              Terms and Conditions
            </a>
          </label>
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default SignUp;