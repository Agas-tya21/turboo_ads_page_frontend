import React from 'react';

const HowToApply = () => (
  <section className="bg-blue-50 py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-2">Langkah-langkah Mudah Pengajuan Pinjaman</h2>
      <p className="text-lg text-gray-600 mb-16">Proses Cepat dan Sederhana!</p>
      
      <div className="grid md:grid-cols-4 gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 p-6 rounded-2xl mb-6 flex justify-center items-center w-28 h-28">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 4h6m-6 4h6" />
            </svg>
          </div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">1. Isi Form Online</h3>
          <p className="text-gray-600 text-sm max-w-[200px]">Siapkan data jaminan aset dan data diri Anda</p>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col items-center">
           <div className="bg-blue-100 p-6 rounded-2xl mb-6 flex justify-center items-center w-28 h-28">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">2. Kami akan menghubungi Anda</h3>
          <p className="text-gray-600 text-sm max-w-[200px]">Anda akan dihubungi Call Center kami untuk konsultasi pinjaman dan tenor</p>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col items-center">
           <div className="bg-blue-100 p-6 rounded-2xl mb-6 flex justify-center items-center w-28 h-28">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">3. Survei dan Validasi Aset</h3>
          <p className="text-gray-600 text-sm max-w-[200px]">Kami akan lakukan survei dan cek aset untuk proses selanjutnya</p>
        </div>
        
        {/* Step 4 */}
        <div className="flex flex-col items-center">
           <div className="bg-blue-100 p-6 rounded-2xl mb-6 flex justify-center items-center w-28 h-28">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
            </svg>
          </div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">4. Pencairan Dana</h3>
          <p className="text-gray-600 text-sm max-w-[200px]">Setelah survei dan disetujui, dana akan segera cair ke rekening Anda</p>
        </div>
      </div>
    </div>
  </section>
);

export default HowToApply;