import React from 'react'
import Header from './Header'
import Login from './Login'
import "./App.css"
import ReduxStore from './Store/ReduxStore'
export default function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Login></Login>
      <ReduxStore></ReduxStore>
    </div>
  )
}
