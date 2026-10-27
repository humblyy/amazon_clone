import  { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Cartcontext } from '../contextProvider/ContextProvider'




function RouteProtector({children,message,redirect}) {
const navigate=useNavigate()
const [{user}]=useContext(Cartcontext)

useEffect(()=>{
if(!user){
navigate("/login", { state: { message, redirect } });
}

},[user])




  return children
}

export default RouteProtector