import Link from 'next/link';

export default function ChoosePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-10 bg-white rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Pilih Halaman
        </h1>
        <div className="flex justify-center gap-6">
          <Link 
            href="/home"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Buka Halaman Utama
          </Link>
          <Link 
            href="/admin"
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors"
          >
            Buka Halaman Admin
          </Link>
        </div>
      </div>
    </div>
  );
}