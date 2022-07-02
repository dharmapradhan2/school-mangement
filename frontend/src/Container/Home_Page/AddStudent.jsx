import React from "react";
import { NavLink } from "react-router-dom";

function AddStudent() {
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
                className="nav-link"
                aria-current="true"
                to="/addTeacher"
              >
                Add Teacher
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="true"
                to="/addStudent"
              >
                Add Student
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="card-body container">
          <h4 className="card-title border-bottom border-info border-2">
            Add Student Details
          </h4>
          <div className="card-body">
            <form action="" className="">
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    {/* is-valid */}
                    <input
                      type="text"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="name"
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Full Name
                    </label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="email"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="email"
                    />
                    <label htmlFor="floatingInputInvalid">Enter Email Id</label>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="text"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="qualification"
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Class
                    </label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="tel"
                      className="form-control form-sm-control border-info"
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
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="father_name"
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Father Number
                    </label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="tel"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="mother_name"
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Mother Name
                    </label>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="text"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="address"
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Full Address
                    </label>
                  </div>
                </div>
                <div className="col-sm mb-1">
                  <div className="form-floating">
                    <select
                      className="form-select form-sm-select border-info"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                      name="techer"
                    >
                      <option selected disabled>
                        select Teacher
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label htmlFor="floatingSelect">Assign Teacher</label>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <button className="btn btn-info">Add Student</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
