import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const STATUS_OPTIONS = [
  { value: 'available', label: 'Available' },
  { value: 'on_break', label: 'On Break' },
  { value: 'assigned_task', label: 'Assigned Task' },
  { value: 'sick_leave', label: 'Sick Leave' },
  { value: 'training', label: 'Training' },
  { value: 'other', label: 'Other' }
];

function StatusUpdatePage() {
  const [status, setStatus] = useState('available');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: Submit status update to API
      setMessage('Status updated successfully!');
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (error) {
      setMessage('Failed to update status. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 text-white shadow">
        <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Update Status</h1>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100"
          >
            Back
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8">
          {message && (
            <div className={`p-4 rounded mb-6 ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {STATUS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Notes (Optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                rows="4"
                placeholder="Add any additional notes about your status..."
              />
            </div>
            
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
              >
                {loading ? 'Updating...' : 'Update Status'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StatusUpdatePage;
