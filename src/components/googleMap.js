import React from "react"
import GoogleMapReact from "google-map-react"

const defaultProps = {
  center: {
    lat: 10.489139,
    lng: -66.878127,
  },
  zoom: 15,
}

// GoogleMaps component

const GoogleMap = () => (
  <div className="map">
    <GoogleMapReact
      bootstrapURLKeys={{ key: `${process.env.GATSBY_GOOGLE_MAPS_API_KEY}` }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    />
  </div>
)

export default GoogleMap
