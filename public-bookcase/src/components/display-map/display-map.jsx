import 'leaflet/dist/leaflet.css';
import './display-map.scss';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { iconCustom } from './icon-custom';
import { useAxios } from '../../utils/useAxios';

function DisplayMap() {

    const { status, data } = useAxios('https://www.odwb.be/explore/dataset/emplacements-des-boites-a-livres-dandenne/download/?format=json&timezone=Europe/Berlin&lang=fr')

    if (status === 'waiting') return (
        <div className="display-map">
            <p>Chargement...</p>
        </div>
    );

    if (status === 'error') return (
        <div className="display-map">
            <p>Une erreur malencontrueuse c'est produit veuillez recharger la page ! </p>
        </div>
    );

    return (
        <div className="display-map">
        <MapContainer center={[50.489, 5.095]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((bookCase) => (
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