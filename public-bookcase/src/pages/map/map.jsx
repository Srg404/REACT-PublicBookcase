import './map.scss';
import pinImg from '../../assets/images/pin.svg';
import Titles from '../../components/titles/titles';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

function MapPage() {

  const iconPerson = new L.Icon({
    iconUrl: pinImg,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
  });

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
            icon= { iconPerson }
            >
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapPage;

