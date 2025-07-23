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
        // Ambil data comprofile dan jumlah cabang secara bersamaan
        const [comprofileRes, cabangRes] = await Promise.all([
          fetch(`${apiConfig.baseURL}/comprofiles/001`),
          fetch(`${apiConfig.baseURL}/cabang/count`)
        ]);

        if (!comprofileRes.ok || !cabangRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const comprofileData = await comprofileRes.json();
        const cabangData = await cabangRes.json();
        
        // Perbarui state dengan data dari API
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
  }, []); // Efek ini hanya berjalan sekali saat komponen dimuat

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="pr-8">
                  <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                      Turboo adalah Perusahaan Pembiayaan Terpercaya di Indonesia
                  </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div>
                      <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>
                        {loading ? '...' : `Sejak ${info.sejak}`}
                      </h3>
                      <p className="text-gray-600 mt-2">Melayani kebutuhan keuangan masyarakat.</p>
                  </div>
                  <div>
                      <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>
                        {loading ? '...' : `>${info.konsumen.toLocaleString()}`}
                      </h3>
                      <p className="text-gray-600 mt-2">Konsumen aktif telah memilih Turboo sebagai mitra keuangannya.</p>
                  </div>
                  <div>
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