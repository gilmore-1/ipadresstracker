import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { LatLngLiteral, LatLngTuple } from 'leaflet';


export default function LocationMarker({ position, setPosition }: { position: LatLngLiteral | LatLngTuple | undefined, setPosition: React.Dispatch<React.SetStateAction<LatLngLiteral | LatLngTuple | undefined>> }) {
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return !position ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}
