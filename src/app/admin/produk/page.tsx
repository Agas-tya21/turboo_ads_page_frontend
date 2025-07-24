'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import apiConfig from '@/config/api';

// Tipe data untuk Produk
interface Produk {
  idproduk: string;
  namaproduk: string;
  keteranganproduk: string;
  gambarproduk: string;
  // --- BIDANG BARU DITAMBAHKAN DI SINI ---
  jenisJaminans: { namajaminan: string }[];
}

// Fungsi untuk memeriksa apakah sebuah string adalah URL yang valid
const isValidUrl = (urlString: string | null | undefined): boolean => {
  if (!urlString) return false;
  try {
    new URL(urlString);
    return true;
  } catch (e) {
    return false;
  }
};

const ProdukAdminPage = () => {
  const [produkList, setProdukList] = useState<Produk[]>([]);
  const [selectedProduk, setSelectedProduk] = useState<Produk | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ... (fungsi fetchProduk, handleSubmit, handleDelete, clearForm tetap sama) ...

  const fetchProduk = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${apiConfig.baseURL}/produk`);
      if (!response.ok) {
        throw new Error('Gagal mengambil data produk');
      }
      const data = await response.json();
      setProdukList(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduk();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const form = e.currentTarget;

    const formData = new FormData();
    const produkData = {
      idproduk: (form.elements.namedItem('idproduk') as HTMLInputElement).value,
      namaproduk: (form.elements.namedItem('namaproduk') as HTMLInputElement).value,
      keteranganproduk: (form.elements.namedItem('keteranganproduk') as HTMLTextAreaElement).value,
      gambarproduk: selectedProduk?.gambarproduk || null,
    };
    
    formData.append('produk', new Blob([JSON.stringify(produkData)], { type: 'application/json' }));

    if (selectedFile) {
        formData.append('file', selectedFile);
    }
    
    const isUpdating = !!selectedProduk;
    const url = isUpdating ? `${apiConfig.baseURL}/produk/${selectedProduk.idproduk}` : `${apiConfig.baseURL}/produk`;
    const method = isUpdating ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, { method, body: formData });
      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({ message: 'Gagal menyimpan data.' }));
        throw new Error(errorBody.message);
      }
      
      form.reset();
      setSelectedProduk(null);
      setSelectedFile(null);
      fetchProduk();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat menyimpan');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus produk ini?')) return;
    try {
      const response = await fetch(`${apiConfig.baseURL}/produk/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Gagal menghapus data');
      fetchProduk();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Gagal menghapus data');
    }
  };
  
  const clearForm = () => {
    setSelectedProduk(null);
    setSelectedFile(null);
    const form = document.querySelector('form');
    if (form) form.reset();
  }

  return (
    <div className="container mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Kelola Produk</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {/* Form (tidak ada perubahan di sini) */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">{selectedProduk ? 'Edit Produk' : 'Tambah Produk Baru'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4" key={selectedProduk?.idproduk || 'new-produk-form'}>
          {/* ... (isi form tetap sama) ... */}
        </form>
      </div>

      {/* Tabel */}
      <div className="bg-white p-6 rounded-lg shadow-md">
         <h2 className="text-2xl font-semibold mb-4">Daftar Produk</h2>
         {isLoading ? <p>Loading...</p> : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="th-style">ID</th>
                    <th className="th-style">Nama</th>
                    {/* --- KOLOM BARU DITAMBAHKAN DI SINI --- */}
                    <th className="th-style">Jenis Jaminan Terkait</th>
                    <th className="th-style">Gambar</th>
                    <th className="th-style">Aksi</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {produkList.map((produk) => (
                    <tr key={produk.idproduk}>
                      <td className="td-style">{produk.idproduk}</td>
                      <td className="td-style">{produk.namaproduk}</td>
                      {/* --- DATA BARU DITAMPILKAN DI SINI --- */}
                      <td className="td-style">
                        {produk.jenisJaminans && produk.jenisJaminans.length > 0 ? (
                          <ul className="list-disc list-inside text-xs">
                            {produk.jenisJaminans.map((j, index) => (
                              <li key={index}>{j.namajaminan}</li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-xs text-gray-400">Belum ada</span>
                        )}
                      </td>
                      <td className="td-style">
                        {isValidUrl(produk.gambarproduk) ? (
                          <img src={produk.gambarproduk} alt={produk.namaproduk} className="w-16 h-16 object-cover rounded" />
                        ) : (
                          <span className="text-xs text-gray-500">Tidak ada gambar</span>
                        )}
                      </td>
                      <td className="td-style space-x-2">
                        <button onClick={() => { setSelectedProduk(produk); setSelectedFile(null); window.scrollTo(0,0); }} className="text-blue-600 hover:underline">Edit</button>
                        <button onClick={() => handleDelete(produk.idproduk)} className="text-red-600 hover:underline">Hapus</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
         )}
      </div>
    </div>
  );
};

export default ProdukAdminPage;