import './App.css';
import SignUp from './Auth/sign-up'
import SignIn from './Auth/sign-in';
function App() {

  return (
    <div className="App">
      <SignUp></SignUp>
      <hr></hr>
      <SignIn/>
    </div>
  );
}

export default App;
