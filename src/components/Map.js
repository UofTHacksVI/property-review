import React from 'react';
import { compose, withProps, withHandlers } from 'recompose';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer';

const defaultLocation = { lat: 43.659, lng: -79.396 };
const locations = [
  { lat: 43.659, lng: -79.396 },
  { lat: 43.669, lng: -79.383 },
  { lat: 43.629, lng: -79.376 },
  { lat: 43.68, lng: -79.346 },
  { lat: 43.519, lng: -79.406 },
  { lat: 43.619, lng: -79.696 },
  { lat: 43.639, lng: -79.354 },
  { lat: 43.699, lng: -79.293 }
];
const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let labelIndex = 0;

const MapWithVisualization = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD9HOl0pZippiOooSr3Gbclta9fSJygXc0&libraries=visualization',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withHandlers({
    onMarkerClustererClick: () => markerClusterer => {
      const clickedMarkers = markerClusterer.getMarkers();
      console.log(`Current clicked markers length: ${clickedMarkers.length}`);
      console.log(clickedMarkers);
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={10} defaultCenter={defaultLocation}>
    {props.showHeatMap ? (
      <HeatmapLayer
        data={[
          new window.google.maps.LatLng(43.659, -79.396),
          new window.google.maps.LatLng(43.669, -79.383),
          new window.google.maps.LatLng(43.629, -79.376),
          new window.google.maps.LatLng(43.68, -79.346),
          new window.google.maps.LatLng(43.519, -79.406),
          new window.google.maps.LatLng(43.619, -79.696),
          new window.google.maps.LatLng(43.639, -79.354),
          new window.google.maps.LatLng(43.699, -79.293)
        ]}
      />
    ) : (
      <MarkerClusterer onClick={props.onMarkerClustererClick}>
        {props.markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            label={labels[labelIndex++ % labels.length]}
          />
        ))}
      </MarkerClusterer>
    )}
  </GoogleMap>
));

class Map extends React.PureComponent {
  render() {
    return (
      <MapWithVisualization
        markers={locations}
        showHeatMap={this.props.showHeatMap}
      />
    );
  }
}

Map.propTypes = {
  showHeatMap: PropTypes.bool.isRequired
};

export default Map;
