'use client'; 

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import apiConfig from '@/config/api';

const BFI_BLUE = "#FE0000";
// Tipe data untuk cabang
interface Cabang {
  idcabang: string;
  namacabang: string;
  koordinatcabang: string;
}

const Locations = () => {
  const [cabangList, setCabangList] = useState<Cabang[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load komponen Map secara dinamis untuk menghindari masalah SSR
  const Map = dynamic(() => import('./Map'), { 
    ssr: false,
    loading: () => <p className="text-center">Memuat peta...</p> 
  });


  useEffect(() => {
    const fetchCabang = async () => {
      try {
        const response = await fetch(`${apiConfig.baseURL}/cabang`);
        if (!response.ok) {
          throw new Error('Gagal mengambil data cabang');
        }
        const data = await response.json();
        setCabangList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCabang();
  }, []);

  return (
    <section className="py-20 bg-50" style={{ color: BFI_BLUE }}>
      <div className="container mx-auto px-6 text-center">
        {/* Menggunakan style inline untuk konsistensi warna */}
        <h2 className="text-4xl font-bold mb-2" style={{ color: BFI_BLUE }}>Turboo Memiliki Lebih dari {cabangList.length > 0 ? cabangList.length : '...'} Lokasi Pelayanan Tersebar di Indonesia</h2>
        <p className="text-lg text-gray-600 mb-8">Temukan cabang atau POS Turboo terdekat dengan Anda</p>
        
        <div className="relative mb-8 p-4 h-[500px]">
          {!isLoading && <Map cabangList={cabangList} />}
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          Jam operasional semua cabang Turboo:<br/>
          Senin - Jumat 09.00 - 17.00 WIB<br/>
          Sabtu 09.00 - 15.00 WIB
        </p>
      </div>
    </section>
  );
};

export default Locations;