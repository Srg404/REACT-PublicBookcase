import 'leaflet/dist/leaflet.css';
import './display-map.scss';

import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { iconCustom } from './icon-custom';

function DisplayMap({ status, data }) {

  const MarkersJSX = data.map(
    (bookCase) => (
      <Marker
        key={bookCase.recordid}
        position={bookCase.fields.geo_point_2d}
        icon={iconCustom}
      ></Marker>
    )
  );

  if (status === 'waiting') return (
    <div className="display-map">
      <p>Chargement...</p>
    </div>
  );

  if (status === 'error') return (
    <div className="display-map">
      <p>Une erreur malencontreuse c'est produit, veuillez recharger la page !</p>
    </div>
  );

  return (
    <div className="display-map">
      <MapContainer center={[50.489, 5.095]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {MarkersJSX}
      </MapContainer>
    </div>
  )
}

DisplayMap.defaultProps = {
  data: []
}

DisplayMap.propTypes = {
  status: PropTypes.string.isRequired,
  data: PropTypes.array
}

export default DisplayMap;