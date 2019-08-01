import React from "react"
import GoogleMapReact from "google-map-react"
import containerStyles from "../pages/bio.module.less"

const defaultProps = {
  center: {
    lat: 10.489139,
    lng: -66.878127,
  },
  zoom: 15,
}

const GoogleMap = () => (
  <div className={containerStyles.map}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyAQhe9nSUBaOnvNSv7DRj7g430Gqt94umQ" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    />
  </div>
)

export default GoogleMap
