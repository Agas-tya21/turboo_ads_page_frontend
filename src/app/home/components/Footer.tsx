'use client'; // Menjadikan ini sebagai Client Component

import React, { useState, useEffect } from 'react';
import { SocialIcon } from './icons';
import apiConfig from '@/config/api';

// Definisikan tipe data untuk state
interface ComprofileData {
  namagedung: string;
  alamatkantorutama: string;
  nomorperusahaan: string;
  nocustomerservice: string;
  usnfb: string;
  usnig: string;
  usntiktok: string;
  usntwt: string;
  usnyt: string;
  email: string;
}

const BFI_ORANGE = "#F7941D";

const Footer = () => {
  // State untuk menyimpan data dari API
  const [comprofile, setComprofile] = useState<ComprofileData | null>(null);

  // useEffect untuk fetch data saat komponen dimuat
  useEffect(() => {
    const fetchComprofile = async () => {
      try {
        // Mengambil data dari endpoint dengan ID '001'
        const response = await fetch(`${apiConfig.baseURL}/comprofiles/001`);
        if (!response.ok) {
          throw new Error('Data not found');
        }
        const data: ComprofileData = await response.json();
        setComprofile(data);
      } catch (error) {
        console.error('Failed to fetch comprofile data:', error);
      }
    };

    fetchComprofile();
  }, []); // Array kosong berarti efek ini hanya berjalan sekali saat mount

  return (
    <footer className="bg-[#333333] text-gray-300 py-12">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
                {/* Column 1: Address */}
                <div>
                    <h3 className="font-bold text-white mb-4">{comprofile?.namagedung || 'Nama Gedung'}</h3>
                    <p className="text-sm leading-relaxed">
                        {comprofile?.alamatkantorutama || 'Alamat Kantor Utama'}
                    </p>
                    <p className="text-sm mt-4">
                        Phone: {comprofile?.nomorperusahaan || 'Nomor Perusahaan'}<br/>
                    </p>
                </div>
                {/* Column 2: Customer Care & Social */}
                <div className="flex flex-col items-start">
                     <a href={`tel:${comprofile?.nocustomerservice || ''}`} className="border border-gray-500 rounded-md px-4 py-2 text-sm mb-6 hover:bg-gray-700 transition-colors">
                        Customer Care 📞 {comprofile?.nocustomerservice || 'No CS'}
                     </a>
                     <div className="flex gap-3 mb-4 text-white">
                        <SocialIcon href={`https://facebook.com/${comprofile?.usnfb || ''}`} target="_blank">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                        </SocialIcon>
                         <SocialIcon href={`https://instagram.com/${comprofile?.usnig || ''}`} target="_blank">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.225 1.664 4.771 4.919 4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>
                        </SocialIcon>
                         <SocialIcon href={`https://twitter.com/${comprofile?.usntwt || ''}`} target="_blank">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.208 3.803 4.649-.623.169-1.282.23-1.967.182.598 1.884 2.333 3.258 4.393 3.315-1.621 1.274-3.662 2.031-5.873 1.745 1.994 1.282 4.368 2.029 6.946 2.029 8.325 0 12.89-6.903 12.89-12.89 0-.197-.005-.393-.014-.588.884-.637 1.65-1.425 2.257-2.341z" /></svg>
                        </SocialIcon>
                         <SocialIcon href={`https://tiktok.com/@${comprofile?.usntiktok || ''}`} target="_blank">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.69-2.81-1.75-1.76-2.84-4.14-2.81-6.53.04-2.55 1.11-4.94 2.79-6.76 1.64-1.78 3.91-2.82 6.2-2.86.05-.01.11-.01.17-.01v4.03c-1.39.02-2.77 0-4.15-.02-.03.88-.24 1.76-.64 2.56-.63 1.25-1.84 2.1-3.26 2.11v4.03c1.44-.02 2.87-.26 4.19-.82.57-.24 1.11-.56 1.62-.91.03-2.91 0-5.82.02-8.73z"/></svg>
                        </SocialIcon>
                         <SocialIcon href={`https://youtube.com/${comprofile?.usnyt || ''}`} target="_blank">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                        </SocialIcon>
                         <SocialIcon href={`mailto:${comprofile?.email || ''}`}>
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                        </SocialIcon>
                     </div>
                     <p className="text-xs">Turboo berizin dan diawasi oleh Otoritas Jasa Keuangan</p>
                </div>
                {/* Column 3: Back to top */}
                <div className="flex justify-end items-start">
                    <a href="#" style={{ backgroundColor: BFI_ORANGE }} className="p-3 rounded-md hover:opacity-90">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                    </a>
                </div>
            </div>
            {/* <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
                <p className="mb-4 md:mb-0">&copy; 2025 - PT Turboo Indonesia Tbk</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#" className="hover:text-white">Karir</a>
                    <a href="#" className="hover:text-white">Peluang Bisnis</a>
                    <a href="#" className="hover:text-white">Hubungi Kami</a>
                    <a href="#" className="hover:text-white">Cabang Kami</a>
                    <a href="#" className="hover:text-white">Syarat & Penggunaan</a>
                    <a href="#" className="hover:text-white">Privasi</a>
                </div>
            </div> */}
        </div>
    </footer>
  );
};

export default Footer;