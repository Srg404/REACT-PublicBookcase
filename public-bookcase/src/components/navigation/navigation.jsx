import './navigation.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Button, Group } from '@mantine/core';

function Navigation() {
  return (
    <nav id="nav">
      <Group>
        <Button
          leftIcon={<FontAwesomeIcon icon={faHome} />}
          variant="white"
          compact
          component={NavLink}
          exact
          to="/"
          activeClassName="active">
          Accueil
        </Button>
        <Button
          leftIcon={<FontAwesomeIcon icon={faMap} />}
          variant="white"
          compact
          component={NavLink}
          exact
          to="/map"
          activeClassName="active">
          Afficher la carte
        </Button>
        <Button
          leftIcon={<FontAwesomeIcon icon={faInfoCircle} />}
          variant="white"
          compact
          component={NavLink}
          exact
          to="/about"
          activeClassName="active">
          A Propos
        </Button>
      </Group>
    </nav>
  );
}

export default Navigation;