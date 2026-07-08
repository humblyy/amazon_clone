import React ,{useState}from 'react'
import classes from "./auth.module.css"
import { Link } from 'react-router-dom';
import { auth } from '../../Action/firebase';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
import { useContext } from 'react';
import { Cartcontext } from '../../components/contextProvider/ContextProvider';
import { type } from '../../Action/CartActions';

import {ClipLoader } from "react-spinners"  //for loading effect
import { useNavigate } from 'react-router-dom'; //for moving to different pages like home page
import { useLocation } from 'react-router-dom';



function Auth() {

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [error,setError]=useState("")
// capturing user data in context
const [{user},dispatch]=useContext(Cartcontext)
console.log(user)

//loading effect
const [loading,setLoading]=useState({
  sign_in:false,
  sign_up:false
})
const navigate=useNavigate()
const navigationData=useLocation()
console.log(navigationData)
// console.log(password)

//authenticating the user
const authenticator=async (e)=>{
e.preventDefault()
// console.log(e.target.name)
if(e.target.name==="signin"){
  setLoading({...loading,sign_in:true})
  signInWithEmailAndPassword(auth,email,password)
  .then((userData)=>{
    console.log(userData)
    // capturing user data to provide for other components
    dispatch({
      type:type.SET_USER,
      user:userData.user
    })
    setLoading({ ...loading, sign_in: false });
    navigate(navigationData?.state?.redirect || '/')  //after sign in move to home page
  })
  .catch((error)=>{
    setLoading({ ...loading, sign_in: false });
     console.log("this is sign in ",error);
    //  setError(error.message)
    console.log("this is from message",error.message)
    console.log("this is from code",error.code)
    setError(error.code.split("/")[1].split("-").join(" "));
  }
   )

}
else{
  setLoading({ ...loading, sign_up: true });
createUserWithEmailAndPassword(auth,email,password)
.then((userData)=>{
  console.log(userData);
  dispatch({
    type: type.SET_USER,
    user: userData.user,
  });
  setLoading({ ...loading, sign_up:false });
  navigate(navigationData?.state?.redirect || '/')
}
  )
.catch((error)=>{
  setLoading({...loading,sign_up:false})

  setError(error.code.split("/")[1].split("-").join(" "))
  console.log("from message",error.message);
  console.log("from code",error.code);
})
}

}

  return (
    <section className={classes.auth_container}>
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxwUGMThSMYygZoRtiJEmrL-06o0HboKs5IdnHgn73Sg&s=10"
          alt="amazon logo"
        />
      </Link>
      <div className={classes.form_container}>
        <h1>Sign In</h1>
        {
          navigationData?.state?.message && (<p style={{color:"#C10115",padding:"6px",textAlign:"center"}}>{navigationData?.state?.message}</p>)
        }
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input 
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className={classes.login_button}
            onClick={authenticator}
            name="signin"
          >
           {loading.sign_in?<ClipLoader size={14.5}/>: 'Sign In'}
          </button>
          <p>
            By signing in you are Agree to Amazon Clone Condition of use and
            sale .Please see our Privacy Notice our Cookies Notice & our
            Interest-Based Ads Notice
          </p>
          <button
            className={classes.signup_button}
            type="submit"
            onClick={authenticator}
            name="signup"
          >
             {loading.sign_up?<ClipLoader size={14.5}/>: 'Create Your Amazon Account'}
           
          </button>
        </form>

        {/* display the error */}
        {error && (
          <p style={{ color: "#CC0C39", paddingTop: "8px", width: "100%" }}>
            {error}
          </p>
        )}
      </div>
    </section>
  );
}

export default Auth