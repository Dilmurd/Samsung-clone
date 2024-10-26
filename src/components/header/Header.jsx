import React from 'react'
import "./Header.scss"
import { IoSearchOutline } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";


const LI = ["Shop","AI", "Mobile", "TV & Audio", "Appliances", "Computing", "Displays","Accessories","SmartThings","Explore","Support","For Business"]

function Header() {
  return (
    <header>
        <div className="container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <h1>SAMSUNG</h1>
                </div>
                <ul className='navbar__collection'>
                    {
                        LI.map((nav,index)=>(
                            <li className="navbar__collection" key={index}>
                            <a href="#" className="navbar__link">
                                <span>{nav}</span>
                            </a>
                        </li>
                        ))
                    }
                </ul>
                <div className="navbar__icons">
                    <IoSearchOutline/>
                    <CgShoppingCart/>
                    <FaRegUser/>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header