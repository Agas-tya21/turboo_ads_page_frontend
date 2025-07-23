'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import apiConfig from '@/config/api';

// Tipe data untuk Produk
interface Produk {
  idproduk: string;
  namaproduk: string;
  keteranganproduk: string;
  gambarproduk: string;
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
  const [error, setError] = useState<string | null>(null);

  // Fungsi untuk mengambil semua data produk
  const fetchProduk = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${apiConfig.baseURL}/produk`);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Gagal mengambil data produk' }));
        throw new Error(errorData.message || 'Gagal mengambil data');
      }
      const data = await response.json();
      setProdukList(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan yang tidak diketahui');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduk();
  }, []);

  // Fungsi untuk mengunggah file
  const uploadFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${apiConfig.baseURL}/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Gagal mengunggah gambar. Pastikan backend berjalan dan IP address benar.');
    }

    const result = await response.json();
    return result.url;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const formElement = e.currentTarget;
    
    let imageUrl = selectedProduk?.gambarproduk || '';

    if (selectedFile) {
      try {
        imageUrl = await uploadFile(selectedFile);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Gagal mengunggah file');
        return;
      }
    }

    const produkData = {
      idproduk: formData.get('idproduk') as string,
      namaproduk: formData.get('namaproduk') as string,
      keteranganproduk: formData.get('keteranganproduk') as string,
      gambarproduk: imageUrl,
    };

    const url = selectedProduk
      ? `${apiConfig.baseURL}/produk/${selectedProduk.idproduk}`
      : `${apiConfig.baseURL}/produk`;
    const method = selectedProduk ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produkData),
      });
      if (!response.ok) throw new Error('Gagal menyimpan data produk');
      
      formElement.reset();
      setSelectedProduk(null);
      setSelectedFile(null);
      fetchProduk();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Gagal menyimpan data');
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

  return (
    <div className="container mx-auto p-8 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin - Kelola Produk</h1>
        <Link href="/admin" className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600">
          &larr; Kelola Cabang
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">{selectedProduk ? 'Edit Produk' : 'Tambah Produk Baru'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4" key={selectedProduk?.idproduk || 'new-produk-form'}>
          <div>
            <label htmlFor="idproduk" className="block text-sm font-medium text-gray-700">ID Produk</label>
            <input type="text" name="idproduk" defaultValue={selectedProduk?.idproduk || ''} disabled={!!selectedProduk} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100" required />
          </div>
          <div>
            <label htmlFor="namaproduk" className="block text-sm font-medium text-gray-700">Nama Produk</label>
            <input type="text" name="namaproduk" defaultValue={selectedProduk?.namaproduk || ''} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="keteranganproduk" className="block text-sm font-medium text-gray-700">Keterangan</label>
            <textarea name="keteranganproduk" defaultValue={selectedProduk?.keteranganproduk || ''} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows={3}></textarea>
          </div>
          <div>
            <label htmlFor="gambarproduk" className="block text-sm font-medium text-gray-700">Unggah Gambar</label>
            <input 
              type="file" 
              name="gambarproduk" 
              accept="image/*"
              onChange={(e) => e.target.files && setSelectedFile(e.target.files[0])} 
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
            />
            {(selectedFile || (selectedProduk && isValidUrl(selectedProduk.gambarproduk))) && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-600">Preview:</p>
                <img 
                  src={selectedFile ? URL.createObjectURL(selectedFile) : selectedProduk?.gambarproduk} 
                  alt="Preview" 
                  className="mt-2 w-32 h-32 object-cover rounded-md border"
                />
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">{selectedProduk ? 'Update' : 'Simpan'}</button>
            {selectedProduk && <button type="button" onClick={() => { setSelectedProduk(null); setSelectedFile(null); }} className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400">Batal</button>}
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Daftar Produk</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!isLoading && !error && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gambar</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {produkList.map((produk) => (
                  <tr key={produk.idproduk}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{produk.idproduk}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{produk.namaproduk}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {isValidUrl(produk.gambarproduk) ? (
                        <img src={produk.gambarproduk} alt={produk.namaproduk} className="w-16 h-16 object-cover rounded" />
                      ) : (
                        <span className="text-xs text-gray-500">URL tidak valid</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-4">
                      <button onClick={() => { setSelectedProduk(produk); setSelectedFile(null); }} className="text-blue-600 hover:text-blue-900">Edit</button>
                      <button onClick={() => handleDelete(produk.idproduk)} className="text-red-600 hover:text-red-900">Hapus</button>
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