'use client';

import React, { FormEvent, useState, useEffect } from 'react';
import apiConfig from '@/config/api';

// Tipe data
interface Produk {
  idproduk: string;
  namaproduk: string;
}

interface JenisJaminan {
  idjaminan: string;
  namajaminan: string;
}

const FormPengajuan = () => {
  const [produkList, setProdukList] = useState<Produk[]>([]);
  const [jaminanList, setJaminanList] = useState<JenisJaminan[]>([]);
  const [selectedProdukId, setSelectedProdukId] = useState<string>('');
  
  const [isJaminanLoading, setIsJaminanLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch data produk
  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const produkRes = await fetch(`${apiConfig.baseURL}/produk`);
        if (!produkRes.ok) throw new Error('Gagal memuat daftar produk');
        const produkData = await produkRes.json();
        setProdukList(produkData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Gagal memuat data');
      }
    };
    fetchProduk();
  }, []);

  // Fetch jenis jaminan berdasarkan produk yang dipilih
  useEffect(() => {
    if (!selectedProdukId) {
      setJaminanList([]);
      return;
    }

    const fetchJaminan = async () => {
      setIsJaminanLoading(true);
      try {
        const jaminanRes = await fetch(`${apiConfig.baseURL}/jenisjaminan/produk/${selectedProdukId}`);
        if (!jaminanRes.ok) throw new Error('Gagal memuat jenis jaminan');
        const jaminanData = await jaminanRes.json();
        setJaminanList(jaminanData);
      } catch (err) {
        console.error(err);
        setJaminanList([]); // Kosongkan jika error
      } finally {
        setIsJaminanLoading(false);
      }
    };

    fetchJaminan();
  }, [selectedProdukId]);

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
        idproduk: {value: string},
        idjaminan: {value: string}, // Tambahkan idjaminan
    };
    
    const idProduk = formElements.idproduk.value;
    const idJaminan = formElements.idjaminan.value;

    const konsumenData = {
      nik: formElements.nik.value,
      namalengkap: formElements.namalengkap.value,
      notelpon: formElements.notelpon.value,
      produk: idProduk ? { idproduk: idProduk } : null,
      jenisJaminan: idJaminan ? { idjaminan: idJaminan } : null, // Kirim data jaminan
      promo: null,
    };

    const requestBody = JSON.stringify(konsumenData);

    try {
        const response = await fetch(`${apiConfig.baseURL}/konsumen`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: requestBody,
        });

        if (!response.ok) {
          throw new Error('Gagal mengirim data pengajuan.');
        }

        setSubmitMessage('Pengajuan Anda berhasil dikirim! Tim kami akan segera menghubungi Anda.');
        form.reset();
        setSelectedProdukId('');

    } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Gagal mengirim data.');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Formulir Pengajuan Konsumen</h2>
        
        {submitMessage && (
          <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-6">{submitMessage}</div>
        )}
        {error && (
          <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-6">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Data Diri & Produk */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">Data Pengajuan</h3>
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
              <div>
                <label htmlFor="idproduk" className="block text-sm font-medium text-gray-700">Produk Jaminan</label>
                <select name="idproduk" id="idproduk" className="mt-1 input-style" required value={selectedProdukId} onChange={(e) => setSelectedProdukId(e.target.value)}>
                    <option value="">-- Pilih Produk --</option>
                    {produkList.map(produk => (
                        <option key={produk.idproduk} value={produk.idproduk}>{produk.namaproduk}</option>
                    ))}
                </select>
              </div>
              {/* --- DROPDOWN BARU DITAMBAHKAN DI SINI --- */}
              <div className="md:col-span-2">
                <label htmlFor="idjaminan" className="block text-sm font-medium text-gray-700">Pilih Jenis Jaminan</label>
                <select name="idjaminan" id="idjaminan" className="mt-1 input-style" disabled={!selectedProdukId || isJaminanLoading} required>
                    <option value="">-- Pilih Jenis Jaminan --</option>
                    {isJaminanLoading ? (
                        <option>Memuat...</option>
                    ) : (
                        jaminanList.map(jaminan => (
                            <option key={jaminan.idjaminan} value={jaminan.idjaminan}>{jaminan.namajaminan}</option>
                        ))
                    )}
                </select>
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