import { Component, useEffect, useState, useRef } from 'react';
import '../../../css/report/SimpleMap.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

import LCG from 'leaflet-control-geocoder';
import L from 'leaflet';

import * as GeoSearch from 'leaflet-geosearch';

function LocationMarker({ onLocationFound }) {
  const lat = isNaN(localStorage.getItem('lat')) ? undefined : localStorage.getItem('lat');
  const lng = isNaN(localStorage.getItem('lng')) ? undefined : localStorage.getItem('lng');
  const [position, setPosition] = useState(lat && lng ? { lat: lat, lng: lng } : null);
  const [locationName, setLocationName] = useState("");
  console.log("position", position);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng)
      const geocoder = L.Control.Geocoder.nominatim();
      geocoder.reverse(e.latlng, map.options.crs.scale(300), results => {
        setLocationName(results[0].name);
        onLocationFound({ name: results[0].name, latlng: e.latlng });
      })
      map.flyTo(e.latlng, map.getZoom())
    },
    click(e) {
      if (e.containerPoint.y > 325) {
        return
      }
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
      const geocoder = L.Control.Geocoder.nominatim();
      geocoder.reverse(e.latlng, map.options.crs.scale(300), results => {
        setLocationName(results[0].name);
        onLocationFound({ name: results[0].name, latlng: e.latlng });
      })

    }
  })


  useEffect(() => {
    map.locate();
    const search = new GeoSearch.GeoSearchControl({
      provider: new GeoSearch.OpenStreetMapProvider(),
    });
    map.addControl(search);

  }, [])


  return position === null ? null : (
    <Marker position={position}>
      <Popup add={e => console.log(e)} closeButton={false} closeOnClick={false}>
        {locationName}
      </Popup>
    </Marker>
  )
}


export default class SimpleMap extends Component {

  state = {
    location: localStorage.getItem('location'),
    lat: localStorage.getItem('lat'),
    lon: localStorage.getItem('lng')

  }
  redirect = () => {
    if (this.state.location === '') return;
    localStorage.setItem('location', this.state.location);
    localStorage.setItem('lat', this.state.lat);
    localStorage.setItem('lng', this.state.lng);
    console.log(localStorage);
    this.props.history.push("/report/create");

  }
  render() {
    return (

      <MapContainer id="mapid" center={[32.0576485, 34.7652664]} zoom={15} scrollWheelZoom={true}>
        <LocationMarker onLocationFound={({ name, latlng }) => { this.setState({ location: name, lat: latlng.lat, lng: latlng.lng }) }} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <div className="leaflet-bottom LeafletFooter">
          <input type="button" value="אישור ומילוי טופס"
            onClick={this.redirect}
            className="btnStyle span3 leaflet-control SendAddressButton" />

        </div>
      </MapContainer>

    )
  }
}



