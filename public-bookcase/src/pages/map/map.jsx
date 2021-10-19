import './map.scss';
import Titles from '../../components/titles/titles';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { iconCustom } from './icon-custom';
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
        <MapContainer center={[50.489, 5.095]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker 
            position={[50.489, 5.095]}
            icon= { iconCustom }
            >
          </Marker>
          <Marker 
            position={[50.480, 5.090]}
            icon= { iconCustom }
            >
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapPage;

