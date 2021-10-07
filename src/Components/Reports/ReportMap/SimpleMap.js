import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../../css/report/SimpleMap.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { history } from '../../../helps/history';

import LCG from 'leaflet-control-geocoder';
import L from 'leaflet';

import * as GeoSearch from 'leaflet-geosearch';
import { reportActions } from '../../../actions/reportActions';
const LATLNG = [32.0576485, 34.7652664];

function LocationMarker({ onLocationFound, lat, lng, location, hasMap, setHasMap }) {
  const [position, setPosition] = useState(lat && lng ? { lat: lat, lng: lng } : null);
  const [locationName, setLocationName] = useState(location);

  function setAddress({ country = "", neighbourhood = "", town = "", village = "", city = "", road = "", house_number = "", suburb = "" }) {

    let start = village;
    if (start !== "") return start;
    start = town;
    if (start !== "") return `${start}${road ? `, ${road} ${house_number}` : ""}`;
    start = city;
    if (start !== "") return `${city}${suburb ? `, ${suburb}` : ""}${road ? `, ${road}` : ""}${neighbourhood ? `, ${neighbourhood}` : ""} ${house_number}`;
    return country;

  }

  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng)

      const geocoder = L.Control.Geocoder.nominatim({
        geocodingQueryParams: {
          'accept-language': 'he', // render results in Hebrew
          countrycodes: 'il', // limit search results to the Israel
        },
        reverseQueryParams:{
          'accept-language': 'he', // render results in Hebrew
          countrycodes: 'il', // limit search results to the Israel
        }
      });
      geocoder.reverse(e.latlng, map.options.crs.scale(300), results => {
        const name = results[0] ? setAddress(results[0].properties.address) : "Illegal address";
        setLocationName(name);
        onLocationFound(name, e?.latlng.lat, e?.latlng.lng);
      })
      map.flyTo(e.latlng, map.getZoom())
    },
    click(e) {
      if (e.containerPoint.y > 325) {
        return
      }

      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
      const geocoder = L.Control.Geocoder.nominatim({
        geocodingQueryParams:{
          'accept-language': 'he', // render results in Hebrew
          countrycodes: 'il', // limit search results to the Israel
        },
        reverseQueryParams:{
          'accept-language': 'he', // render results in Hebrew
          countrycodes: 'il', // limit search results to the Israel
        }
      });
      geocoder.reverse(e.latlng, map.options.crs.scale(300), results => {
        const name = results[0] ? setAddress(results[0].properties.address) : "Illegal address";
        setLocationName(name);
        onLocationFound(name, e?.latlng.lat, e?.latlng.lng);
      })

    }
  })

  useEffect(() => {
    if (!lat || !lng)
      map.locate();
    if (hasMap) {
      return;
    }
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

      }
    });
    map.addControl(search);
    setHasMap(true);


  }, [map, hasMap, setHasMap, lat, lng])

  if (position !== null && locationName !== null) {
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
  const report = useSelector(state => state.reports.saveReport);
  const [hasMap, setHasMap] = useState(false);
  const latlng = report?.location_lat && report?.location_lng ? [report.location_lat, report.location_lng] : LATLNG;

  const dispatch = useDispatch();
  const onLocationFound = (name, lat, lng) => { dispatch(reportActions.saveLocation(name, lat, lng)) };
  const redirect = (e) => { e.preventDefault(); if (report.location !== '') { setHasMap(false); history.push("/report/create"); } }
  window.onbeforeunload = e => {
    e.preventDefault();
    const localReport = JSON.stringify({ ...report, person_location: "", location_lng: undefined, location_lat: undefined })

    localStorage.setItem('report', localReport);
  }
  return (
    <MapContainer id="mapid" center={latlng} zoom={15} scrollWheelZoom={true}>
      <LocationMarker
        onLocationFound={onLocationFound}
        location={report?.person_location}
        lat={report?.location_lat}
        lng={report?.location_lng}
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



