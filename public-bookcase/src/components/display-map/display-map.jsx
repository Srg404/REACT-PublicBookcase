import 'leaflet/dist/leaflet.css';
import './display-map.scss';

import { useContext } from 'react';
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { iconCustom, iconCustomActive } from './icon-custom';
import { BookcaseContext } from '../bookcase-context-provider/bookcase-context-provider';

function DisplayMap({ status }) {

  const { result } = useContext(BookcaseContext);
  const { setContextActive } = useContext(BookcaseContext);

  function handleClick(recordid) {
    setContextActive(recordid);
  }

  const MarkersJSX = result.map(
    (bookCase) => (
      <Marker
        key={bookCase.recordid}
        position={bookCase.fields.geo_point_2d}
        icon={bookCase.active ? iconCustomActive : iconCustom}
        eventHandlers={{ click: () => handleClick(bookCase.recordid) }}
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

DisplayMap.propTypes = {
  status: PropTypes.string.isRequired
}

export default DisplayMap;