import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../../css/report/SimpleMap.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { history } from '../../../helps/history';

import LCG from 'leaflet-control-geocoder';
import L from 'leaflet';

import * as GeoSearch from 'leaflet-geosearch';
import { reportActions } from '../../../actions/reportActions';
import { reportConstants,SUMBITBUTTON_LOCATION } from '../../../constants/report.constants';

const LATLNG = [32.0576485, 34.7652664];

function LocationMarker({ onLocationFound, position, setPosition, locationName, setLocationName, hasMap, setHasMap,trySubmit }) {  
  function setAddress({ country = "", neighbourhood = "", town = "", village = "", city = "", road = "", house_number = "", suburb = "" }) {
    let start = village;
    if (start !== "") return start;
    start = town;
    if (start !== "") return `${start}${road ? `, ${road} ${house_number}` : ""}`;
    start = city;
    if (start !== "") return `${city}${suburb ? `, ${suburb}` : ""}${road ? `, ${road}` : ""}${neighbourhood ? `, ${neighbourhood}` : ""} ${house_number}`;
    return country;

  }
  const geocoder = L.Control.Geocoder.nominatim({
    geocodingQueryParams: {
      'accept-language': 'he', // render results in Hebrew
      countrycodes: 'il', // limit search results to the Israel
    },
    reverseQueryParams: {
      'accept-language': 'he', // render results in Hebrew
      countrycodes: 'il', // limit search results to the Israel
    }
  });
  const getLocationNameByCoordinates = (coordinates, map) => {

    geocoder.reverse(coordinates, map.options.crs.scale(300), results => {
      const name = results[0] ? setAddress(results[0].properties.address) : "Illegal address";
      setLocationName(name);
      setPosition(coordinates);
      onLocationFound(name, coordinates?.lat, coordinates?.lng);
      map.flyTo(coordinates, map.getZoom())
    })
  }
  const map = useMapEvents({
    locationfound(e) {
      getLocationNameByCoordinates(e.latlng, map);
    },
    click(e) {  
      function isSumbitButton(x,y){
        return y >=SUMBITBUTTON_LOCATION.MIN_Y && y<=SUMBITBUTTON_LOCATION.MAX_Y
        && x >=SUMBITBUTTON_LOCATION.MIN_X && x<=SUMBITBUTTON_LOCATION.MAX_X;
      }      
        if(!isSumbitButton(e.containerPoint.x,e.containerPoint.y))
        return getLocationNameByCoordinates(e?.latlng, map);      
    }
  })
  //set map controls
  useEffect(() => {
    if (!position) map.locate();
    if (hasMap) return;
    const search = new GeoSearch.GeoSearchControl({
      provider: new GeoSearch.OpenStreetMapProvider({
        params: {
          'accept-language': 'he', // render results in Hebrew
          countrycodes: 'il', // limit search results to the Israel
        },
      }),
      showMarker: false,
      searchLabel: "הכנס כתובת",
      notFoundMessage: "לא נמצאו תוצאות",
      autoClose: true,
      classNames: {
        resetButton: "ResetButton"
      },
      position: 'topright'
    });
    map.addControl(search);
    map.zoomControl.setPosition('topright');
    setHasMap(true);
  }, [map, hasMap, setHasMap, position])
  //add marker to map  
  if (position && locationName) {
    return (
      <Marker id="markerMap" position={position}>
        <Popup closeButton={true} closeOnClick={false}>
          {locationName}
        </Popup>
      </Marker>
    )
  }
  return <div id="failedMarker"></div>;
}


export default function SimpleMap() {
  const report = useSelector(state => state.createReport.temp);
  const trySubmit = useSelector(state => state.createReport.trySubmit);
  const [position, setPosition] = useState(report?.location_lat && report?.location_lng ? { lat: report?.location_lat, lng: report?.location_lng } : null);
  const [locationName, setLocationName] = useState(report?.person_location);
  const [hasMap, setHasMap] = useState(false);
  const latlng = report?.location_lat && report?.location_lng ? [report.location_lat, report.location_lng] : LATLNG;

  const dispatch = useDispatch();
  const onLocationFound = (name, lat, lng) => {           
     dispatch(reportActions.saveLocation(name, lat, lng))
  };
  const redirect = (e) => {
    e.preventDefault();
    e.stopPropagation();       
    if (report && report.person_location) {
      setHasMap(false);
      history.push("/report/create");
    }
    else {
      dispatch(reportActions.setErrorModal(true))    
    }
  }

  window.onbeforeunload = e => {
    e.preventDefault();
    const localReport = JSON.stringify({ ...report, person_location: locationName, location_lng: position?.lng, location_lat: position?.lat })
    localStorage.setItem('report', localReport);
  }
  
  return (
    <MapContainer id="mapid" center={latlng} zoom={15} scrollWheelZoom={true}>
      <LocationMarker
        trySubmit={trySubmit}
        onLocationFound={onLocationFound}
        position={position}
        setPosition={setPosition}
        locationName={locationName}
        setLocationName={setLocationName}
        hasMap={hasMap}
        setHasMap={setHasMap}
      />
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



