'use client';

import React, { useState, useEffect } from 'react';
import apiConfig from '@/config/api';
import Carousel from './Carousel';

interface Promo {
  idpromo: string;
  namapromo: string;
  kelaspromo: string;
  taglinepromo: string;
  keteranganpromo: string;
  gambarpromo: string;
  tglmulai: string;
  tglakhir: string;
}
const BFI_BLUE = "#FE0000";
const InspiringInfo = () => {
  const [promosKelas1, setPromosKelas1] = useState<Promo[]>([]);
  const [promosKelas2, setPromosKelas2] = useState<Promo[]>([]);
  const [promosKelas3, setPromosKelas3] = useState<Promo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndFilterPromos = async () => {
      try {
        const response = await fetch(`${apiConfig.baseURL}/promo`);
        if (!response.ok) throw new Error('Gagal memuat data promo');
        
        const allPromos: Promo[] = await response.json();
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const activePromos = allPromos.filter(promo => {
          const tglMulai = new Date(promo.tglmulai);
          const tglAkhir = new Date(promo.tglakhir);
          return today >= tglMulai && today <= tglAkhir;
        });
        
        setPromosKelas1(activePromos.filter(p => p.kelaspromo === 'Kelas 1'));
        setPromosKelas2(activePromos.filter(p => p.kelaspromo === 'Kelas 2'));
        setPromosKelas3(activePromos.filter(p => p.kelaspromo === 'Kelas 3'));

      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndFilterPromos();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-blue-800 text-center mb-8" style={{ color: BFI_BLUE }}>
          Promo dan Informasi Inspiratif untuk Kehidupan Finansial Anda
        </h2>

        {isLoading && <p className="text-center">Memuat promo...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        {!isLoading && !error && (
          <div className="space-y-8">
            {/* --- PERUBAHAN UKURAN DI SINI --- */}
            <Carousel items={promosKelas1} visibleCards={1} imageMaxHeight="600px" />
            <Carousel items={promosKelas2} visibleCards={2} imageMaxHeight="300px" />
            <Carousel items={promosKelas3} visibleCards={3} imageMaxHeight="200px" />
          </div>
        )}
      </div>
    </section>
  );
};

export default InspiringInfo;