import 'leaflet/dist/leaflet.css';
// import './display-map.scss';

import { useContext, useState } from 'react';
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { iconCustom, iconCustomActive } from './icon-custom';
import { BookcaseContext } from '../bookcase-context-provider';
import Loading from '../loading/loading';

function DisplayMap({ status }) {

  const { result } = useContext(BookcaseContext);
  const { setContextActive } = useContext(BookcaseContext);
  const [ mouseOver, setMouseOver] = useState(null);

  function handleClick(recordid,name) {
    setContextActive({
      recordid: recordid,
      name: name
    });
  }

  const MarkersJSX = result.map(
    (bookCase) => (
      <Marker
        key={bookCase.recordid}
        position={bookCase.fields.geo_point_2d}
        icon={(bookCase.active || (mouseOver === bookCase.recordid)) ? iconCustomActive : iconCustom}
        eventHandlers={{ 
          click: () => handleClick(bookCase.recordid,bookCase.fields.name),
          mouseover: () => setMouseOver(bookCase.recordid),
          mouseout: () => setMouseOver(null),
        }}
      ></Marker>
    )
  );

  if (status !== 'done') return (
    <div className="display-map">
      <Loading status={status} />
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