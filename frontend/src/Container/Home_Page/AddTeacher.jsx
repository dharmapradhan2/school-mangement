import React from "react";
import { useForm } from 'react-hook-form';
import { NavLink } from "react-router-dom";

function AddTeacher() {
  return (
    <div className="container-fluid mt-1 p-1">
      <div className="card text-center">
        <div className="card-header bg-dark">
          <ul className="nav nav-tabs card-header-tabs nav-justified">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="true" to="/">
                Principal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="true"
                to="/addTeacher"
              >
                Add Teacher
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="true"
                to="/addStudent"
              >
                Add Student
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="card-body container">
          <h4 className="card-title border-bottom border-primary border-2">
            Add Teacher Details
          </h4>
          <div className="card-body">
            <form action="" className="">
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    {/* is-valid */}
                    <input
                      type="text"
                      className="form-control form-sm-control border-primary"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="name"
                    />
                    <label htmlFor="floatingInputInvalid">Enter Name</label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="email"
                      className="form-control form-sm-control border-primary"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="email"
                    />
                    <label htmlFor="floatingInputInvalid">Enter Email</label>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="text"
                      className="form-control form-sm-control border-primary"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="qualification"
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Qualification
                    </label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="tel"
                      className="form-control form-sm-control border-primary"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="phone"
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Contact Number
                    </label>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="text"
                      className="form-control form-sm-control border-primary"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="address"
                    />
                    <label htmlFor="floatingInputInvalid">Address</label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="text"
                      className="form-control form-sm-control border-primary"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="city"
                    />
                    <label htmlFor="floatingInputInvalid">City</label>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <button className="btn btn-primary">Add Teacher</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTeacher;