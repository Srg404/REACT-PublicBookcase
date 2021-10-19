import 'leaflet/dist/leaflet.css';
import './display-map.scss';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { iconCustom } from './icon-custom';

function DisplayMap() {

    const baseURL = 'https://www.odwb.be/explore/dataset/emplacements-des-boites-a-livres-dandenne/download/?format=json&timezone=Europe/Berlin&lang=fr';
    const [bookCaseList, setBookCaseList] = useState([]);
    // status authorize values : 'waiting', 'done', 'error'
    const [status, setStatus] = useState('waiting');
  
    useEffect(() => {
      axios.get(baseURL)
        .then((response) => {
          console.log(response.data);
          setBookCaseList(response.data);
          setStatus('done');
        })
        .catch((error) => {
          console.log(error);
          setStatus('error');
        })
    }, []);

    return (
        <div className="display-map">
        <MapContainer center={[50.489, 5.095]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {bookCaseList.map((bookCase) => (
            <Marker
              key={bookCase.recordid}
              position={bookCase.fields.geo_point_2d}
              icon={iconCustom}
            ></Marker>
          ))}
        </MapContainer>
      </div>
    )
}

export default DisplayMap;