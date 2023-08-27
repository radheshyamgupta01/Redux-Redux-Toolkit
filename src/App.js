import React from 'react'
import Header from './Header'
import Login from './Login'
import UserProfile from './UserProfile'
import "./App.css"
import  { useSelector} from "react-redux"
import ReduxStore from './Store/ReduxStore'
export default function App() {
 const isAuth= useSelector((state)=>state.auth.isAuthenticated)
  return (
    <div className='app'>
      <Header></Header>
     {!isAuth&& <Login></Login>}
     {isAuth && <UserProfile></UserProfile>}
   
      <ReduxStore></ReduxStore>
    </div>
  )
}
