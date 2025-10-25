'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
  status: 'NEW' | 'IN_PROGRESS' | 'COMPLETED' | 'REJECTED';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface Stats {
  total: number;
  new: number;
  inProgress: number;
  completed: number;
  rejected: number;
}

export default function AdminDashboard() {
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<ContactRequest | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin');
      return;
    }
    fetchData();
  }, [router]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      
      // Fetch requests
      const requestsResponse = await fetch('http://localhost:3001/contact/admin/requests', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      // Fetch stats
      const statsResponse = await fetch('http://localhost:3001/contact/admin/stats', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (requestsResponse.ok && statsResponse.ok) {
        const requestsData = await requestsResponse.json();
        const statsData = await statsResponse.json();
        setRequests(requestsData);
        setStats(statsData);
      } else {
        // Token invalid, redirect to login
        localStorage.removeItem('admin_token');
        router.push('/admin');
      }
    } catch (error) {
      console.error('Eroare la încărcarea datelor:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(`http://localhost:3001/contact/admin/requests/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchData(); // Reîncarcă datele
      }
    } catch (error) {
      console.error('Eroare la actualizarea status-ului:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/admin');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'NEW': return 'bg-yellow-500';
      case 'IN_PROGRESS': return 'bg-blue-500';
      case 'COMPLETED': return 'bg-green-500';
      case 'REJECTED': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'NEW': return 'Nou';
      case 'IN_PROGRESS': return 'În progres';
      case 'COMPLETED': return 'Finalizat';
      case 'REJECTED': return 'Respins';
      default: return status;
    }
  };

  const getStatusBadge = (status: string) => {
    const icons = {
      NEW: '🔔',
      IN_PROGRESS: '⚙️',
      COMPLETED: '✅',
      REJECTED: '❌',
    };
    return icons[status as keyof typeof icons] || '📋';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-white text-xl">Se încarcă...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Dashboard Admin</h1>
            <p className="text-gray-400">Gestionează cererile de contact</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/30 transition-all"
          >
            Deconectare
          </motion.button>
        </div>

        {/* Statistici rapide */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-slate-700/50"
            >
              <div className="text-gray-400 text-sm mb-1">Total</div>
              <div className="text-3xl font-bold text-white">{stats.total}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-yellow-500/20"
            >
              <div className="text-yellow-400 text-sm mb-1">🔔 Cereri noi</div>
              <div className="text-3xl font-bold text-yellow-400">{stats.new}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-blue-500/20"
            >
              <div className="text-blue-400 text-sm mb-1">⚙️ În progres</div>
              <div className="text-3xl font-bold text-blue-400">{stats.inProgress}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-green-500/20"
            >
              <div className="text-green-400 text-sm mb-1">✅ Finalizate</div>
              <div className="text-3xl font-bold text-green-400">{stats.completed}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-red-500/20"
            >
              <div className="text-red-400 text-sm mb-1">❌ Respinse</div>
              <div className="text-3xl font-bold text-red-400">{stats.rejected}</div>
            </motion.div>
          </div>
        )}

        {/* Tabel cereri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold">Nume</th>
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold">Email</th>
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold">Serviciu</th>
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold">Data</th>
                  <th className="px-6 py-4 text-left text-gray-300 font-semibold">Acțiuni</th>
                </tr>
              </thead>
              <tbody>
                {requests.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                      Nu există cereri de contact
                    </td>
                  </tr>
                ) : (
                  requests.map((request) => (
                    <tr key={request.id} className="border-t border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <select
                          value={request.status}
                          onChange={(e) => updateStatus(request.id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getStatusColor(request.status)} border-none outline-none cursor-pointer`}
                        >
                          <option value="NEW">🔔 Nou</option>
                          <option value="IN_PROGRESS">⚙️ În progres</option>
                          <option value="COMPLETED">✅ Finalizat</option>
                          <option value="REJECTED">❌ Respins</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-white font-medium">{request.name}</div>
                        {request.company && (
                          <div className="text-gray-400 text-sm">{request.company}</div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-300">{request.email}</div>
                        {request.phone && (
                          <div className="text-gray-400 text-sm">{request.phone}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-300">{request.service}</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">
                        {new Date(request.createdAt).toLocaleDateString('ro-RO', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedRequest(request)}
                          className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                        >
                          Vezi detalii
                        </motion.button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Modal detalii */}
      {selectedRequest && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedRequest(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 rounded-2xl p-8 max-w-2xl w-full border border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Detalii Cerere</h2>
              <button
                onClick={() => setSelectedRequest(null)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm mb-1">Nume</div>
                <div className="text-white font-medium">{selectedRequest.name}</div>
              </div>

              {selectedRequest.company && (
                <div>
                  <div className="text-gray-400 text-sm mb-1">Companie</div>
                  <div className="text-white">{selectedRequest.company}</div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-400 text-sm mb-1">Email</div>
                  <div className="text-white">{selectedRequest.email}</div>
                </div>
                {selectedRequest.phone && (
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Telefon</div>
                    <div className="text-white">{selectedRequest.phone}</div>
                  </div>
                )}
              </div>

              <div>
                <div className="text-gray-400 text-sm mb-1">Serviciu</div>
                <div className="text-white">{selectedRequest.service}</div>
              </div>

              <div>
                <div className="text-gray-400 text-sm mb-1">Mesaj</div>
                <div className="text-white bg-slate-700/50 rounded-lg p-4">
                  {selectedRequest.message}
                </div>
              </div>

              <div>
                <div className="text-gray-400 text-sm mb-1">Status</div>
                <div className={`inline-block px-4 py-2 rounded-full text-white font-medium ${getStatusColor(selectedRequest.status)}`}>
                  {getStatusBadge(selectedRequest.status)} {getStatusText(selectedRequest.status)}
                </div>
              </div>

              <div className="text-gray-400 text-sm">
                Cerere trimisă la: {new Date(selectedRequest.createdAt).toLocaleString('ro-RO')}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

