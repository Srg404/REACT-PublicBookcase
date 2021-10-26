import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';
import Titles from '../../components/titles/titles';


function HomePage() {

  const { width } = useViewportSize();
  let buttonSwitchJSX;
  if (width > 720) {
    buttonSwitchJSX = (<Button
      leftIcon={<FontAwesomeIcon icon={faMap} />}
      size="lg"
      variant="white"
      component={NavLink}
      to="/map">
      Afficher la carte
    </Button>)
  } else {
    buttonSwitchJSX = (<Button
      leftIcon={<FontAwesomeIcon icon={faList} />}
      size="lg"
      variant="white"
      component={NavLink}
      to="/map">
      Afficher la liste
    </Button>)
  }


  return (
    <div id="home" className="home">
      <div className="home-container">
        <Titles
          title="Andenne"
          subTitle="Boites à livres"
        />
        <p>Autogestion citoyennes des boites a livres sur la region d’Andenne</p>
        {buttonSwitchJSX}
      </div>
    </div>
  );
}

export default HomePage;
