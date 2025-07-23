'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import apiConfig from '@/config/api';

// Tipe data untuk Cabang
interface Cabang {
  idcabang: string;
  namacabang: string;
  koordinatcabang: string;
}

const AdminPage = () => {
  const [cabangList, setCabangList] = useState<Cabang[]>([]);
  const [selectedCabang, setSelectedCabang] = useState<Cabang | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fungsi untuk mengambil semua data cabang
  const fetchCabang = async () => {
    setIsLoading(true);
    setError(null); // Reset error state on new fetch
    try {
      const response = await fetch(`${apiConfig.baseURL}/cabang`);
      if (!response.ok) throw new Error('Gagal mengambil data cabang');
      const data = await response.json();
      setCabangList(data);
    } catch (err: unknown) { // Use 'unknown' for type safety
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Terjadi kesalahan yang tidak diketahui');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Ambil data saat komponen dimuat
  useEffect(() => {
    fetchCabang();
  }, []);

  // Fungsi untuk menangani submit form (Create & Update)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formElement = e.currentTarget;
    const cabangData: Cabang = {
      idcabang: formData.get('idcabang') as string,
      namacabang: formData.get('namacabang') as string,
      koordinatcabang: formData.get('koordinatcabang') as string,
    };

    const url = selectedCabang
      ? `${apiConfig.baseURL}/cabang/${selectedCabang.idcabang}`
      : `${apiConfig.baseURL}/cabang`;
    
    const method = selectedCabang ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cabangData),
      });
      if (!response.ok) throw new Error('Gagal menyimpan data');
      
      formElement.reset(); // Reset form fields after submission
      setSelectedCabang(null);
      fetchCabang(); // Muat ulang data
    } catch (err: unknown) {
       if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Terjadi kesalahan saat menyimpan');
      }
    }
  };

  // Fungsi untuk menangani delete
  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus cabang ini?')) return;

    try {
      const response = await fetch(`${apiConfig.baseURL}/cabang/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Gagal menghapus data');
      fetchCabang(); // Muat ulang data
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Terjadi kesalahan saat menghapus');
      }
    }
  };

  return (
    <div className="container mx-auto p-8 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin - Kelola Cabang</h1>
        <Link href="/admin/produk" className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">
          Kelola Produk &rarr;
        </Link>
      </div>

      {/* Form untuk Add/Edit */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">{selectedCabang ? 'Edit Cabang' : 'Tambah Cabang Baru'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4" key={selectedCabang?.idcabang || 'new-form'}>
          <div>
            <label htmlFor="idcabang" className="block text-sm font-medium text-gray-700">ID Cabang</label>
            <input
              type="text"
              name="idcabang"
              defaultValue={selectedCabang?.idcabang || ''}
              disabled={!!selectedCabang}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="namacabang" className="block text-sm font-medium text-gray-700">Nama Cabang</label>
            <input
              type="text"
              name="namacabang"
              defaultValue={selectedCabang?.namacabang || ''}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="koordinatcabang" className="block text-sm font-medium text-gray-700">Koordinat</label>
            <input
              type="text"
              name="koordinatcabang"
              defaultValue={selectedCabang?.koordinatcabang || ''}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
              {selectedCabang ? 'Update' : 'Simpan'}
            </button>
            {selectedCabang && (
              <button type="button" onClick={() => setSelectedCabang(null)} className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400">
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Tabel Data Cabang */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Daftar Cabang</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!isLoading && !error && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Koordinat</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cabangList.map((cabang) => (
                  <tr key={cabang.idcabang}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cabang.idcabang}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cabang.namacabang}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cabang.koordinatcabang}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-4">
                      <button onClick={() => setSelectedCabang(cabang)} className="text-blue-600 hover:text-blue-900">Edit</button>
                      <button onClick={() => handleDelete(cabang.idcabang)} className="text-red-600 hover:text-red-900">Hapus</button>
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

export default AdminPage;