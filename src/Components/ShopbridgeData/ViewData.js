import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewData = () => {

  const [view, setView] = useState({
    name: "",
    price: "",
    description: "",
    phone: "",
    address: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadView();
  }, []);
  const loadView = async () => {
    const result = await axios.get(`http://localhost:3002/shopbridge/${id}`);
    setView(result.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {view.name}</li>
        <li className="list-group-item">user name: {view.price}</li>
        <li className="list-group-item">email: {view.description}</li>
        <li className="list-group-item">phone: {view.phone}</li>
        <li className="list-group-item">website: {view.address}</li>
      </ul>
    </div>
  );
};



export default ViewData