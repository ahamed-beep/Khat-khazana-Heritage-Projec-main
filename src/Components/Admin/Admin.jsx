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
import { getAllUsers } from "../Redux/user";
import Nax from "../Nax";

const currentAdmin = {
  isLoggedIn: true,
  avatar: "/admin-avatar.jpg",
};

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading, error } = useSelector((state) => state.user);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const getStatusColor = (status) => {
    if (status === "approved") return "text-green-500";
    if (status === "rejected") return "text-red-500";
    return "text-yellow-500";
  };

  const filteredUsers = users?.filter((user) => {
    const fullName = `${user.firstname} ${user.lastname}`;
    const matchStatus = filter === "all" || user.status === filter;
    const matchQuery =
      fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchQuery;
  });

  return (
    <div>  
      <Nax/>
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
      <main className="flex-1 flex flex-col md:ml-64 w-full">
        {/* Header */}
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

        {/* Stats Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
          <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-xl transition">
            <p className="text-gray-500 font-medium">Total Users</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600">{users?.length || 0}</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-xl transition">
            <p className="text-gray-500 font-medium">Approved</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-500">
              {users?.filter((u) => u.status === "approved").length}
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-xl transition">
            <p className="text-gray-500 font-medium">Pending</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500">
              {users?.filter((u) => u.status === "pending").length}
            </h2>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 pb-4">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {["all", "pending", "approved", "rejected"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  filter === type
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search user..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </section>

        {/* User Table */}
        <section className="px-4 sm:px-6 pb-10 overflow-x-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-4 sm:px-6 py-3 font-semibold">Name</th>
                  <th className="px-4 sm:px-6 py-3 font-semibold">Email</th>
                  <th className="px-4 sm:px-6 py-3 font-semibold">Status</th>
                  <th className="px-4 sm:px-6 py-3 font-semibold">Edit</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr>
                    <td colSpan="4" className="text-center py-4">Loading...</td>
                  </tr>
                )}
                {error && (
                  <tr>
                    <td colSpan="4" className="text-center text-red-500 py-4">{error}</td>
                  </tr>
                )}
                {filteredUsers?.length > 0 ? (
                  filteredUsers.map((user, index) => (
                    <tr
                      key={user._id}
                      className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-indigo-50 transition`}
                    >
                      <td className="px-4 sm:px-6 py-4">{user.firstname} {user.lastname}</td>
                      <td className="px-4 sm:px-6 py-4">{user.email}</td>
                      <td className={`px-4 sm:px-6 py-4 font-semibold ${getStatusColor(user.status)}`}>
                        {user.status}
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <button
                          onClick={() => navigate(`/admin/edit-user/${user._id}`)}
                          className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-full hover:bg-indigo-700 transition"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  !loading && (
                    <tr>
                      <td colSpan="4" className="text-center py-4 text-gray-500">
                        No users found.
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}
