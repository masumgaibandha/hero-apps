import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
  <div className=' flex items-center container mx-auto'>
    <div className="navbar-start">
    
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <a>Parent</a>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
  </div>
</nav>
  )
}

export default Navbar