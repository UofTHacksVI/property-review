import React from 'react';
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';

const defaultLocation = { lat: 43.659, lng: -79.396 }
var locations = [
  {lat: 43.659, lng: -79.396},
  {lat: 43.669, lng: -79.383},
  {lat: 43.629, lng: -79.376},
  {lat: 43.680, lng: -79.346},
  {lat: 43.519, lng: -79.406},
  {lat: 43.619, lng: -79.696},
  {lat: 43.639, lng: -79.354},
  {lat: 43.699, lng: -79.293}
]

const MapWithClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD9HOl0pZippiOooSr3Gbclta9fSJygXc0",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={defaultLocation}>
    <MarkerClusterer>
      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

class Map extends React.PureComponent {
  render() {
    return (
        <MapWithClusterer markers={locations}/>
    )
  }
}

export default Map;
