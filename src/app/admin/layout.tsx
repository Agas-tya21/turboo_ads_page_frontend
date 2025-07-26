'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AdminNavbar from './components/AdminNavbar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Periksa keberadaan token JWT
    const token = sessionStorage.getItem('jwt');

    // Jika tidak ada token dan pengguna tidak di halaman login, redirect
    if (!token && pathname !== '/admin/login') {
      router.replace('/admin/login');
    }
  }, [pathname, router]);

  // Jangan tampilkan navbar di halaman login
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <main>
        {children}
      </main>
    </div>
  );
}