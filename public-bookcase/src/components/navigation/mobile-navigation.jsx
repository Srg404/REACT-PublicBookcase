import './navigation.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Group } from '@mantine/core';

function MobileNavigation() {
  return (
    <nav id="nav" className="mobile-nav">
      <Group position="center">
        <NavLink
          to="/"
          exact
          className="mobile-link"
          activeClassName="active"
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          to="/map"
          className="mobile-link"
          activeClassName="active"
        >
          <FontAwesomeIcon icon={faList} />
        </NavLink>
        <NavLink
          to="/about"
          className="mobile-link"
          activeClassName="active"
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </NavLink>
      </Group>
    </nav>
  );
}

export default MobileNavigation;