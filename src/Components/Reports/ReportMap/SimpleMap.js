import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../../css/report/SimpleMap.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { history } from '../../../helps/history';

import LCG from 'leaflet-control-geocoder';
import L from 'leaflet';

import * as GeoSearch from 'leaflet-geosearch';
import { reportActions } from '../../../actions/reportActions';
// import { useHistory } from 'react-router';

function LocationMarker({onLocationFound, lat,lng}) {
  const [position, setPosition] = useState(lat && lng ? { lat: lat, lng: lng } : null);
  const [locationName, setLocationName] = useState("");
  const map = useMapEvents({
    locationfound(e) {      
      setPosition(e.latlng)      
      const geocoder = L.Control.Geocoder.nominatim();
      geocoder.reverse(e.latlng, map.options.crs.scale(300), results => {
        setLocationName(results[0]?.name);
        onLocationFound( results[0]?.name,e?.latlng.lat,e?.latlng.lng );
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
        setLocationName(results[0]?.name);        
        onLocationFound( results[0]?.name,e?.latlng.lat,e?.latlng.lng );
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


  if(position !== null && locationName!==null)  return(
    <Marker position={position}>
      <Popup add={e => console.log(e)} closeButton={false} closeOnClick={false}>
        {locationName}
      </Popup>
    </Marker>
  )
  return null;
}


export default function SimpleMap() {  
  const report = useSelector(state => state.reports.saveReport);
  // const history = useHistory();
  const dispatch = useDispatch();
  const onLocationFound = (name,lat,lng)=> dispatch(reportActions.saveLocation(name,lat,lng));
  const redirect = () => {report.location !== '' ? history.push("/report/create"):console.log("empty location");}
  return (
    <MapContainer id="mapid" center={[32.0576485, 34.7652664]} zoom={15} scrollWheelZoom={true}>
      <LocationMarker onLocationFound={onLocationFound} lat={report?.location_lat} lng={report?.location_lat}   />
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



