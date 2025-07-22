import React from 'react';

const BFI_BLUE = "#FE0000";

const Products = () => (
  <section id="produk-kami" className="bg-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-12" style={{ color: BFI_BLUE }}>
        Produk yang Kami Tawarkan
      </h2>
      <div className="grid md:grid-cols-2 gap-8 text-left">
        {/* Card 1: Mobil */}
        <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 overflow-hidden">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Pembiayaan Berjaminan BPKB Mobil</h3>
          <p className="text-gray-600 mb-6">
            Dapatkan dana pencairan hingga 85% dari nilai kendaraan dan tenor hingga 3 tahun. <a href="#" className="text-blue-600 font-semibold">Pelajari Produk</a>
          </p>
          <a href="#" className="font-bold text-blue-600">Ajukan Sekarang &gt;</a>
          <div className="absolute -bottom-4 -right-4">
            <img src="https://bfi.co.id/themes/bfi/assets/images/home/product-car.png" alt="BPKB Mobil" className="w-28"/>
          </div>
        </div>
        
        {/* Card 2: Motor */}
        <div className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 overflow-hidden">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Pembiayaan Berjaminan BPKB Motor</h3>
          <p className="text-gray-600 mb-6">
            Dapatkan pinjaman dengan proses cepat dan tenor maksimal hingga 24 bulan. <a href="#" className="text-blue-600 font-semibold">Pelajari Produk</a>
          </p>
          <a href="#" className="font-bold text-blue-600">Ajukan Sekarang &gt;</a>
          <div className="absolute -bottom-4 -right-4">
            <img src="https://bfi.co.id/themes/bfi/assets/images/home/product-motor.png" alt="BPKB Motor" className="w-28"/>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Products;