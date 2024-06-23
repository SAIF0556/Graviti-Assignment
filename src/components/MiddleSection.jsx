import { useState } from 'react'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from '@react-google-maps/api'

const center = { lat: 28.7, lng: 77.1 }
function MiddleSection() {
  const [map, setMap] = useState(/** @type google.maps.Map */ (null))

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  if (!isLoaded) {
    return <h1>Map is loading...</h1>
  }

  // const [Origin, setOrigin] = useState('')
  // const [wayPoints, setWayPoints] = useState([])
  // const [destination, setDestination] = useState('')

  function handleCalculate() {}

  return (
    <div className="bg-blue-100 flex flex-col h-[100vh]">
      <p className="text-blue-600 py-8 font-medium font-sans text-center">
        Let&apos;s calculate <span className="font-bold"> distance</span> from
        Google map
      </p>
      <div className="middle-section flex flex-row gap-8 items-center text-center justify-center">
        <div className="left-container flex flex-col size-[500px] items-left justify-between text-center">
          <div className="inputs flex flex-row gap-2">
            <div className="user-inputs flex flex-col gap-4 ">
              <Autocomplete>
                <input
                  type="text"
                  placeholder="origin"
                  className="p-2 border-black border-2 rounded-md"
                />
              </Autocomplete>
              <Autocomplete>
                <input
                  type="text"
                  placeholder="destination"
                  className="p-2 border-black border-2 rounded-md"
                />
              </Autocomplete>

              <div className="add-another-stop">
                <button>
                  <span>+</span> Add another stop
                </button>
              </div>
              <div className="remove-stop">
                <button>
                  <span>+</span> remove stop
                </button>
              </div>
            </div>
            <div className="calculate-distance rounded-md gap-4 flex flex-col m-4">
              <button onClick={handleCalculate}>Calculate</button>
              <button onClick={() => map.panTo(center)}>Clear</button>
            </div>
          </div>
          <div className="outputs">
            <div className="distance bg-white">
              <h2 className="font-bold">
                Distance<span>1427 kms</span>
              </h2>
            </div>
            <p className="p-8">
              The distance between <span className="font-bold">Mumbai</span> and
              <span className="font-bold">Delhi</span>
              via the selected route is{' '}
              <span className="font-bold">1427 kms</span>
            </p>
          </div>
        </div>
        <div className="right-container size-[500px] bg-green-300">
          {/* google map  */}
          <GoogleMap
            center={center}
            zoom={5}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {/* display directions and markers */}
          </GoogleMap>
        </div>
      </div>
    </div>
  )
}

export default MiddleSection
