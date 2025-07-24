import React from 'react';

const BFI_BLUE = "#FE0000";
const BFI_ORANGE = "#F7941D";

const Hero = () => (
  <main className="container mx-auto px-6 py-12 md:py-20">
    <div className="flex flex-col-reverse items-center gap-12 md:grid md:grid-cols-2 md:gap-8">
      
      {/* Konten Teks */}
      <div className="flex flex-col gap-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: BFI_BLUE }}>
          Dengan Turboo
          <span className="text-3xl md:text-4xl block text-gray-800 font-bold">Semua Jalan Menjadi Mudah</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
          Mulai dari pendidikan, kesehatan, hingga modal usaha. Turboo siap membantu Anda.
        </p>
        <div className="mt-4">
          {/* --- PERUBAHAN DI SINI --- */}
          <a 
            href="/pengajuan" // Mengarahkan ke halaman formulir pengajuan
            style={{ backgroundColor: BFI_ORANGE }} 
            className="text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity text-lg inline-block"
          >
            Ajukan Sekarang 
          </a>
        </div>
        {/* <p className="mt-4 text-sm text-gray-500">
          Turboo berizin dan diawasi oleh Otoritas Jasa Keuangan
        </p> */}
      </div>

      {/* Konten Gambar */}
      <div className="w-full flex justify-center">
        <img
          src="/logos/homepage.png" 
          alt="Jaminan BPKB Mobil dan Motor"
          // --- PERUBAHAN DI SINI: Menghapus shadow dan rounded ---
          className="w-full max-w-md h-auto"
        />
      </div>
      
    </div>
  </main>
);

export default Hero;