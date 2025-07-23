'use client'; // Mengubah menjadi Client Component untuk fetching data

import React, { useState, useEffect } from 'react';
import apiConfig from '@/config/api';

const BFI_BLUE = "#FE0000";

// Definisikan tipe data untuk state produk
interface Produk {
  idproduk: string;
  namaproduk: string;
  keteranganproduk: string;
  gambarproduk: string;
}

const Products = () => {
  // State untuk menyimpan daftar produk dari API
  const [products, setProducts] = useState<Produk[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiConfig.baseURL}/produk`);
        if (!response.ok) {
          throw new Error('Gagal memuat data produk');
        }
        const data: Produk[] = await response.json();
        setProducts(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []); // Hanya berjalan sekali saat komponen dimuat

  return (
    <section id="produk-kami" className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12" style={{ color: BFI_BLUE }}>
          Produk yang Kami Tawarkan
        </h2>

        {isLoading && <p>Memuat produk...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!isLoading && !error && (
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* Mapping data produk untuk membuat card secara dinamis */}
            {products.map((produk) => (
              <div key={produk.idproduk} className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 overflow-hidden flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{produk.namaproduk}</h3>
                  <p className="text-gray-600 mb-6">
                    {produk.keteranganproduk} <a href="#" className="text-blue-600 font-semibold">, Pelajari Produk</a>
                  </p>
                  <a href="#" className="font-bold text-blue-600">Ajukan Sekarang &gt;</a>
                </div>
                <div className="absolute -bottom-4 -right-4">
                  {/* Gunakan gambarproduk dari API, dengan fallback jika kosong */}
                  <img 
                    src={produk.gambarproduk || 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'} 
                    alt={produk.namaproduk} 
                    className="w-28"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;