import "./App.css";

import Routing from "./Routing";
import { useContext } from "react";
import { auth } from "./Action/firebase";
import { type } from "./Action/CartActions";
import { Cartcontext } from "./components/contextProvider/ContextProvider";
import { useEffect } from "react";

//handling when user logged out and on page refresh
function App() {
  const [{ user }, dispatch] = useContext(Cartcontext);
useEffect(()=>{
  auth.onAuthStateChanged((loggInnedUser)=>{
    // console.log(loggInnedUser)
    if(loggInnedUser){
      dispatch({
        type:type.SET_USER,
        user:loggInnedUser
      })
    }
    else{
      dispatch({
        type:type.SET_USER,
        user:null
      })
    }
  })
},[])

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
