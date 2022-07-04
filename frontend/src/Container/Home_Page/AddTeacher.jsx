import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { http } from "../../CommonApi/http";
import Swal from "sweetalert2";
function AddTeacher() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data = JSON.stringify({ ...data, prin_id: 1 });
    console.log(data);
    await http
      .post("storeTeacher", data)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Saved",
            text: res.data.success,
          });
          reset();
        } else if (res.status === 206) {
          Swal.fire({
            icon: "warning",
            title: "",
            text: res.data.warning,
          });
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
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-1">
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    {/* is-valid */}
                    <input
                      type="text"
                      className="form-control form-sm-control border-primary"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="teach_name"
                      {...register("teach_name", { required: true })}
                    />
                    <label htmlFor="floatingInputInvalid">Enter Name</label>
                    {errors.teach_name && (
                      <span className="text-danger float-start small">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="email"
                      className="form-control form-sm-control border-primary"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="teach_email"
                      {...register("teach_email", {
                        required: true,
                      })}
                    />
                    <label htmlFor="floatingInputInvalid">Enter Email</label>
                    {errors.teach_email && (
                      <span className="text-danger float-start small">
                        This field is required
                      </span>
                    )}
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
                      name="teach_subject"
                      {...register("teach_subject", { required: true })}
                    />
                    <label htmlFor="floatingInputInvalid">Enter subject</label>
                    {errors.teach_subject && (
                      <span className="text-danger float-start small">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="tel"
                      className="form-control form-sm-control border-primary"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="teach_contact"
                      {...register("teach_contact", { required: true })}
                    />
                    <label htmlFor="floatingInputInvalid">
                      Enter Contact Number
                    </label>
                    {errors.teach_contact && (
                      <span className="text-danger float-start small">
                        This field is required
                      </span>
                    )}
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
                      name="teach_address"
                      {...register("teach_address", { required: true })}
                    />
                    <label htmlFor="floatingInputInvalid">Address</label>
                    {errors.teach_address && (
                      <span className="text-danger float-start small">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="text"
                      className="form-control form-sm-control border-primary"
                      id="floatingInputInvalid"
                      placeholder=" "
                      name="teach_city"
                      {...register("teach_city", { required: true })}
                    />
                    <label htmlFor="floatingInputInvalid">City</label>
                    {errors.teach_city && (
                      <span className="text-danger float-start small">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="row g-1">
                  <div className="col-sm">
                    <div className="form-floating mb-1 p-0">
                      <select
                        className="form-select border-primary"
                        id="floatingSelect"
                        {...register("gender", { required: true })}
                      >
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                      </select>
                      <label htmlFor="floatingSelect">Select Gender</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-1">
                <button type="submit" className="btn btn-primary">
                  Add Teacher
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTeacher;
