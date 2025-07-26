'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import apiConfig from '@/config/api';

const AdminLoginPage = () => {
  const [usn, setUsn] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Menggunakan endpoint autentikasi baru
      const response = await fetch(`${apiConfig.baseURL}/authenticate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: usn, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Simpan token JWT yang diterima
        sessionStorage.setItem('jwt', data.jwt);
        sessionStorage.setItem('usn', usn); // Simpan username untuk tampilan
        router.push('/admin');
      } else {
        setError('Username atau password salah.');
      }
    } catch (err) {
      setError('Gagal terhubung ke server. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="usn" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="usn"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              className="mt-1 input-style"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 input-style"
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div>
            <button type="submit" disabled={isSubmitting} className="w-full btn-primary">
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;