import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>

    <nav style={{padding: "1rem", backgroundColor: "#f0f0f0"}}>

      <ul style={{display: "flex", flexDirection:"row", listStyle: "none", gap: "rem", textDecoration: "none", justifyContent: "center"}}>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li style={{}}>

          <Link to="/about">About</Link>

        </li>


        <li style={{}}>

          <Link to="/services">Services</Link>

        </li>


        <li style={{}}>

      
          <Link to="/contact">Contact</Link>

        </li>





      </ul>



    </nav>


    </>
  )
}

export default Navbar