'use client'; // Jadikan Client Component untuk data fetching

import React, { useState, useEffect } from 'react';
import apiConfig from '@/config/api';

// Definisikan tipe data untuk state
interface CompanyInfoData {
  sejak: string;
  konsumen: string;
  jumlahCabang: number;
}

const BFI_BLUE = "#FE0000";

const CompanyInfo = () => {
  // State untuk menyimpan data yang diambil dari API
  const [info, setInfo] = useState<CompanyInfoData>({
    sejak: '1982', // Nilai default
    konsumen: '0',
    jumlahCabang: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [comprofileRes, cabangRes] = await Promise.all([
          fetch(`${apiConfig.baseURL}/comprofiles/001`),
          fetch(`${apiConfig.baseURL}/cabang/count`)
        ]);

        if (!comprofileRes.ok || !cabangRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const comprofileData = await comprofileRes.json();
        const cabangData = await cabangRes.json();
        
        setInfo({
          sejak: comprofileData.tahun || '1982',
          konsumen: comprofileData.konsumen || '0',
          jumlahCabang: cabangData.total || 0,
        });

      } catch (error) {
        console.error('Error fetching company info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
          {/* --- PERUBAHAN DI SINI: Menggunakan flex untuk layout utama --- */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="lg:w-1/3 text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                      Turboo adalah Perusahaan Pembiayaan Terpercaya di Indonesia
                  </h2>
              </div>
              {/* --- PERUBAHAN DI SINI: Menggunakan flex untuk info agar sejajar --- */}
              <div className="lg:w-2/3 flex flex-col md:flex-row gap-8 text-center md:text-left">
                  <div className="flex-1">
                      <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>
                        {loading ? '...' : `Sejak ${info.sejak}`}
                      </h3>
                      <p className="text-gray-600 mt-2">Melayani kebutuhan keuangan masyarakat.</p>
                  </div>
                  <div className="flex-1">
                      <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>
                        {loading ? '...' : `>${info.konsumen.toLocaleString()}`}
                      </h3>
                      <p className="text-gray-600 mt-2">Konsumen aktif telah memilih Turboo sebagai mitra keuangannya.</p>
                  </div>
                  <div className="flex-1">
                      <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>
                        {loading ? '...' : `>${info.jumlahCabang} Cabang`}
                      </h3>
                      <p className="text-gray-600 mt-2">Pelayanan yang tersebar hampir seluruh Indonesia.</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default CompanyInfo;