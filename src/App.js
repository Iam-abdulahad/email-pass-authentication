import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";


const auth = getAuth(app);

function App() {
  return (
    <div className="App">



      <div>
        <center> <h1> Student Login Form </h1> </center>
        <form>
          <div class="container">
            <label>Username : </label>
            <input type="text" placeholder="Enter Username" name="username" required />
              <label>Password : </label>
              <input type="password" placeholder="Enter Password" name="password" required />
                <button type="submit"> Login </button>
                <input type="checkbox" checked="checked" />
                  
                  
                   Remember me
                  <button type="button" class="cancel_btn"> Cancel </button>
                  Forgot <a href="#"> password? </a>
                </div>
              </form>
          </div>




      </div>
      );
}

      export default App;
