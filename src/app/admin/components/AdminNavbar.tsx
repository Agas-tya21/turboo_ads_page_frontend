'use client'; 

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation'; 

const AdminNavbar = () => {
  const router = useRouter();

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    // Hapus semua data sesi terkait admin
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('usn');
    router.push('/admin/login');
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/admin" className="text-xl font-bold hover:text-gray-300">
              Admin Panel
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/admin/cabang" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Kelola Cabang
            </Link>
            <Link href="/admin/produk" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Kelola Produk
            </Link>
            <Link href="/admin/jenisjaminan" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Jenis Jaminan
            </Link>
            <Link href="/admin/status" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Kelola Status
            </Link>
            <Link href="/admin/promo" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Kelola Promo
            </Link>
            <Link href="/admin/konsumen" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
              Data Konsumen
            </Link>
            
            <button 
              onClick={handleLogout} 
              className="px-3 py-2 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700"
            >
              Logout
            </button>
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium border border-gray-600 hover:bg-gray-700">
              &larr; Kembali ke Situs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;