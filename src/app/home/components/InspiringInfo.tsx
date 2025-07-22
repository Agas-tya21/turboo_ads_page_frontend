import React from 'react';

const InspiringInfo = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-semibold text-blue-800 text-center mb-8">Promo dan Informasi Inspiratif untuk Kehidupan Finansial Anda</h2>

      {/* Satu card besar di atas */}
      <div className="mb-8">
        <div className="bg-blue-100 rounded-2xl shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-2">DENGAN KENDARAAN RAMAH LINGKUNGAN</h3>
              <p className="text-blue-600 font-semibold mb-4">Jaminan BPKB MOBIL Listrik UVP</p>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <span className="text-3xl font-bold text-orange-600">36</span>
                  <span className="text-sm text-gray-600">Tenor Maksimal</span>
                </div>
                <div>
                  <span className="text-3xl font-bold text-green-600">0,76%</span>
                  <span className="text-sm text-gray-600">Bunga Flat Mulai dari</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">BFI Dana Express Mobil - Ubah Mobil Listrik jadi... Butuh dana cepat untuk kebutuhan harianmu atau...</p>
              <p className="text-gray-500 text-xs">October 5, 2023</p>
            </div>
            <div className="relative h-64 md:h-full">
              {/* Ganti dengan gambar kendaraan listrik */}
              <img src="https://via.placeholder.com/600x400.png?text=Kendaraan+Listrik" alt="Kendaraan Listrik" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Dua card di bawahnya */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            {/* Ganti dengan gambar terkait BI Checking */}
            <img src="https://via.placeholder.com/600x400.png?text=BI+Checking" alt="BI Checking" className="w-full h-32 object-cover mb-4 rounded-md" />
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Apa itu BI Checking? Ini...</h4>
            <p className="text-gray-700 text-sm mb-2">Apa itu BI Checking? Itu adalah informasi riwayat kredit seseorang...</p>
            <p className="text-gray-500 text-xs">Agustus 18, 2023</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            {/* Ganti dengan gambar terkait Aset */}
            <img src="https://via.placeholder.com/600x400.png?text=Aset" alt="Aset" className="w-full h-32 object-cover mb-4 rounded-md" />
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Aset Adalah: Pengertian...</h4>
            <p className="text-gray-700 text-sm mb-2">Aset adalah sumber daya yang dikuasai dan dimiliki oleh suatu...</p>
            <p className="text-gray-500 text-xs">Juli 11, 2023</p>
          </div>
        </div>
      </div>

      {/* Tiga card di bawahnya */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            {/* Ganti dengan gambar card 3 */}
            <img src="https://via.placeholder.com/600x400.png?text=Info+3" alt="Info 3" className="w-full h-32 object-cover mb-4 rounded-md" />
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Judul Informasi 3</h4>
            <p className="text-gray-700 text-sm mb-2">Deskripsi singkat informasi 3...</p>
            <p className="text-gray-500 text-xs">Tanggal</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            {/* Ganti dengan gambar card 4 */}
            <img src="https://via.placeholder.com/600x400.png?text=Info+4" alt="Info 4" className="w-full h-32 object-cover mb-4 rounded-md" />
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Judul Informasi 4</h4>
            <p className="text-gray-700 text-sm mb-2">Deskripsi singkat informasi 4...</p>
            <p className="text-gray-500 text-xs">Tanggal</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            {/* Ganti dengan gambar card 5 */}
            <img src="https://via.placeholder.com/600x400.png?text=Info+5" alt="Info 5" className="w-full h-32 object-cover mb-4 rounded-md" />
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Judul Informasi 5</h4>
            <p className="text-gray-700 text-sm mb-2">Deskripsi singkat informasi 5...</p>
            <p className="text-gray-500 text-xs">Tanggal</p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default InspiringInfo;