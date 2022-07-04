import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { http } from "../../CommonApi/http";
import Swal from "sweetalert2";

import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

function AddStudent() {
  const [teachers, setTeachers] = useState([]);
  const [value, setvalue] = useState([]);
  useEffect(() => {
    const getTeacher = async () => {
      await http
        .get("getTeachers")
        .then((res) => {
          setTeachers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return () => {
      getTeacher();
    };
  }, []);
  // for multiple select options
  const handleOnchange = (val) => {
    // converting char to char array and then  to number array
    setvalue(val.split(",").map(Number));
  };
  // console.log(value);
  // destructring object and changing thier key names
  const options = teachers.map(({ teach_id, teach_name }) => ({
    label: teach_name,
    value: teach_id,
  }));
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data = JSON.stringify({ ...data, prin_id: 1, teach_id: value });
    // console.log(data);
    await http
      .post("storeStudent", data)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Saved",
            text: res.data.success,
          });
          setvalue([]);
          reset();
        } else if (res.status === 206) {
          setvalue([]);
          Swal.fire({
            icon: "warning",
            title: "",
            text: res.data.warning,
          });
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
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
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    {/* is-valid */}
                    <input
                      type="text"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="stud_name"
                      {...register("stud_name", { required: true })}
                    />
                    {errors.stud_name && (
                      <span className="text-danger float-start small">
                        This field is required
                      </span>
                    )}
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
                      name="stud_email"
                      {...register("stud_email", { required: true })}
                    />
                    {errors.stud_email && (
                      <span className="text-danger float-start small">
                        This field is required
                      </span>
                    )}
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
                      name="stud_class"
                      {...register("stud_class", { required: true })}
                    />
                    {errors.stud_class && (
                      <span className="text-danger float-start small">
                        This field is required
                      </span>
                    )}
                    <label htmlFor="floatingInputInvalid">Enter Class</label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="tel"
                      className="form-control form-sm-control border-info"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="stud_ph_no"
                      {...register("stud_ph_no", {
                        required: true,
                        pattern:
                          /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/,
                      })}
                    />
                    {errors.stud_ph_no && (
                      <span id="span" className="text-danger float-start small">
                        Enter Contact Number Like : +919090522384
                      </span>
                    )}
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
                      name="stud_father_name"
                      {...register("stud_father_name", { required: true })}
                    />
                    {errors.stud_father_name && (
                      <span className="text-danger float-start small">
                        This field is required
                      </span>
                    )}
                    <label htmlFor="floatingInputInvalid">
                      Enter Father Name
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
                      name="stud_mother_name"
                      {...register("stud_mother_name", { required: true })}
                    />
                    {errors.stud_mother_name && (
                      <span className="text-danger float-start small">
                        This field is required
                      </span>
                    )}
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
                      name="stud_address"
                      {...register("stud_address", { required: true })}
                    />
                    {errors.stud_address && (
                      <span className="text-danger float-start small">
                        This field is required
                      </span>
                    )}
                    <label htmlFor="floatingInputInvalid">
                      Enter Full Address
                    </label>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <select
                      className="form-select border-primary"
                      id="floatingSelect"
                      name="gender"
                      {...register("gender", { required: true })}
                    >
                      {errors.gender && (
                        <span className="text-danger float-start small">
                          This field is required
                        </span>
                      )}
                      {/* <option  disabled>
                        select Gender
                      </option> */}
                      <option defaultValue="male">male</option>
                      <option defaultValue="female">female</option>
                      <option defaultValue="other">other</option>
                    </select>
                    <label htmlFor="floatingSelect">Select Gender</label>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <div className="col mb-1">
                  <MultiSelect
                    onChange={handleOnchange}
                    options={options}
                    className="form-control border-info"
                  />
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
