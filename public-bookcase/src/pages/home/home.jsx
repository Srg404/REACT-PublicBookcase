import './home.scss';
import { NavLink } from 'react-router-dom';

function HomePage() {
  return (
        <div id="home" className="home">
            <div className="home-container">
                <div className="title">
                <h1>
                    <strong>
                    <span>Andenne</span>
                    </strong>
                <span>Boites à livres</span>
                </h1>
            </div>
            <p>Autogestion citoyennes des boites a livres sur la region d’andennes</p>
            <div className="btn loading">
                <i className="fas fa-spinner"></i> Chargement
            </div>
            <NavLink 
                to="/map"
                className="btn btn-effect"
            >Afficher la carte</NavLink>
            </div>
        </div>
  );
}

export default HomePage;
