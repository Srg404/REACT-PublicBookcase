import Titles from '../../components/titles/titles';
import './map.scss';

function MapPage() {
  return (
    <div id="map" className="map">
      <Titles
        title="Andenne"
        subTitle="Boites à livres"
      />
      <div className="sidebar">
        [Sidebar]
      </div>
      <div className="map-display">
        [Map]
      </div>
    </div>
  );
}

export default MapPage;

