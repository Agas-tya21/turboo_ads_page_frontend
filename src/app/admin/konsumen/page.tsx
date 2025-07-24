'use client';

import React, { useState, useEffect, useRef } from 'react';
import apiConfig from '@/config/api';

// Tipe data
interface Status {
  idstatus: string;
  namastatus: string;
}
interface Konsumen {
  idkonsumen: string;
  nik: string;
  namalengkap: string;
  notelpon: string;
  produk: { namaproduk: string } | null;
  jenisJaminan: { namajaminan: string } | null;
  status: Status | null;
}

const statusOrder: { [key: string]: number } = {
  'BARU': 1, 'PROSES': 2, 'NORESPON': 3, 'SETUJU': 4, 'TOLAK': 5,
};

const KonsumenAdminPage = () => {
  const [konsumenList, setKonsumenList] = useState<Konsumen[]>([]);
  const [statusList, setStatusList] = useState<Status[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updateMessage, setUpdateMessage] = useState<string | null>(null);
  
  // State baru untuk filter
  const [selectedStatusId, setSelectedStatusId] = useState<string>('ALL');
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = async (isInitialLoad = false) => {
    if (isInitialLoad) setIsLoading(true);
    try {
      // URL dinamis berdasarkan filter yang dipilih
      const konsumenUrl = selectedStatusId === 'ALL'
        ? `${apiConfig.baseURL}/konsumen`
        : `${apiConfig.baseURL}/konsumen/status/${selectedStatusId}`;

      const [konsumenRes, statusRes] = await Promise.all([
        fetch(konsumenUrl),
        fetch(`${apiConfig.baseURL}/status`),
      ]);

      if (!konsumenRes.ok) throw new Error('Gagal mengambil data konsumen');
      if (!statusRes.ok) throw new Error('Gagal mengambil daftar status');

      const konsumenData: Konsumen[] = await konsumenRes.json();
      const statusData = await statusRes.json();
      
      konsumenData.sort((a, b) => {
        const orderA = statusOrder[a.status?.idstatus || ''] || 99;
        const orderB = statusOrder[b.status?.idstatus || ''] || 99;
        return orderA - orderB;
      });
      
      setKonsumenList(konsumenData);
      if (isInitialLoad) {
        setStatusList(statusData);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
    } finally {
      if (isInitialLoad) setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData(true);
    
    const startPolling = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => fetchData(), 5000);
    };

    startPolling();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [selectedStatusId]); // Jalankan ulang efek ini saat filter berubah

  const handleStatusChange = async (idkonsumen: string, newStatusId: string) => {
    const konsumenToUpdate = konsumenList.find(k => k.idkonsumen === idkonsumen);
    if (!konsumenToUpdate) return;
    
    const originalList = [...konsumenList];
    const newStatus = statusList.find(s => s.idstatus === newStatusId);
    
    const updatedList = konsumenList.map(k =>
      k.idkonsumen === idkonsumen ? { ...k, status: newStatus || k.status } : k
    );
    updatedList.sort((a, b) => {
        const orderA = statusOrder[a.status?.idstatus || ''] || 99;
        const orderB = statusOrder[b.status?.idstatus || ''] || 99;
        return orderA - orderB;
    });
    setKonsumenList(updatedList);

    try {
      const response = await fetch(`${apiConfig.baseURL}/konsumen/${idkonsumen}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...konsumenToUpdate, status: { idstatus: newStatusId } }),
      });

      if (!response.ok) throw new Error('Gagal memperbarui status.');
      
      setUpdateMessage(`Status untuk ${konsumenToUpdate.namalengkap} berhasil diperbarui.`);
      setTimeout(() => setUpdateMessage(null), 3000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
      setKonsumenList(originalList);
    }
  };

  return (
    <div className="container mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Data Pengajuan Konsumen</h1>

      {error && <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}
      {updateMessage && <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-6">{updateMessage}</div>}

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Daftar Pengajuan</h2>
          <div>
            <label htmlFor="statusFilter" className="text-sm font-medium text-gray-700 mr-2">Filter Status:</label>
            <select
              id="statusFilter"
              value={selectedStatusId}
              onChange={(e) => setSelectedStatusId(e.target.value)}
              className="input-style p-1 text-sm"
            >
              <option value="ALL">Semua Status</option>
              {statusList.map(status => (
                <option key={status.idstatus} value={status.idstatus}>
                  {status.namastatus}
                </option>
              ))}
            </select>
          </div>
        </div>

        {isLoading ? (
          <p>Memuat data...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="th-style">ID Pengajuan</th>
                  <th className="th-style">Nama Lengkap</th>
                  <th className="th-style">NIK</th>
                  <th className="th-style">No. Telepon</th>
                  <th className="th-style">Status</th>
                  <th className="th-style">Produk</th>
                  <th className="th-style">Jenis Jaminan</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {konsumenList.map((konsumen) => (
                  <tr key={konsumen.idkonsumen}>
                    <td className="td-style font-mono text-xs">{konsumen.idkonsumen}</td>
                    <td className="td-style">{konsumen.namalengkap}</td>
                    <td className="td-style">{konsumen.nik}</td>
                    <td className="td-style">{konsumen.notelpon}</td>
                    <td className="td-style">
                      <select
                        value={konsumen.status?.idstatus || ''}
                        onChange={(e) => handleStatusChange(konsumen.idkonsumen, e.target.value)}
                        className="input-style p-1 text-xs"
                      >
                        {statusList.map((status) => (
                          <option key={status.idstatus} value={status.idstatus}>
                            {status.namastatus}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="td-style">{konsumen.produk?.namaproduk || '-'}</td>
                    <td className="td-style">{konsumen.jenisJaminan?.namajaminan || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default KonsumenAdminPage;