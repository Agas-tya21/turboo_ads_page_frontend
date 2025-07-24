import React from 'react';

const BFI_ORANGE = "#F7941D";

const PreFooterCTA = () => (
  <section className="bg-[#FE0000] py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6 md:mb-0 md:max-w-2xl">Nikmati proses pencairan cepat dengan melengkapi persyaratan yang ada</h2>
          <div className="flex flex-col gap-4 w-full sm:w-auto sm:min-w-[250px]">
              {/* --- PERUBAHAN DI SINI --- */}
              <a href="/pengajuan" style={{ backgroundColor: BFI_ORANGE }} className="text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity text-center">
                  Ajukan Sekarang
              </a>
              <a href="#" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-[#003d7a] transition-colors text-center">
                  Konsultasi Pengajuan
              </a>
          </div>
      </div>
  </section>
);

export default PreFooterCTA;