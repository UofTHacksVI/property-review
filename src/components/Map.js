import React from 'react';
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const defaultLocation = { lat: 43.659, lng: -79.396 }

const SimpleMap = compose(
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
    <Marker position={defaultLocation} />}
  </GoogleMap>
));

class Map extends React.PureComponent {
  render() {
    return (
        <SimpleMap />
    )
  }
}

export default Map;
