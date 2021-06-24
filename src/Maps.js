import React, {useState} from 'react'
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Maps = () => {
    const [mapParams, setMapParams] = useState({
        center: {
          lat: 39.0069,
          lng: -94.5292
        },
        zoom: 15
      })
  return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'fdsds' }}
          defaultCenter={mapParams.center}
          defaultZoom={mapParams.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <LocationOnIcon
            lat={39.007504}
            lng={-94.5292}
            text="My Marker"
            style={{fontSize:50}}
          />
        </GoogleMapReact>
      </div>
    );
}

export default Maps;
