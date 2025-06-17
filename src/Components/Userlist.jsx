import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from './Redux/user';
import Nax from './Nax';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
<Nax/>
  
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">All Users</h2>
      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {users?.length > 0 ? (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user._id} className="border p-4 rounded shadow">
              <p><strong>Name:</strong> {user.firstname} {user.lastname}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Contact:</strong> {user.contactnumber}</p>
              <p><strong>Address:</strong> {user.address}</p>
              <p><strong>Country:</strong> {user.country}</p>
              <p><strong>Status:</strong> {user.status}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No users found.</p>
      )}
    </div>
      </div>
  );
};

export default UsersList;
