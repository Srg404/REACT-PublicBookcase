import './home.scss';

function HomePage() {
  return (
        <div className="home">
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
            <a href="/map" className="btn btn-effect"> Afficher la carte </a>
            </div>
        </div>
  );
}

export default HomePage;
