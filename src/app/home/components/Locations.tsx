import React from 'react';

const BFI_ORANGE = "#F7941D";

const Locations = () => (
  <section className="py-20 bg-blue-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-2">Turboo Memiliki Lebih dari 200 Lokasi Pelayanan Tersebar di Indonesia</h2>
      <p className="text-lg text-gray-600 mb-8">Temukan cabang atau POS Turboo terdekat dengan Anda</p>
      
      <div className="relative mb-8 p-4">
        {/* Ganti src dengan path gambar peta Anda */}
        <img src="https://www.bfi.co.id/themes/bfi/assets/images/home/bfi-map-2022.png" alt="Peta Lokasi Turboo di Indonesia" className="w-full max-w-4xl mx-auto h-auto object-contain"/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
           <a href="#" style={{ backgroundColor: BFI_ORANGE }} className="text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
             Temukan disini &gt;
           </a>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed">
        Jam operasional semua cabang Turboo:<br/>
        Senin - Jumat 08.15 - 16.30 WIB<br/>
        Sabtu 08.00 - 12.00 WIB
      </p>
    </div>
  </section>
);

export default Locations;