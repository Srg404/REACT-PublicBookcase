import './home.scss';
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
        <p>Autogestion citoyennes des boites a livres sur la region d’andennes</p>
        {/* <div className="btn loading">
          <i className="fas fa-spinner"></i> Chargement
        </div>
        */}
        <NavLink
          to="/map"
          className="btn btn-effect"
        >Afficher la carte</NavLink>
      </div>
    </div>
  );
}

export default HomePage;
