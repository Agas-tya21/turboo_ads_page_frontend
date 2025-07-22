import React from 'react';

const BFI_BLUE = "#FE0000";
const BFI_ORANGE = "#F7941D";

const Hero = () => (
  <main className="container mx-auto px-6 py-20">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      
      {/* Right Image Content */}
      <div className="relative flex justify-center items-center">
        <div className="relative w-[350px] h-[450px]">
          <img
            src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            alt="Wanita tersenyum menggunakan layanan Turboo di ponsel"
            className="rounded-xl z-10 w-full h-full object-cover"
          />
          <div className="absolute -top-8 -right-8 bg-white p-3 rounded-full shadow-lg z-20">
            <img src="https://www.svgrepo.com/show/497123/shop.svg" alt="Ikon Toko" width="32" height="32" />
          </div>
          <div className="absolute -top-4 left-4 bg-white p-3 rounded-full shadow-lg z-20">
            <img src="https://www.svgrepo.com/show/488390/truck.svg" alt="Ikon Truk" width="32" height="32" />
          </div>
           <div className="absolute bottom-12 -left-10 bg-white p-3 rounded-full shadow-lg z-20">
             <img src="https://www.svgrepo.com/show/522439/home.svg" alt="Ikon Rumah" width="32" height="32" />
          </div>
          <div className="absolute bottom-20 -right-12 bg-white p-3 rounded-full shadow-lg z-20">
            <img src="https://www.svgrepo.com/show/494942/graduation-cap.svg" alt="Ikon Topi Wisuda" width="32" height="32" />
          </div>
        </div>
      </div>
      
      {/* Left Content */}
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-extrabold leading-tight" style={{ color: BFI_BLUE }}>
          Dengan Turboo
          <span className="text-4xl block text-gray-800 font-bold">Semua Jalan Menjadi Mudah</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Mulai dari pendidikan, kesehatan, hingga modal usaha. Turboo siap membantu Anda.
        </p>
        <div className="mt-4">
          {/* PERUBAHAN 1: Mengubah href ke #produk-kami */}
          <a 
            href="#produk-kami"
            style={{ backgroundColor: BFI_ORANGE }} 
            className="text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity text-lg inline-block"
          >
            Lihat Produk Kami &gt;
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Turboo berizin dan diawasi oleh Otoritas Jasa Keuangan
        </p>
      </div>

    </div>
  </main>
);

export default Hero;