import { Component, useEffect, useState, useRef } from 'react';
import { useHistory } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

import LCG from 'leaflet-control-geocoder';
import L from 'leaflet';

import * as GeoSearch from 'leaflet-geosearch';
import { createReport } from '../../../api/reports';
import '../../../css/report/SimpleMap.css';
function LocationMarker(props) {
  const [position, setPosition] = useState(null);
  const [locationName, setLocationName] = useState("");

  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng)
      const geocoder = L.Control.Geocoder.nominatim();
      geocoder.reverse(e.latlng, map.options.crs.scale(300), results => {
        setLocationName(results[0].name);
        props.onLocationFound(results[0].name);
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
        props.onLocationFound(results[0].name);
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

export default function SimpleMap(){
  const history = useHistory();
  const [locationQuery,setLocationQuery] = useState('');
  const  redirectCreateReport = () => {
    if(locationQuery==='') return;
    localStorage.setItem('location', locationQuery);
    history.push("/report/create");
  }
  return (
    <MapContainer className="" id="mapid" center={[32.0576485, 34.7652664]} zoom={15} scrollWheelZoom={true}>
      <LocationMarker onLocationFound={l =>  {debugger;console.log(l); setLocationQuery(l)}} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <div className="leaflet-bottom LeafletFooter">
        <input type="button" value="אישור ומילוי טופס"
          onClick={(e) => { redirectCreateReport() }}
          className="btnStyle span3 leaflet-control SendAddressButton" />

      </div>
    </MapContainer>

  );
}
