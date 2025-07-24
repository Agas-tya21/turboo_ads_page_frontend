'use client';

import React, { FormEvent, useState, useEffect } from 'react';
import apiConfig from '@/config/api';

// Tipe data
interface Produk {
  idproduk: string;
  namaproduk: string;
}

interface Promo {
  idpromo: string;
  namapromo: string;
  produk: Produk | null;
  tglmulai: string;
  tglakhir: string;
}

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
  const [promoList, setPromoList] = useState<Promo[]>([]);
  const [filteredPromoList, setFilteredPromoList] = useState<Promo[]>([]);
  const [selectedProdukId, setSelectedProdukId] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [error, setError] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<SelectedFiles>({
    fotoktp: null, fotokk: null, fotojaminan: null,
    fotorekeninglistrik: null, fotoslipgaji: null, fotopelepasanaset: null,
  });

  // Fetch data produk dan promo saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [produkRes, promoRes] = await Promise.all([
            fetch(`${apiConfig.baseURL}/produk`),
            fetch(`${apiConfig.baseURL}/promo`)
        ]);

        if (!produkRes.ok) throw new Error('Gagal memuat daftar produk');
        if (!promoRes.ok) throw new Error('Gagal memuat daftar promo');

        const produkData = await produkRes.json();
        const promoData = await promoRes.json();

        setProdukList(produkData);
        
        // Filter promo yang aktif hari ini
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const activePromos = promoData.filter((p: Promo) => {
            return today >= new Date(p.tglmulai) && today <= new Date(p.tglakhir);
        });
        setPromoList(activePromos);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Gagal memuat data');
      }
    };
    fetchData();
  }, []);

  // Filter promo berdasarkan produk yang dipilih
  useEffect(() => {
    if (selectedProdukId) {
      // Tampilkan promo yang spesifik untuk produk ini ATAU promo umum (yang tidak terikat produk)
      const filtered = promoList.filter(p => p.produk?.idproduk === selectedProdukId || !p.produk);
      setFilteredPromoList(filtered);
    } else {
      setFilteredPromoList([]);
    }
  }, [selectedProdukId, promoList]);


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
        idproduk: {value: string},
        idpromo: {value: string},
    };
    
    const idProduk = formElements.idproduk.value;
    const idPromo = formElements.idpromo.value;

    const konsumenData = {
      nik: formElements.nik.value,
      namalengkap: formElements.namalengkap.value,
      notelpon: formElements.notelpon.value,
      produk: idProduk ? { idproduk: idProduk } : null,
      promo: idPromo ? { idpromo: idPromo } : null,
    };

    const formData = new FormData();
    formData.append('konsumen', new Blob([JSON.stringify(konsumenData)], { type: 'application/json' }));

    Object.entries(selectedFiles).forEach(([key, file]) => {
      if (file) {
        formData.append(key, file);
      }
    });

    try {
        const response = await fetch(`${apiConfig.baseURL}/konsumen`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Gagal mengirim data.'}));
            throw new Error(errorData.message || 'Terjadi kesalahan pada server.');
        }

        setSubmitMessage('Pengajuan Anda berhasil dikirim! Tim kami akan segera menghubungi Anda.');
        form.reset();
        setSelectedFiles({ fotoktp: null, fotokk: null, fotojaminan: null, fotorekeninglistrik: null, fotoslipgaji: null, fotopelepasanaset: null });
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

          {/* Produk & Promo */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-6">2. Pilih Produk & Promo</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                <label htmlFor="idproduk" className="block text-sm font-medium text-gray-700">Produk Jaminan</label>
                <select name="idproduk" id="idproduk" className="mt-1 input-style" required onChange={(e) => setSelectedProdukId(e.target.value)}>
                    <option value="">-- Pilih Produk --</option>
                    {produkList.map(produk => (
                        <option key={produk.idproduk} value={produk.idproduk}>{produk.namaproduk}</option>
                    ))}
                </select>
              </div>
              <div>
                <label htmlFor="idpromo" className="block text-sm font-medium text-gray-700">Pilih Promo</label>
                <select name="idpromo" id="idpromo" className="mt-1 input-style" disabled={!selectedProdukId}>
                    <option value="">-- Pilih Promo (Jika Ada) --</option>
                    {filteredPromoList.map(promo => (
                        <option key={promo.idpromo} value={promo.idpromo}>{promo.namapromo}</option>
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
                <label htmlFor="fotoktp">Foto KTP</label>
                <input type="file" name="fotoktp" id="fotoktp" onChange={handleFileChange} className="mt-1 file-input-style" />
              </div>
               <div>
                <label htmlFor="fotokk">Foto Kartu Keluarga (KK)</label>
                <input type="file" name="fotokk" id="fotokk" onChange={handleFileChange} className="mt-1 file-input-style" />
              </div>
              <div>
                <label htmlFor="fotojaminan">Foto Jaminan (BPKB/Sertifikat)</label>
                <input type="file" name="fotojaminan" id="fotojaminan" onChange={handleFileChange} className="mt-1 file-input-style" />
              </div>
              <div>
                <label htmlFor="fotorekeninglistrik">Foto Rekening Listrik</label>
                <input type="file" name="fotorekeninglistrik" id="fotorekeninglistrik" onChange={handleFileChange} className="mt-1 file-input-style" />
              </div>
              <div>
                <label htmlFor="fotoslipgaji">Foto Slip Gaji / ID Card</label>
                <input type="file" name="fotoslipgaji" id="fotoslipgaji" onChange={handleFileChange} className="mt-1 file-input-style" />
              </div>
              <div>
                <label htmlFor="fotopelepasanaset">Foto Pelepasan Aset (Opsional)</label>
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