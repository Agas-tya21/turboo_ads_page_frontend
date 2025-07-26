'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import apiConfig from '@/config/api';
import fetchWithAuth from '@/utils/apiClient'; // Impor utilitas

// ... (Tipe data tetap sama) ...
interface Produk {
  idproduk: string;
  namaproduk: string;
}

interface JenisJaminan {
  idjaminan: string;
  namajaminan: string;
  produk: Produk | null;
}


const JenisJaminanAdminPage = () => {
  const [jaminanList, setJaminanList] = useState<JenisJaminan[]>([]);
  const [produkList, setProdukList] = useState<Produk[]>([]);
  const [selectedJaminan, setSelectedJaminan] = useState<JenisJaminan | null>(null);
  const [selectedProdukId, setSelectedProdukId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Gunakan fetchWithAuth
      const [jaminanRes, produkRes] = await Promise.all([
        fetchWithAuth(`${apiConfig.baseURL}/jenisjaminan`),
        fetchWithAuth(`${apiConfig.baseURL}/produk`),
      ]);
      if (!jaminanRes.ok) throw new Error('Gagal mengambil data jenis jaminan');
      if (!produkRes.ok) throw new Error('Gagal mengambil data produk');
      
      const jaminanData = await jaminanRes.json();
      const produkData = await produkRes.json();
      
      setJaminanList(jaminanData);
      setProdukList(produkData);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  useEffect(() => {
    setSelectedProdukId(selectedJaminan?.produk?.idproduk || '');
  }, [selectedJaminan]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const form = e.currentTarget;
    const isUpdating = !!selectedJaminan;

    const jaminanData: Partial<JenisJaminan> = {
      namajaminan: (form.elements.namedItem('namajaminan') as HTMLInputElement).value,
      produk: selectedProdukId ? { idproduk: selectedProdukId, namaproduk: '' } : null,
    };

    if (isUpdating) {
        jaminanData.idjaminan = selectedJaminan.idjaminan;
    }

    const url = isUpdating ? `${apiConfig.baseURL}/jenisjaminan/${selectedJaminan.idjaminan}` : `${apiConfig.baseURL}/jenisjaminan`;
    const method = isUpdating ? 'PUT' : 'POST';

    try {
      // Gunakan fetchWithAuth
      const response = await fetchWithAuth(url, {
        method,
        body: JSON.stringify(jaminanData),
      });
      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({ message: 'Gagal menyimpan data.' }));
        throw new Error(errorBody.message);
      }
      clearForm();
      fetchData();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Gagal menyimpan data');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Yakin ingin menghapus jenis jaminan ini?')) return;
    try {
      // Gunakan fetchWithAuth
      const response = await fetchWithAuth(`${apiConfig.baseURL}/jenisjaminan/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Gagal menghapus data');
      fetchData();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Gagal menghapus data');
    }
  };
  
  const clearForm = () => {
    setSelectedJaminan(null);
    setSelectedProdukId('');
    const form = document.querySelector('form');
    if (form) form.reset();
  };
  
  // ... (sisa kode JSX tidak berubah) ...
  return (
    <div className="container mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Kelola Jenis Jaminan</h1>

      {error && <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">{selectedJaminan ? 'Edit Jenis Jaminan' : 'Tambah Jenis Jaminan Baru'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4" key={selectedJaminan?.idjaminan || 'new-jaminan'}>
          {/* Input ID Jaminan hanya ditampilkan saat mode edit */}
          {selectedJaminan && (
             <div>
                <label htmlFor="idjaminan" className="block text-sm font-medium text-gray-700">ID Jaminan</label>
                <input type="text" name="idjaminan" defaultValue={selectedJaminan.idjaminan} disabled className="mt-1 input-style" />
             </div>
          )}

          <div>
            <label htmlFor="idproduk" className="block text-sm font-medium text-gray-700">1. Pilih Produk Terkait</label>
            <select name="idproduk" value={selectedProdukId} onChange={(e) => setSelectedProdukId(e.target.value)} className="mt-1 input-style" required>
              <option value="">-- Pilih Produk --</option>
              {produkList.map(p => <option key={p.idproduk} value={p.idproduk}>{p.namaproduk}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="namajaminan" className="block text-sm font-medium text-gray-700">2. Isi Nama Jaminan</label>
            <input type="text" name="namajaminan" defaultValue={selectedJaminan?.namajaminan || ''} disabled={!selectedProdukId} className="mt-1 input-style" required />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? 'Menyimpan...' : (selectedJaminan ? 'Update' : 'Simpan')}
            </button>
            {selectedJaminan && <button type="button" onClick={clearForm} className="btn-secondary">Batal</button>}
          </div>
        </form>
      </div>

      {/* Tabel */}
      <div className="bg-white p-6 rounded-lg shadow-md">
         <h2 className="text-2xl font-semibold mb-4">Daftar Jenis Jaminan</h2>
         {isLoading ? <p>Loading...</p> : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="th-style">ID Jaminan</th>
                    <th className="th-style">Nama Jaminan</th>
                    <th className="th-style">Produk Terkait</th>
                    <th className="th-style">Aksi</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {jaminanList.map((jaminan) => (
                    <tr key={jaminan.idjaminan}>
                      <td className="td-style">{jaminan.idjaminan}</td>
                      <td className="td-style">{jaminan.namajaminan}</td>
                      <td className="td-style">{jaminan.produk?.namaproduk || '-'}</td>
                      <td className="td-style space-x-2">
                        <button onClick={() => { setSelectedJaminan(jaminan); window.scrollTo(0,0); }} className="text-blue-600 hover:underline">Edit</button>
                        <button onClick={() => handleDelete(jaminan.idjaminan)} className="text-red-600 hover:underline">Hapus</button>
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
export default JenisJaminanAdminPage;