'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import apiConfig from '@/config/api';

// Tipe data untuk Produk (untuk dropdown)
interface Produk {
  idproduk: string;
  namaproduk: string;
}

// Tipe data untuk Promo
interface Promo {
  idpromo: string;
  produk: Produk | null;
  namapromo: string;
  kelaspromo: string;
  tglmulai: string;
  tglakhir: string;
  taglinepromo: string;
  keteranganpromo: string;
  gambarpromo: string;
}

const PromoAdminPage = () => {
  const [promoList, setPromoList] = useState<Promo[]>([]);
  const [produkList, setProdukList] = useState<Produk[]>([]);
  const [selectedPromo, setSelectedPromo] = useState<Promo | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch data produk untuk dropdown dan data promo
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [promoRes, produkRes] = await Promise.all([
        fetch(`${apiConfig.baseURL}/promo`),
        fetch(`${apiConfig.baseURL}/produk`),
      ]);
      if (!promoRes.ok) throw new Error('Gagal mengambil data promo');
      if (!produkRes.ok) throw new Error('Gagal mengambil data produk');
      
      const promoData = await promoRes.json();
      const produkData = await produkRes.json();
      
      setPromoList(promoData);
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const form = e.currentTarget;

    const formData = new FormData();
    const idProduk = (form.elements.namedItem('idproduk') as HTMLSelectElement).value;
    
    const promoData = {
      idpromo: (form.elements.namedItem('idpromo') as HTMLInputElement).value,
      produk: idProduk ? { idproduk: idProduk } : null,
      namapromo: (form.elements.namedItem('namapromo') as HTMLInputElement).value,
      // --- PERUBAHAN DI SINI ---
      kelaspromo: (form.elements.namedItem('kelaspromo') as HTMLSelectElement).value,
      tglmulai: (form.elements.namedItem('tglmulai') as HTMLInputElement).value,
      tglakhir: (form.elements.namedItem('tglakhir') as HTMLInputElement).value,
      taglinepromo: (form.elements.namedItem('taglinepromo') as HTMLInputElement).value,
      keteranganpromo: (form.elements.namedItem('keteranganpromo') as HTMLTextAreaElement).value,
      gambarpromo: selectedPromo?.gambarpromo || null,
    };
    
    formData.append('promo', new Blob([JSON.stringify(promoData)], { type: 'application/json' }));

    if (selectedFile) {
        formData.append('file', selectedFile);
    }
    
    const isUpdating = !!selectedPromo;
    const url = isUpdating ? `${apiConfig.baseURL}/promo/${selectedPromo.idpromo}` : `${apiConfig.baseURL}/promo`;
    const method = isUpdating ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, { method, body: formData });
      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({ message: 'Gagal menyimpan data.' }));
        throw new Error(errorBody.message);
      }
      
      form.reset();
      setSelectedPromo(null);
      setSelectedFile(null);
      fetchData();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat menyimpan');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDelete = async (id: string) => {
    if (!confirm('Yakin ingin menghapus promo ini?')) return;
    try {
      const response = await fetch(`${apiConfig.baseURL}/promo/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Gagal menghapus data');
      fetchData();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Gagal menghapus data');
    }
  };
  
  const clearForm = () => {
    setSelectedPromo(null);
    setSelectedFile(null);
    const form = document.querySelector('form');
    if (form) form.reset();
  }

  return (
    <div className="container mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Kelola Promo</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">{selectedPromo ? 'Edit Promo' : 'Tambah Promo Baru'}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" key={selectedPromo?.idpromo || 'new-promo-form'}>
          {/* Kolom 1 */}
          <div className="space-y-4">
            <div>
              <label htmlFor="idpromo" className="block text-sm font-medium text-gray-700">ID Promo</label>
              <input type="text" name="idpromo" defaultValue={selectedPromo?.idpromo || ''} disabled={!!selectedPromo} className="mt-1 block w-full input-style" required />
            </div>
            <div>
              <label htmlFor="namapromo" className="block text-sm font-medium text-gray-700">Nama Promo</label>
              <input type="text" name="namapromo" defaultValue={selectedPromo?.namapromo || ''} className="mt-1 block w-full input-style" required />
            </div>
            <div>
              <label htmlFor="idproduk" className="block text-sm font-medium text-gray-700">Produk Terkait</label>
              <select name="idproduk" defaultValue={selectedPromo?.produk?.idproduk || ''} className="mt-1 block w-full input-style">
                <option value="">-- Pilih Produk --</option>
                {produkList.map(p => <option key={p.idproduk} value={p.idproduk}>{p.namaproduk}</option>)}
              </select>
            </div>
             {/* --- PERUBAHAN DI SINI --- */}
             <div>
              <label htmlFor="kelaspromo" className="block text-sm font-medium text-gray-700">Kelas Promo</label>
              <select name="kelaspromo" defaultValue={selectedPromo?.kelaspromo || ''} className="mt-1 block w-full input-style">
                <option value="">-- Pilih Kelas --</option>
                <option value="Kelas 1">Kelas 1</option>
                <option value="Kelas 2">Kelas 2</option>
                <option value="Kelas 3">Kelas 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="taglinepromo" className="block text-sm font-medium text-gray-700">Tagline</label>
              <input type="text" name="taglinepromo" defaultValue={selectedPromo?.taglinepromo || ''} className="mt-1 block w-full input-style" />
            </div>
          </div>
          
          {/* Kolom 2 */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="tglmulai" className="block text-sm font-medium text-gray-700">Tgl Mulai</label>
                <input type="date" name="tglmulai" defaultValue={selectedPromo?.tglmulai || ''} className="mt-1 block w-full input-style" required />
              </div>
              <div>
                <label htmlFor="tglakhir" className="block text-sm font-medium text-gray-700">Tgl Akhir</label>
                <input type="date" name="tglakhir" defaultValue={selectedPromo?.tglakhir || ''} className="mt-1 block w-full input-style" required />
              </div>
            </div>
            <div>
              <label htmlFor="keteranganpromo" className="block text-sm font-medium text-gray-700">Keterangan</label>
              <textarea name="keteranganpromo" defaultValue={selectedPromo?.keteranganpromo || ''} className="mt-1 block w-full input-style" rows={4}></textarea>
            </div>
            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-700">Gambar Promo</label>
              <input type="file" name="file" accept="image/*" onChange={(e) => e.target.files && setSelectedFile(e.target.files[0])} className="mt-1 block w-full file-input-style" />
              {(selectedFile || (selectedPromo && selectedPromo.gambarpromo)) && (
                <div className="mt-4">
                  <img src={selectedFile ? URL.createObjectURL(selectedFile) : selectedPromo?.gambarpromo} alt="Preview" className="w-40 h-auto object-cover rounded-md border"/>
                </div>
              )}
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="md:col-span-2 flex items-center gap-4 pt-4">
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? 'Menyimpan...' : (selectedPromo ? 'Update' : 'Simpan')}
            </button>
            {selectedPromo && <button type="button" onClick={clearForm} className="btn-secondary">Batal</button>}
          </div>
        </form>
      </div>

      {/* Tabel */}
      <div className="bg-white p-6 rounded-lg shadow-md">
         <h2 className="text-2xl font-semibold mb-4">Daftar Promo</h2>
         {isLoading ? <p>Loading...</p> : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="th-style">Nama Promo</th>
                    <th className="th-style">Kelas</th>
                    <th className="th-style">Produk</th>
                    <th className="th-style">Periode</th>
                    <th className="th-style">Gambar</th>
                    <th className="th-style">Aksi</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {promoList.map((promo) => (
                    <tr key={promo.idpromo}>
                      <td className="td-style">{promo.namapromo}</td>
                      <td className="td-style">{promo.kelaspromo}</td>
                      <td className="td-style">{promo.produk?.namaproduk || '-'}</td>
                      <td className="td-style">{promo.tglmulai} s/d {promo.tglakhir}</td>
                      <td className="td-style">
                        {promo.gambarpromo && <img src={promo.gambarpromo} alt={promo.namapromo} className="w-16 h-16 object-cover rounded" />}
                      </td>
                      <td className="td-style space-x-2">
                        <button onClick={() => { setSelectedPromo(promo); window.scrollTo(0,0); }} className="text-blue-600 hover:underline">Edit</button>
                        <button onClick={() => handleDelete(promo.idpromo)} className="text-red-600 hover:underline">Hapus</button>
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

export default PromoAdminPage;