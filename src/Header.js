import React from 'react'
import "./Header.css"
export default function Header() {
  return (
    <div className='header-div'>
        <div className='redux-auth'> 
          <h3>  Redux Auth</h3>

        </div>
        <div className='right'>
          <h4>My product</h4>
          <h4>My Sales</h4>
          < h5 className='logout'>Logout</h5>
        </div>
    </div>
  )
}
