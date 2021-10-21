import L from 'leaflet';
import pinImg from '../../assets/images/pin.svg';

const iconCustom = new L.Icon({
    iconUrl: pinImg,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
});

const iconCustomActive = new L.Icon({
    iconUrl: pinImg,
    iconSize: [40, 50],
    iconAnchor: [20, 50],
});

export { iconCustom, iconCustomActive };