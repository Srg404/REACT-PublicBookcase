import './navigation.scss';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav id="nav">
        <NavLink 
            exact
            to="/"
            activeClassName="active"
            >Accueil</NavLink>
        <NavLink 
            to="/About"
            activeClassName="active"
        >About</NavLink>
    </nav>
  );
}

export default Navigation;