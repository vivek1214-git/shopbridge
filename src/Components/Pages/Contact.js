import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-5">
        <h1>Contact page</h1>
        <div className="mb-3">
          <label for="formGroupFullnameInput" class="form-label">
           Full Name
          </label>
          <input
            type="text"
            class="form-control"
            id="fullname"
            placeholder="FullName"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupEmailInput" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            id="Email"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupPasswordInput" class="form-label">
            Password
          </label>
          <input
            type="number"
            class="form-control"
            id="Password"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupAddressInput" class="form-label">
            Email
          </label>
          <textarea
            type="text"
            class="form-control"
            id="Address"
            placeholder="Address"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
