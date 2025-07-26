'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import apiConfig from '@/config/api';
import fetchWithAuth from '@/utils/apiClient'; // Impor utilitas baru

// Tipe data untuk Cabang
interface Cabang {
  idcabang: string;
  namacabang: string;
  koordinatcabang: string;
}

const CabangAdminPage = () => {
  const [cabangList, setCabangList] = useState<Cabang[]>([]);
  const [selectedCabang, setSelectedCabang] = useState<Cabang | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCabang = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Menggunakan fetchWithAuth
      const response = await fetchWithAuth(`${apiConfig.baseURL}/cabang`);
      if (!response.ok) throw new Error('Gagal mengambil data cabang');
      const data = await response.json();
      setCabangList(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCabang();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const cabangData: Omit<Cabang, 'idcabang'> & { idcabang?: string } = {
      namacabang: formData.get('namacabang') as string,
      koordinatcabang: formData.get('koordinatcabang') as string,
    };

    let url = `${apiConfig.baseURL}/cabang`;
    let method = 'POST';

    if (selectedCabang) {
      cabangData.idcabang = selectedCabang.idcabang;
      url = `${apiConfig.baseURL}/cabang/${selectedCabang.idcabang}`;
      method = 'PUT';
    } else {
        cabangData.idcabang = formData.get('idcabang') as string;
    }

    try {
      // Menggunakan fetchWithAuth
      const response = await fetchWithAuth(url, {
        method: method,
        body: JSON.stringify(cabangData),
      });
      if (!response.ok) throw new Error('Gagal menyimpan data');
      
      formElement.reset();
      setSelectedCabang(null);
      fetchCabang();
    } catch (err: unknown) {
       setError(err instanceof Error ? err.message : 'Gagal menyimpan data');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus cabang ini?')) return;
    try {
      // Menggunakan fetchWithAuth
      const response = await fetchWithAuth(`${apiConfig.baseURL}/cabang/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Gagal menghapus data');
      fetchCabang();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Gagal menghapus data');
    }
  };

  return (
    <div className="container mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Kelola Cabang</h1>

      {error && <p className="text-red-500 bg-red-100 p-3 rounded mb-4">Error: {error}</p>}

      {/* Form */}
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
              className="mt-1 block w-full input-style"
              required
            />
          </div>
          <div>
            <label htmlFor="namacabang" className="block text-sm font-medium text-gray-700">Nama Cabang</label>
            <input
              type="text"
              name="namacabang"
              defaultValue={selectedCabang?.namacabang || ''}
              className="mt-1 block w-full input-style"
              required
            />
          </div>
          <div>
            <label htmlFor="koordinatcabang" className="block text-sm font-medium text-gray-700">Koordinat</label>
            <input
              type="text"
              name="koordinatcabang"
              defaultValue={selectedCabang?.koordinatcabang || ''}
              className="mt-1 block w-full input-style"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="btn-primary">
              {selectedCabang ? 'Update' : 'Simpan'}
            </button>
            {selectedCabang && (
              <button type="button" onClick={() => setSelectedCabang(null)} className="btn-secondary">
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Tabel */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Daftar Cabang</h2>
        {isLoading ? <p>Loading...</p> : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="th-style">ID</th>
                  <th className="th-style">Nama</th>
                  <th className="th-style">Koordinat</th>
                  <th className="th-style">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cabangList.map((cabang) => (
                  <tr key={cabang.idcabang}>
                    <td className="td-style">{cabang.idcabang}</td>
                    <td className="td-style">{cabang.namacabang}</td>
                    <td className="td-style">{cabang.koordinatcabang}</td>
                    <td className="td-style space-x-2">
                      <button onClick={() => setSelectedCabang(cabang)} className="text-blue-600 hover:underline">Edit</button>
                      <button onClick={() => handleDelete(cabang.idcabang)} className="text-red-600 hover:underline">Hapus</button>
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

export default CabangAdminPage;