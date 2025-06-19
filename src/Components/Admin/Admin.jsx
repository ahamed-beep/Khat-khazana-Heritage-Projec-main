import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  Users,
  LayoutDashboard,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import Nax from "../Nax";
import { getAllUsers } from "../Redux/user";
import { getsubmissionsdata } from "../Redux/submission"; // <- import your thunk

const currentAdmin = {
  isLoggedIn: true,
  avatar: "/admin-avatar.jpg",
};

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.user);
  const { submission, loading, error } = useSelector((state) => state.submmission); // <- use fetched submissions

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getsubmissionsdata()); // <- Fetch submissions on mount
  }, [dispatch]);

  const getStatusColor = (status) => {
    if (status === "Approved") return "text-green-500";
    if (status === "Rejected") return "text-red-500";
    return "text-yellow-500";
  };

  const filtered = submission?.filter((item) => {
    const matchesStatus = selectedStatus === "All" || item.status === selectedStatus;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.name?.toLowerCase().includes(query) ||
      item.email?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query);
    return matchesStatus && matchesSearch;
  }) || [];

  return (
    <div>
      <Nax />
      <div className="flex min-h-screen text-gray-800 bg-gradient-to-tr from-white to-gray-100 mt-22">
        {/* Sidebar */}
        <aside
          className={`bg-white shadow-2xl w-64 fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-5 flex justify-between items-center border-b">
            <h2 className="text-xl font-bold text-indigo-600">Khat Khazana</h2>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden">
              <X className="text-gray-600" />
            </button>
          </div>
          <nav className="mt-6 space-y-3 px-4">
            <a href="#" className="flex items-center gap-3 p-2 text-sm font-medium rounded-lg hover:bg-indigo-50 text-indigo-700">
              <LayoutDashboard className="w-5 h-5" /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 p-2 text-sm font-medium rounded-lg hover:bg-indigo-50 text-indigo-700">
              <Users className="w-5 h-5" /> Users
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex flex-col w-full">
          <header className="flex justify-between items-center px-4 sm:px-6 py-4 bg-white shadow sticky top-0 z-10">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
              <Menu className="text-indigo-600" />
            </button>
            <h1 className="text-lg sm:text-xl font-semibold text-indigo-700">Admin Panel</h1>
            <div className="flex items-center gap-4">
              <button>
                <LogOut className="text-gray-500 w-5 h-5 hover:text-red-500" />
              </button>
              <img
                src={currentAdmin.avatar}
                alt="Admin Avatar"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-indigo-300 shadow"
              />
            </div>
          </header>

          {/* Stats Summary */}
          <section className="flex justify-center gap-4 sm:gap-6 p-4 sm:p-6 overflow-x-auto">
            <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-xl transition w-64 min-w-[16rem]">
              <p className="text-gray-500 font-medium">Total Submissions</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600">
                {submission.length}
              </h2>
            </div>
            {["Approved", "Pending", "Rejected"].map((status) => (
              <div
                key={status}
                className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-xl transition w-64 min-w-[16rem]"
              >
                <p className="text-gray-500 font-medium">{status}</p>
                <h2 className={`text-2xl sm:text-3xl font-bold ${getStatusColor(status)}`}>
                  {submission.filter((s) => s.status === status).length}
                </h2>
              </div>
            ))}
          </section>

          {/* Filters & Search */}
          <section className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-4 sm:px-6 pb-4">
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {["All", "Pending", "Approved", "Rejected"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedStatus(type)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                    selectedStatus === type
                      ? "bg-indigo-600 text-white"
                      : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
              <input
                type="text"
                placeholder="Search by Category, Email, Title"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
              />
            </div>
          </section>

          {/* Filtered Submission Cards */}
          {loading && (
            <p className="text-center text-gray-600 py-10">Loading submissions...</p>
          )}
          {error && (
            <p className="text-center text-red-600 py-10">Error: {error}</p>
          )}
          {filtered.map((entry) => (
            <section key={entry._id} className="px-4 sm:px-6 pb-10">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-3xl mx-auto p-6 space-y-6">
                <div className="flex justify-center">
                  <img src={entry.image} alt="Submission" className="w-40 h-40 object-cover rounded shadow" />
                </div>
               <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <dt className="font-medium text-gray-600">Title</dt>
                  <dd className="text-gray-800">{entry.title}</dd>
                  <dt className="font-medium text-gray-600">Candidate Name</dt>
                  <dd className="text-gray-800">{entry.name}</dd>
                  <dt className="font-medium text-gray-600">Email</dt>
                  <dd className="text-gray-800">{entry.email}</dd>
                  <dt className="font-medium text-gray-600">Location</dt>
                  <dd className="text-gray-800">{entry.location}</dd>
                  <dt className="font-medium text-gray-600">Phone</dt>
                  <dd className="text-gray-800">{entry.phone}</dd>
                  <dt className="font-medium text-gray-600">Alternate Phone</dt>
                  <dd className="text-gray-800">{entry.phone2 || "N/A"}</dd>
                  <dt className="font-medium text-gray-600">Social Media</dt>
                  <dd className="text-gray-800">{entry.socialmedia || "N/A"}</dd>
                  <dt className="font-medium text-gray-600">Guardian/Owner</dt>
                  <dd className="text-gray-800">{entry.guadianowner}</dd>
                  <dt className="font-medium text-gray-600">Image before 2000?</dt>
                  <dd className="text-gray-800">{entry.imagebefore}</dd>
                   <dt className="font-medium text-gray-600">Image added</dt>
                  <dd className="text-gray-800">{entry.imageadded}</dd>
                  <dt className="font-medium text-gray-600">Attachment Type</dt>
                  <dd className="text-gray-800">{entry.attachment}</dd>
                  <dt className="font-medium text-gray-600">Other Specify</dt>
                  <dd className="text-gray-800">{entry.otherspecify || "N/A"}</dd>
                  <dt className="font-medium text-gray-600">Date</dt>
                  <dd className="text-gray-800">{entry.dateimage}</dd>
                  <dt className="font-medium text-gray-600">Place</dt>
                  <dd className="text-gray-800">{entry.placeimage}</dd>
                  <dt className="font-medium text-gray-600">Photograph Caption</dt>
                  <dd className="text-gray-800">{entry.photographcaptain}</dd>
                  <dt className="font-medium text-gray-600">Category</dt>
                  <dd className="text-gray-800">{entry.category}</dd>
                  <dt className="font-medium text-gray-600">Status</dt>
                  <dd className={`font-semibold ${getStatusColor(entry.status)}`}>{entry.status}</dd>
                </dl>
                  <div>
                  <h3 className="font-semibold text-indigo-600 text-base mb-1">Narrative</h3>
                  <p className="text-gray-700 text-sm">{entry.narrative}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-600 text-base mb-1">Story</h3>
                  <p className="text-gray-700 text-sm">{entry.story}</p>
                </div>
<button onClick={() => navigate(`/submission/view/${entry._id}`)}>View / Edit</button>

              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
