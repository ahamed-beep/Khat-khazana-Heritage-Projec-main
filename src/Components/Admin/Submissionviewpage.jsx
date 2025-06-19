import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSingleSubmissionById, updateSubmissionById } from "../Redux/submission";

const SubmissionView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singlesubmission, loading, error } = useSelector((state) => state.submmission);

  const [formData, setFormData] = useState({
    title: "",
    story: "",
    status: "",
    
  });

  useEffect(() => {
    dispatch(getSingleSubmissionById(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (singlesubmission) {
      setFormData({
        title: singlesubmission.title || "",
        story: singlesubmission.story || "",
        status: singlesubmission.status || "",
      });
    }
  }, [singlesubmission]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    dispatch(updateSubmissionById({ id, updatedData: formData }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!singlesubmission) return <p>No submission found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded space-y-6">
      <h1 className="text-xl font-semibold mb-2">View & Edit Submission</h1>

      {/* View Info */}
      <div className="space-y-1 text-sm">
        <p><strong>Name:</strong> {singlesubmission.name}</p>
        <p><strong>Email:</strong> {singlesubmission.email}</p>
        <p><strong>Category:</strong> {singlesubmission.category}</p>
      </div>

      {/* Edit Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Story</label>
          <textarea
            name="story"
            rows={4}
            value={formData.story}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <button
          onClick={handleUpdate}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default SubmissionView;
