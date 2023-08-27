import React from 'react'
import "./Header.css"
import {useDispatch,useSelector} from "react-redux"
import { authActions } from './Store/ManagingReuduxToolkit'
export default function Header() {
  const isAuth= useSelector((state)=>state.auth. isAuthenticated)
  const dispatch=useDispatch()
  const logoutHandler=()=>{
    dispatch(authActions.logOut())
  }

  return (
    <div className='header-div'>
        <div className='redux-auth'> 
          <h3>  Redux Auth</h3>

        </div>
       <div className='right'>
         {isAuth && <h4>My product</h4>}
        {isAuth &&  <h4>My Sales</h4>}
         {isAuth && < h5 className='logout' onClick={logoutHandler}>Logout</h5>}
        </div>
    </div>
  )
}
