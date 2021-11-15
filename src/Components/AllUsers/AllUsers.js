import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../Hooks/useAuth";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://secure-shore-57866.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user]);

  const handleStatus = (e) => {
    setRole(e.target.value);
  };

  // const status = "apporved";
  const handleUpdate = (id) => {
    fetch(`https://secure-shore-57866.herokuapp.com/updateRole/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ role }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          toast.success(" Updated Succesfully!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={20000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.filter(user=>user.email !=="admin@admin.com").map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              
                <td>
                  <select defaultValue={user.role} onChange={handleStatus}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              
              <td>
                <button
                  onClick={() => handleUpdate(user?._id)}
                  className="btn btn-warning"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default AllUsers;