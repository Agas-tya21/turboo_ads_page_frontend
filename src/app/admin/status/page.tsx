'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import apiConfig from '@/config/api';

interface Status {
  idstatus: string;
  namastatus: string;
}

const StatusAdminPage = () => {
  const [statusList, setStatusList] = useState<Status[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiConfig.baseURL}/status`);
      if (!response.ok) throw new Error('Gagal mengambil data status');
      setStatusList(await response.json());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const form = e.currentTarget;
    const statusData = {
      idstatus: (form.elements.namedItem('idstatus') as HTMLInputElement).value.toUpperCase(),
      namastatus: (form.elements.namedItem('namastatus') as HTMLInputElement).value,
    };

    try {
      const response = await fetch(`${apiConfig.baseURL}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(statusData),
      });
      if (!response.ok) throw new Error('Gagal menyimpan status');
      form.reset();
      fetchData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal menyimpan data');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Yakin ingin menghapus status ini?')) return;
    try {
      await fetch(`${apiConfig.baseURL}/status/${id}`, { method: 'DELETE' });
      fetchData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal menghapus data');
    }
  };

  return (
    <div className="container mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Kelola Status Pengajuan</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Tambah Status Baru</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="idstatus" className="block text-sm font-medium text-gray-700">ID Status (e.g., BARU, PROSES)</label>
                <input type="text" name="idstatus" className="mt-1 input-style" required />
              </div>
              <div>
                <label htmlFor="namastatus" className="block text-sm font-medium text-gray-700">Nama Status (e.g., Baru, Sedang Diproses)</label>
                <input type="text" name="namastatus" className="mt-1 input-style" required />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                {isSubmitting ? 'Menyimpan...' : 'Simpan Status'}
              </button>
            </form>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Daftar Status</h2>
            {isLoading ? <p>Loading...</p> : (
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="th-style">ID</th>
                      <th className="th-style">Nama Status</th>
                      <th className="th-style">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {statusList.map((status) => (
                      <tr key={status.idstatus}>
                        <td className="td-style font-mono">{status.idstatus}</td>
                        <td className="td-style">{status.namastatus}</td>
                        <td className="td-style">
                          <button onClick={() => handleDelete(status.idstatus)} className="text-red-600 hover:underline">Hapus</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusAdminPage;