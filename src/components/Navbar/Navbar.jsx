import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
    <button className="logo">
        <img src="https://seeklogo.com/images/G/gold_s_gym_2008-logo-5B7A8ECB44-seeklogo.com.png" alt="" width="85px" height="100px" />
      </button>
      <h1 className="logoName">Build-UR-Life</h1>
      <nav className="navbar">
      <ul>
        <li>
        <Link className="linkCateg" to="/">Catálogo</Link>
          </li>
          <li>
          <Link className="linkCateg" to="/categoria/proteinas">Proteinas</Link>
          </li>
          <li>
          <Link className="linkCateg" to="/categoria/preentrenos">Preentrenos</Link>
          </li>
          <li>
          <Link className="linkCateg" to="/categoria/comestibles">Comestibles</Link>
          </li>
          <li>
          <Link className="linkCateg" to="/categoria/accesorio">Accesorios</Link>
          </li>
          <li>
          <Link className="linkCateg" to="/cart">
            <CartWidget/>
            </Link>
          </li>
        </ul>
      </nav>
  </header>
  )
}

export default NavBar