// TOOLS
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
// STYLES
import { StyledMap } from '../styles/Map.styled';
// ICON
import Icon from '../images/icon-location.svg';

// LEAFLET CUSTOM ICON
export const customIcon = () => {
  return new L.Icon({
    iconUrl: Icon,
    className: 'icon'
  });
};

export default function Map({ data }) {
  const lat = data.location.lat;
  const lng = data.location.lng;

  return (
    <StyledMap>
      <MapContainer
        center={ [lat, lng] }
        zoom={ 13 }>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={ [lat, lng] } icon={ customIcon() } />
      </MapContainer>
    </StyledMap>
  );
}