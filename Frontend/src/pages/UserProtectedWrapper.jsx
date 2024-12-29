import React,{useContext, useEffect} from 'react'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'


const UserProtectedWrapper = ({children}) => {
  const token=localStorage.getItem('token');
  const Navigate=useNavigate();
  const {user,setUser}=useContext(UserDataContext);
  useEffect(()=>{
  if(!token){
    Navigate('/login')
  }
  },[token])
  return (
   <>
    {children}
   </>
  )
}

export default UserProtectedWrapper
