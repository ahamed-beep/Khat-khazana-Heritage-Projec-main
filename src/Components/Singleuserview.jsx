import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleUser, updateUserStatus } from './Redux/user';

const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleUser, loading, error } = useSelector((state) => state.user);

  const [status, setStatus] = useState("");

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (singleUser) {
      setStatus(singleUser.status);
    }
  }, [singleUser]);

  const handleUpdate = () => {
    if (!status) return;
    dispatch(updateUserStatus({ id, status }));
  };

  if (loading && !singleUser) return <p className="p-4">Loading...</p>;
  if (!singleUser) return <p className="p-4">User not found</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Edit User Status</h2>
      <p><strong>Name:</strong> {singleUser.firstname} {singleUser.lastname}</p>
      <p><strong>Email:</strong> {singleUser.email}</p>
      <p><strong>Current Status:</strong> <span className="font-semibold">{singleUser.status}</span></p>

      <div className="mt-4">
        <label className="block font-medium mb-1">Update Status</label>
      <select
  value={status || ""} // if null then show default
  onChange={(e) => setStatus(e.target.value)}
>
  <option value="">-- Select Status --</option>
  <option value="approved">Approved</option>
  <option value="rejected">Rejected</option>
</select>

      </div>

      <button
        onClick={handleUpdate}
        disabled={loading}
        className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? 'Updating...' : 'Update Status'}
      </button>

      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
    </div>
  );
};

export default EditUser;
