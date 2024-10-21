import { useState } from 'react';
import { LatLngLiteral, LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import { styled } from './style'; 
import {IpAddressInfo} from './interface';
import LocationMarker from './LocationMarker';

function App() {
  const [position, setPosition] = useState<LatLngLiteral | LatLngTuple | undefined>(undefined);
  const [allData, setAllData] = useState<IpAddressInfo | null>(null);
  const [loading, setloading] = useState(false);
  const [inputIp, setInputIp] = useState("");

  const fetchUsers = async (ip: string) => {
    try {
      const request = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Jhmd6zE6WnAUqCKpwFvYcTxqMiPLT&ipAddress=${ip}`);
      const response = await request.json();

      setAllData(response);  // No `.data` since the data is directly in `response`

      setloading(true)
      // Correctly setting the position using an array
      if (response?.location) {
        setPosition([response.location.lat, response.location.lng]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };





  return (
    <>
      <div className='Head' style={styled.head.container}>
        <h1 style={styled.head.h1}>IP Address Tracker</h1>
        <div style={styled.head.subcontaner}>
          <input
            type='text'
            style={styled.head.input}
            value={inputIp}
            onChange={(e) => setInputIp(e.target.value)}
          />
          <button onClick={() => fetchUsers(inputIp)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
              <path d="M0 0H43C51.2843 0 58 6.71573 58 15V43C58 51.2843 51.2843 58 43 58H0V0Z" fill="#3F3F3F" />
              <path d="M26 23L32 29L26 35" stroke="white" strokeWidth="3" />
            </svg>
          </button>
        </div>
      </div>
      {loading &&
        <>
          <div className='mapbody'>
            <div style={styled.mapbody.infowrapper}>
              <div>
                <div className='info' style={styled.mapbody.info}>
                  <div className='ipinfo'>
                    <h3 style={styled?.mapbody.h3}>IP Address</h3>
                    <p style={styled.mapbody.p}>{allData?.ip}</p>
                  </div>
                  <div className='localationinfo'>
                    <h3 style={styled.mapbody.h3}>Location</h3>
                    <p style={styled.mapbody.p}>{allData?.location.city}</p>
                  </div>
                  <div className='timezoneinfo'>
                    <h3 style={styled.mapbody.h3}>Timezone</h3>
                    <p style={styled.mapbody.p}>UTC {allData?.location.timezone}</p>
                  </div>
                  <div className='ispinfo'>
                    <h3 style={styled.mapbody.h3}>ISP</h3>
                    <p style={styled.mapbody.p}>{allData?.isp}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <MapContainer
            center={position ? (Array.isArray(position) ? { lat: position[0], lng: position[1] } : { lat: position.lat, lng: position.lng }) : { lat: 0, lng: 0 }}
            zoom={13}
            scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker position={position} setPosition={setPosition} />
          </MapContainer>,
        </>
      }

    </>
  );
}
export default App;


