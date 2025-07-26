// src/utils/apiClient.ts
import apiConfig from '@/config/api';

const fetchWithAuth = async (url: string, options: RequestInit = {}): Promise<Response> => {
    const token = sessionStorage.getItem('jwt');

    const headers = new Headers(options.headers || {});

    // Hanya tambahkan Authorization header jika token ada
    if (token) {
        headers.append('Authorization', `Bearer ${token}`);
    }

    // Jangan set Content-Type jika body adalah FormData, biarkan browser menentukannya
    if (!(options.body instanceof FormData)) {
        headers.append('Content-Type', 'application/json');
    }

    const response = await fetch(url, {
        ...options,
        headers,
    });

    // Jika tidak sah, hapus token dan redirect ke login
    if (response.status === 401 || response.status === 403) {
        sessionStorage.removeItem('jwt');
        sessionStorage.removeItem('usn');
        // Pastikan hanya berjalan di client-side
        if (typeof window !== 'undefined') {
            window.location.href = '/admin/login';
        }
        throw new Error('Unauthorized');
    }

    return response;
};

export default fetchWithAuth;