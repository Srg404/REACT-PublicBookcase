import 'leaflet/dist/leaflet.css';
import './display-map.scss';

import { useContext, useState } from 'react';
import { LoadingOverlay } from '@mantine/core';
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { markerCustom, markerCustomActive } from './marker-custom';
import { BookcaseContext } from '../bookcase-context-provider/bookcase-context-provider';
import { useViewportSize } from '@mantine/hooks';

function DisplayMap({ status }) {

  const { result } = useContext(BookcaseContext);
  const { setContextActive } = useContext(BookcaseContext);
  const [ mouseOver, setMouseOver] = useState(null);
  const { width } = useViewportSize();

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
        icon={(bookCase.active || (mouseOver === bookCase.recordid)) ? markerCustomActive : markerCustom}
        eventHandlers={{ 
          click: () => handleClick(bookCase.recordid,bookCase.fields.name),
          mouseover: () => setMouseOver(bookCase.recordid),
          mouseout: () => setMouseOver(null),
        }}
      ></Marker>
    )
  );

  if (width <= 720) return (
    <></>
  );

  if (status !== 'done') return (
    <div className="display-map">
      <LoadingOverlay visible={true} />
    </div>
  );

  return (
    <div className="display-map">
      <MapContainer center={[50.489, 5.095]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          style={{color:'white'}}
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