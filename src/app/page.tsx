import Image from "next/image";

// Komponen Ikon SVG untuk kemudahan penggunaan
const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width="16"
    height="16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const AjukanIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
);

const PromoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-8.25a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 11.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008c0-.414.336-.75.75-.75h.008zM12 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 2.25h16.5a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 6.75V4.5A2.25 2.25 0 013.75 2.25z" />
    </svg>
);

const BfiMobileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 19.5h16.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0020.25 4.5H3.75A2.25 2.25 0 001.5 6.75v10.5A2.25 2.25 0 003.75 19.5z" />
    </svg>
);

const LiveChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.056 3 12c0 2.233.91 4.275 2.39 5.81.332.33.52.776.52 1.238v.864a.75.75 0 00.75.75h.396a4.503 4.503 0 012.18-1.556c.338-.13.68-.216 1.03-.28A7.5 7.5 0 0112 20.25z" />
    </svg>
);


export default function Home() {
  const BFI_BLUE = "#FE0000";
  const BFI_ORANGE = "#F7941D";

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      {/* Top Bar */}
      <div className="bg-white text-gray-600 text-sm py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600">Beranda</a>
            <a href="#" className="hover:text-blue-600">Informasi Perusahaan</a>
            <a href="#" className="hover:text-blue-600">Karir</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="font-semibold text-gray-800">EN</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="font-semibold text-blue-600">ID</a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <header style={{ backgroundColor: BFI_BLUE }} className="shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center h-20 text-white">
          <div className="flex-shrink-0">
             <img src="/logos/turboologo.png" alt="BFI Finance Logo" className="h-16" />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-base">
            <a href="#" className="flex items-center gap-1 hover:opacity-80">
              Produk <ChevronDownIcon />
            </a>
            <a href="#" className="flex items-center gap-1 hover:opacity-80">
              Layanan <ChevronDownIcon />
            </a>
            <a href="#" className="hover:opacity-80">Promo</a>
            <a href="#" className="hover:opacity-80">Tips Keuangan</a>
          </nav>
          <div>
            <a 
              href="#" 
              className="border-2 border-white rounded-full px-8 py-2 text-base font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Masuk
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Right Image Content */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-[350px] h-[450px]">
              <img
                src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                alt="Wanita tersenyum menggunakan layanan BFI Finance di ponsel"
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
              BFI Finance berizin dan diawasi oleh Otoritas Jasa Keuangan
            </p>
          </div>

        </div>
      </main>

      {/* Company Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="pr-8">
                    <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                        BFI Finance adalah Perusahaan Pembiayaan Tepercaya di Indonesia
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div>
                        <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>Sejak 1982</h3>
                        <p className="text-gray-600 mt-2">Lebih dari 40 tahun hadir dan melayani kebutuhan keuangan masyarakat.</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>&gt;400.000</h3>
                        <p className="text-gray-600 mt-2">Konsumen aktif telah memilih BFI Finance sebagai mitra keuangannya.</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>&gt;200 Cabang</h3>
                        <p className="text-gray-600 mt-2">Pelayanan yang tersebar hampir seluruh Indonesia.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Products Section */}
      {/* PERUBAHAN 2: Menambahkan id="produk-kami" */}
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

      {/* Floating Action Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-4 bg-white shadow-2xl rounded-full px-6 py-3" style={{ color: BFI_BLUE }}>
              <a href="#" className="flex flex-col items-center text-center text-xs font-medium hover:text-orange-500">
                  <AjukanIcon />
                  <span>Ajukan</span>
              </a>
              <a href="#" className="flex flex-col items-center text-center text-xs font-medium hover:text-orange-500">
                  <PromoIcon />
                  <span>Promo</span>
              </a>
              <a href="#" className="flex flex-col items-center text-center text-xs font-medium hover:text-orange-500">
                  <BfiMobileIcon />
                  <span>BFI Mobile</span>
              </a>
              <a href="#" className="flex flex-col items-center text-center text-xs font-medium hover:text-orange-500">
                  <LiveChatIcon />
                  <span>Live Chat</span>
              </a>
          </div>
      </div>
    </div>
  );
}