import React from 'react'
import "./Login.css"
import {useDispatch,useSelector} from "react-redux"
import { authActions } from './Store/ManagingReuduxToolkit'
export default function Login() {
  const dispatch=useDispatch()
  const loginHandler=()=>{
    dispatch(authActions.logIn())
  }
    return (
        <div className='login-container'>
            <form>
                <label>EMAIL</label>
                <input></input>
                <label>PASSWORD</label>
                <input></input>
                <button onClick={loginHandler}>Login</button>

            </form>

        </div>
    )
}
