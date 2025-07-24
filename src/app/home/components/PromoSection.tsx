import React from 'react';

const BFI_BLUE = "#FE0000";
const PromoSection = () => (
  <section className="py-20 bg-[#F8F9FA]">
    <div className="container mx-auto px-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Promo Spesial dan Informasi Bulan Ini</h2>
      <div className="relative rounded-2xl text-white p-8 md:p-12 bg-gradient-to-r from-[#003d7a] to-[#005a9c] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center"style={{ color: BFI_BLUE }}>
          {/* Text Content */}
          <div className="flex flex-col gap-4 z-10">
            <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
              PEMBIAYAAN MESIN INDUSTRI & ALAT BERAT
            </h3>
            <p className="text-xl lg:text-2xl font-semibold mt-2">
              DENGAN JAMINAN INVOICE UNTUK SOLUSI KEUNTUNGAN BERLIPAT
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-6 items-start md:items-center text-base">
              <a href="#" className="font-bold border border-white rounded-md px-4 py-2 hover:bg-white hover:text-[#003d7a] transition-colors">BFI.CO.ID</a>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-bold text-lg">1500018</span>
              </div>
            </div>
          </div>

          {/* Image and QR Code Content */}
          <div className="relative flex justify-center items-center h-64 md:h-auto -mr-8">
             <img
                src="https://www.bfi.co.id/themes/bfi/assets/images/home/bfi-product-heavy-equipment.png"
                alt="Pembiayaan Mesin Industri & Alat Berat"
                className="absolute inset-0 w-full h-full object-contain object-center opacity-20 md:opacity-100 md:relative"
              />
             <div className="absolute bottom-0 right-8 md:bottom-4 md:right-4 bg-white p-2 rounded-lg z-10">
               <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://www.bfi.co.id"
                  alt="QR Code Turboo"
                  className="w-20 h-20"
                />
             </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-8 md:left-12 font-bold text-lg z-10">#SelaluAdaJalan</div>
        <div className="absolute top-4 right-8 md:right-12 z-10">
            <div className="font-extrabold text-2xl border-2 border-white px-3 py-1">
                Turboo <span className="font-light"></span>
            </div>
        </div>
      </div>
    </div>
  </section>
);

export default PromoSection;