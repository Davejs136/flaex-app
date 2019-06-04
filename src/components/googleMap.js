import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 10.489139,
    lng: -66.878127,
  },
  zoom: 12,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
  <div style={{ height: '30vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAQhe9nSUBaOnvNSv7DRj7g430Gqt94umQ' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={10.489139}
        lng={-66.878127}
        text={'Hola amigo'}
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
