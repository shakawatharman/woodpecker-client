import React, { useEffect, useState } from "react";
import { Badge, Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
//   console.log(orders);

const handleDelete = (id) => {
  const proceed = window.confirm("Are you sure, you want to delete?");
  if (proceed) {
    fetch(`https://woodpecker-a3360.web.app/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const remainingOrders = orders.filter((pd) => pd._id !== id);
          setOrders(remainingOrders);
        }
      });
  }
};
  useEffect(() => {
    fetch(`https://woodpecker-a3360.web.app/myOrders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>My Name</th>
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
              <Badge pill bg="warning" text="dark">
                {order.status}
              </Badge>{" "}
            </td>
            <td>
              <Badge onClick={() => handleDelete(order?._id)} pill bg="danger" text="white">
               DELETE
              </Badge>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MyOrders;