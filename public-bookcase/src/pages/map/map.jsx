import './map.scss';

import Titles from '../../components/titles/titles';
import DisplayMap from '../../components/display-map/display-map';

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
      <DisplayMap />
    </div>
  );
}

export default MapPage;

