import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const SimpleMap = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 43.786, lng: -79.463 }} />
));

class Map extends React.PureComponent {
  render() {
    return (
        <SimpleMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9HOl0pZippiOooSr3Gbclta9fSJygXc0&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />} />
    )
  }
}

export default Map;
