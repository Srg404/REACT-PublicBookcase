import L from 'leaflet';
import pinImg from '../../assets/images/pin.svg';

const markerCustom = new L.Icon({
    iconUrl: pinImg,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
});

const markerCustomActive = new L.Icon({
    iconUrl: pinImg,
    iconSize: [50, 63],
    iconAnchor: [25, 63],
});

export { markerCustom, markerCustomActive };