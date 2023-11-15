import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <button className="logo">
        <img src="./public/logoo.png" alt="" width="85px" height="100px" />
      </button>
      <h1 className="logo">Build-UR-Life</h1>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink activeclassname="active" to={`category/women's-clothing`}>Mujer</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/category/men's-clothing">Hombre</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to='/category/electronics'>Electrónico</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to='/category/jewelery'>Accesorio</NavLink>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Navbar;
