'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- PERBAIKAN UTAMA DI SINI ---
// Membuat instance icon kustom, ini cara yang lebih aman
const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});


// Tipe data untuk props
interface MapProps {
  cabangList: {
    idcabang: string;
    namacabang: string;
    koordinatcabang: string;
  }[];
}

const Map: React.FC<MapProps> = ({ cabangList }) => {
  const defaultPosition: [number, number] = [-2.548926, 118.0148634]; // Posisi tengah Indonesia

  return (
    <MapContainer center={defaultPosition} zoom={5} scrollWheelZoom={false} style={{ height: '500px', width: '100%', borderRadius: '1rem' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {cabangList.map((cabang) => {
        const [lat, lon] = cabang.koordinatcabang.split(',').map(Number);
        if (isNaN(lat) || isNaN(lon)) return null;

        return (
          // --- Menggunakan icon kustom pada setiap Marker ---
          <Marker key={cabang.idcabang} position={[lat, lon]} icon={customIcon}>
            <Popup>
              <b>{cabang.namacabang}</b>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;