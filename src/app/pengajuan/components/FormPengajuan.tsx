'use client';

import React, { FormEvent, useState, useEffect } from 'react';
import apiConfig from '@/config/api';

// Tipe data untuk Produk
interface Produk {
  idproduk: string;
  namaproduk: string;
}

// State untuk menyimpan file yang dipilih
interface SelectedFiles {
  fotoktp: File | null;
  fotokk: File | null;
  fotojaminan: File | null;
  fotorekeninglistrik: File | null;
  fotoslipgaji: File | null;
  fotopelepasanaset: File | null;
}

const FormPengajuan = () => {
  const [produkList, setProdukList] = useState<Produk[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [error, setError] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<SelectedFiles>({
    fotoktp: null,
    fotokk: null,
    fotojaminan: null,
    fotorekeninglistrik: null,
    fotoslipgaji: null,
    fotopelepasanaset: null,
  });

  // --- BARU: Fetch data produk saat komponen dimuat ---
  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const response = await fetch(`${apiConfig.baseURL}/produk`);
        if (!response.ok) {
          throw new Error('Gagal memuat daftar produk');
        }
        const data = await response.json();
        setProdukList(data);
      } catch (err) {
        console.error(err);
        // Anda bisa menampilkan error ke pengguna jika perlu
      }
    };
    fetchProduk();
  }, []); // Array kosong memastikan ini hanya berjalan sekali

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setSelectedFiles(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setError('');

    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
        nik: {value: string},
        namalengkap: {value: string},
        notelpon: {value: string},
        idproduk: {value: string}, // Tambahkan idproduk
    };
    
    const idProduk = formElements.idproduk.value;

    const konsumenData = {
      nik: formElements.nik.value,
      namalengkap: formElements.namalengkap.value,
      notelpon: formElements.notelpon.value,
      // --- BARU: Sertakan produk yang dipilih ---
      produk: idProduk ? { idproduk: idProduk } : null, 
    };

    const formData = new FormData();
    formData.append('konsumen', new Blob([JSON.stringify(konsumenData)], { type: 'application/json' }));

    Object.entries(selectedFiles).forEach(([key, file]) => {
      if (file) {
        formData.append(`files`, file, key);
      }
    });

    try {
        const response = await fetch(`${apiConfig.baseURL}/konsumen`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Gagal mengirim data. Periksa kembali isian Anda.'}));
            throw new Error(errorData.message || 'Terjadi kesalahan pada server.');
        }

        setSubmitMessage('Pengajuan Anda berhasil dikirim! Tim kami akan segera menghubungi Anda.');
        form.reset();
        setSelectedFiles({ fotoktp: null, fotokk: null, fotojaminan: null, fotorekeninglistrik: null, fotoslipgaji: null, fotopelepasanaset: null });

    } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Terjadi kesalahan yang tidak diketahui.');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Formulir Pengajuan Konsumen</h2>
        <p className="text-gray-600 text-center mb-8">Lengkapi data dan unggah dokumen persyaratan.</p>
        
        {submitMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
            <span className="block sm:inline">{submitMessage}</span>
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Data Diri */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">1. Data Diri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="namalengkap" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input type="text" name="namalengkap" id="namalengkap" className="mt-1 input-style" required />
              </div>
              <div>
                <label htmlFor="nik" className="block text-sm font-medium text-gray-700">NIK</label>
                <input type="text" name="nik" id="nik" pattern="\d{16}" title="NIK harus 16 digit" className="mt-1 input-style" required />
              </div>
              <div>
                <label htmlFor="notelpon" className="block text-sm font-medium text-gray-700">No. Telepon (WhatsApp)</label>
                <input type="tel" name="notelpon" id="notelpon" className="mt-1 input-style" required />
              </div>
            </div>
          </div>

          {/* --- BAGIAN JAMINAN DIPERBARUI --- */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">2. Pilih Produk Jaminan</h3>
             <div className="grid grid-cols-1">
               <div>
                <label htmlFor="idproduk" className="block text-sm font-medium text-gray-700">Produk Jaminan</label>
                <select name="idproduk" id="idproduk" className="mt-1 input-style" required>
                    <option value="">-- Pilih Produk yang Diinginkan --</option>
                    {produkList.map(produk => (
                        <option key={produk.idproduk} value={produk.idproduk}>
                            {produk.namaproduk}
                        </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Dokumen */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">3. Unggah Dokumen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fotoktp" className="block text-sm font-medium text-gray-700">Foto KTP</label>
                <input type="file" name="fotoktp" id="fotoktp" onChange={handleFileChange} className="mt-1 file-input-style" />
              </div>
               <div>
                <label htmlFor="fotokk" className="block text-sm font-medium text-gray-700">Foto Kartu Keluarga (KK)</label>
                <input type="file" name="fotokk" id="fotokk" onChange={handleFileChange} className="mt-1 file-input-style" />
              </div>
              <div>
                <label htmlFor="fotojaminan" className="block text-sm font-medium text-gray-700">Foto Jaminan (BPKB/Sertifikat)</label>
                <input type="file" name="fotojaminan" id="fotojaminan" onChange={handleFileChange} className="mt-1 file-input-style" />
              </div>
              <div>
                <label htmlFor="fotorekeninglistrik" className="block text-sm font-medium text-gray-700">Foto Rekening Listrik</label>
                <input type="file" name="fotorekeninglistrik" id="fotorekeninglistrik" onChange={handleFileChange} className="mt-1 file-input-style" />
              </div>
               <div>
                <label htmlFor="fotoslipgaji" className="block text-sm font-medium text-gray-700">Foto Slip Gaji</label>
                <input type="file" name="fotoslipgaji" id="fotoslipgaji" onChange={handleFileChange} className="mt-1 file-input-style" />
              </div>
              <div>
                <label htmlFor="fotopelepasanaset" className="block text-sm font-medium text-gray-700">Foto Pelepasan Aset (Jika ada)</label>
                <input type="file" name="fotopelepasanaset" id="fotopelepasanaset" onChange={handleFileChange} className="mt-1 file-input-style" />
              </div>
            </div>
          </div>

          {/* Tombol Submit */}
          <div className="text-center pt-4">
            <button type="submit" disabled={isSubmitting} className="w-full md:w-auto btn-primary text-lg px-10 py-3">
              {isSubmitting ? 'Mengirim...' : 'Kirim Pengajuan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPengajuan;