import React, { useEffect, useState } from "react";
import { Badge, Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
//   console.log(orders);

const handleDelete = (id) => {
  const proceed = window.confirm("Are you sure, you want to delete?");
  if (proceed) {
    fetch(`https://secure-shore-57866.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const remainingProducts = products.filter((pd) => pd._id !== id);
          setProducts(remainingProducts);
        }
      });
  }
};
  useEffect(() => {
    fetch("https://secure-shore-57866.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user]);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
         
          <th>Product Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            
            <td>{product.title}</td>
            <td>{product.price}</td>
            {/* <td>
              <Badge pill bg="warning" text="dark">
                {product.status}
              </Badge>{" "}
            </td> */}
            <td>
              <Badge className="badge" onClick={() => handleDelete(product?._id)} pill bg="danger" text="white">
               DELETE
              </Badge>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ManageProducts;