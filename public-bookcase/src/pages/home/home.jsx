import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { Button } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import Titles from '../../components/titles/titles';


function HomePage() {
  return (
    <div id="home" className="home">
      <div className="home-container">
        <Titles 
          title="Andenne"
          subTitle="Boites à livres"
        />
        <p>Autogestion citoyennes des boites a livres sur la region d’Andenne</p>
        <Button
          leftIcon={<FontAwesomeIcon icon={faMap} />}
          size="lg"
          variant="white"
          component={NavLink}
          to="/map">
          Afficher la carte
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
