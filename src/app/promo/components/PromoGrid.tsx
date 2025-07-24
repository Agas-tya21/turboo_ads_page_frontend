'use client';

import React, { useState, useEffect } from 'react';
import apiConfig from '@/config/api';

// Tipe data untuk Promo
interface Promo {
  idpromo: string;
  namapromo: string;
  taglinepromo: string;
  keteranganpromo: string;
  gambarpromo: string;
  tglmulai: string;
  tglakhir: string;
}

const PromoGrid = () => {
  const [activePromos, setActivePromos] = useState<Promo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndFilterPromos = async () => {
      try {
        const response = await fetch(`${apiConfig.baseURL}/promo`);
        if (!response.ok) {
          throw new Error('Gagal memuat data promo');
        }
        const allPromos: Promo[] = await response.json();
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const filtered = allPromos.filter(promo => {
          const tglMulai = new Date(promo.tglmulai);
          const tglAkhir = new Date(promo.tglakhir);
          return today >= tglMulai && today <= tglAkhir;
        });
        
        setActivePromos(filtered);

      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndFilterPromos();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Promo Spesial Untuk Anda</h1>
        <p className="text-lg text-gray-600 mt-2">Temukan penawaran terbaik yang sedang berlangsung saat ini.</p>
      </div>

      {isLoading && <p className="text-center">Memuat promo...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!isLoading && !error && (
        activePromos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activePromos.map((promo) => (
              <div key={promo.idpromo} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img 
                  src={promo.gambarpromo || 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'} 
                  alt={promo.namapromo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{promo.namapromo}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Periode: {new Date(promo.tglmulai).toLocaleDateString()} - {new Date(promo.tglakhir).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600 mb-4 flex-grow">{promo.keteranganpromo}</p>
                  <a href="/pengajuan" className="mt-auto block w-full text-center bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                    Ajukan Sekarang
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Saat ini belum ada promo yang tersedia.</p>
        )
      )}
    </div>
  );
};

export default PromoGrid;