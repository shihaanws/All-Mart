import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from "./Contact";
import React, {useEffect} from "react";
// import { MultiStepForm } from "./components/MultiStepForm";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
// import Payment from './Payment'
import Login from './Login';
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Success from "./Success";

function App() {

const [{user},dispatch] = useStateValue();

  useEffect(()=> {
      auth.onAuthStateChanged((authUser)=>{
        console.log('User is ', authUser);

        if(authUser){
              dispatch({
                type: 'SET_USER',
                user: authUser
              })

        }else{
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })

      // return()=> {
      //   unsubscribe();
      // }
    
  },[])

  
  return (
    <Router>
      <div className="app">

        <Switch>


          <Route path="/checkout">
            <Header/>
           <Checkout/>
          </Route>

          <Route path="/login">
           <Login />
          </Route>

          <Route path="/address">
            {/* <Header/> */}
            <Contact />    
            </Route>

            <Route path="/success">
              <Success/>
          </Route>

          <Route path="/">
            <Header/>
              <Home/>
          </Route>


          

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
 