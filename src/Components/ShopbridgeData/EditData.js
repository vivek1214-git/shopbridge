import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditData = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    phone: "",
    address: "",
  });
  const { name, price, description, phone, address } = data;
  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3002/shopbridge/${id}`, data);
    navigate.push("/");
  };
  useEffect(()=>{
      loadData();
  },[])
  const loadData = async (e) =>{
      await axios.get(`http://localhost:3002/shopbridge/${id}`)
  }

  return (
    <div className="container">
      <div className="w-60 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Data</h2>
        <form
          className="row g-3 needs-validation"
          onSubmit={(e) => onSubmitHandler(e)}
        >
          <div className="col-md-4">
            <label for="validationCustom01" className="form-label">
              name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              value={name}
              required
              onChange={(e) => onInputChange(e)}
            />
            <div className="valid-feedback">please enter name</div>
          </div>
          <div className="col-md-4">
            <label for="validationprice" className="form-label">
              price
            </label>
            <input
              type="number"
              name="price"
              className="form-control"
              id="price"
              value={price}
              onChange={(e) => onInputChange(e)}
              required
            />
            <div className="valid-feedback">Enter the price</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustomUsername" className="form-label">
              description
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                name="description"
                className="form-control"
                id="description"
                aria-describedby="inputGroupPrepend"
                required
                value={description}
                onChange={(e) => onInputChange(e)}
              />
              <div className="invalid-feedback">Please enter description.</div>
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationCustom03" className="form-label">
              phone
            </label>
            <input
              type="number"
              name="phone"
              className="form-control"
              id="phone"
              required
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
            <div className="invalid-feedback">
              Please enter a valid phone number{" "}
            </div>
          </div>
          <div className="col-md-3">
            <label for="validationCustom04" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="address"
              required
              value={address}
              onChange={(e) => onInputChange(e)}
            />
            <div className="invalid-feedback">Please enter valid address.</div>
          </div>

          <div className="col-12">
            <button className="btn btn-warning" type="submit">
              Edit Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditData;
