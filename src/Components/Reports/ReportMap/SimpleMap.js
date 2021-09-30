import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../css/report/SimpleMap.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

import LCG from 'leaflet-control-geocoder';
import L from 'leaflet';

import * as GeoSearch from 'leaflet-geosearch';
import { reportActions } from '../../../actions/reportActions';

function LocationMarker({ onLocationFound }) {
  const lat = isNaN(localStorage.getItem('lat')) ? undefined : localStorage.getItem('lat');
  const lng = isNaN(localStorage.getItem('lng')) ? undefined : localStorage.getItem('lng');
  const [position, setPosition] = useState(lat && lng ? { lat: lat, lng: lng } : null);
  const [locationName, setLocationName] = useState("");

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
      showMarker: false,
      searchLabel: "הכנס כתובת",
      notFoundMessage: "לא נמצאו תוצאות",
      autoClose: true,
      classNames: { resetButton: "ResetButton" }
    });

    map.addControl(search);

  }, [map])


  return position === null ? null : (
    <Marker position={position}>
      <Popup add={e => console.log(e)} closeButton={false} closeOnClick={false}>
        {locationName}
      </Popup>
    </Marker>
  )
}


export default function SimpleMap({onAddressChanged}) {

  const report = useSelector(state => state.reports.saveReport);
  const dispatch = useDispatch();
  const [location, setLocation] = useState(report ? report.person_location:"");
  const [lat, setLat] = useState(report? report.location_lat:undefined);
  const [lng, setLng] = useState(report? report.location_lng:undefined);

  const redirect = () => {

    if (location !== '') {console.log(location,lat,lng);dispatch(reportActions.saveLocation(location,lat,lng))}    
  }
  return (
    <MapContainer id="mapid" center={[32.0576485, 34.7652664]} zoom={15} scrollWheelZoom={true}>
      <LocationMarker onLocationFound={({ name, latlng }) => {
        onAddressChanged(name);
        setLocation(name);
        setLat(latlng.lat);
        setLng(latlng.lng);
      }} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <div className="leaflet-bottom LeafletFooter">
        <input type="button" value="אישור ומילוי טופס"
          onClick={redirect}
          className="btnStyle span3 leaflet-control SendAddressButton" />

      </div>
    </MapContainer>

  )

}



