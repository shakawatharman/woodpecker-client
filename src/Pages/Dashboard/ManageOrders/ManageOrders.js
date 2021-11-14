import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../../Hooks/useAuth";

function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://secure-shore-57866.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  // const status = "apporved";
  const handleUpdate = (id) => {
    fetch(`https://secure-shore-57866.herokuapp.com/updateStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
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
            <th>Name</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>{order.product}</td>
              <td>{order.price}</td>
              
                <td>
                  <select defaultValue={order.status} onChange={handleStatus}>
                    <option value="Pending">Pending</option>
                    <option value="Apporved">Apporved</option>
                  </select>
                </td>
              
              <td>
                <button
                  onClick={() => handleUpdate(order?._id)}
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

export default ManageOrders;