import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Fetch staff statuses from API
    setLoading(false);
  }, []);

  const handleStatusUpdate = () => {
    navigate('/status');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Staff Status Dashboard</h1>
          <button
            onClick={handleStatusUpdate}
            className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100"
          >
            Update Status
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {staffList.length === 0 ? (
              <div className="col-span-full text-center py-8 text-gray-500">
                No staff data available
              </div>
            ) : (
              staffList.map((staff) => (
                <div key={staff.id} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-800">{staff.name}</h3>
                  <p className="text-gray-600 text-sm">{staff.department}</p>
                  <div className="mt-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                      staff.status === 'available' ? 'bg-green-500' :
                      staff.status === 'on_break' ? 'bg-yellow-500' :
                      staff.status === 'assigned_task' ? 'bg-blue-500' :
                      'bg-gray-500'
                    }`}>
                      {staff.status}
                    </span>
                  </div>
                  {staff.notes && <p className="text-gray-600 text-sm mt-2">{staff.notes}</p>}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
