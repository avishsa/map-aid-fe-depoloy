import {Component, useEffect, useState, useRef} from 'react';
import '../../css/report/SimpleMap.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

import LCG from 'leaflet-control-geocoder';
import L from 'leaflet';

import * as GeoSearch from 'leaflet-geosearch';


function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
    click(e) {
      console.log(e)
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
      const geocoder = L.Control.Geocoder.nominatim();
      console.log(geocoder);
      geocoder.reverse(e.latlng, map.options.crs.scale(300), results => {
        console.log(results[0].name);
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

  console.log(map.getPanes());

  return position === null ? null : (
    <Marker position={position}>
      <Popup add={e => console.log(e)} closeButton={false} closeOnClick={false}>You are here</Popup>
    </Marker>
  )
}


class ReportMap extends Component {

    render()
    {   
        return (
            <div>
            <MapContainer id="mapid" center={[32.0576485,34.7652664]} zoom={15} scrollWheelZoom={false}>
                <LocationMarker />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            
            </div>           
            
        ) 
    }
}

export default ReportMap

