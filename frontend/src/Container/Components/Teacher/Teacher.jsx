import React, { useEffect, useState } from "react";
import { http } from "../../../CommonApi/http";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

function Teacher() {
  const [teachers, setteachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [ showData, setShowData ] = useState([]);
  
  const getTeachersData = async () => {
    await http.get("showStudentsByTeacher").then((res) => {
      let [...data] = res.data;
      setteachers(data);
    });
  };

  useEffect(() => {
    return () => {
      getTeachersData();
    };
  }, []);

  function handleShow(id) {
    let dataIs = teachers.filter((data) => data.teach_id === id);
    setShowData(dataIs[0]);
  }

  function handleStudents(id) {
    let studData = teachers.filter((data) => data.teach_id === id);
    setStudents(studData[0].students);
  }

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  function handleDelete(id) {
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        return await http
          .delete(`deleteTeacher/${id}`)
          .then((response) => {
            if (response.status === 200) {
              swalWithBootstrapButtons.fire(
                "Deleted!",
                "Your data has been deleted.",
                "success"
              );
              getTeachersData();
            } else if (
              /* Read more about handling dismissals below */
              response.status === 404
            ) {
              swalWithBootstrapButtons.fire(
                "Cancelled",
                "Your data is safe :)",
                "error"
              );
            }
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  }
  // console.log(showData.students);
  let html = "";
  if (teachers) {
    html = teachers.map((data, i) => {
      return (
        <tr key={i}>
          <td>{++i}</td>
          <td>{data.teach_name}</td>
          <td>{data.teach_contact}</td>
          <td>
            <div className="input-group">
              <button
                className="btn-sm btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Actions
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    type="button"
                    className="btn m-1 btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#viewDetails"
                    onClick={() => handleShow(data.teach_id)}
                  >
                    View Details
                  </button>
                </li>
                <li>
                  <NavLink
                    type="button"
                    className="btn m-1 btn-warning"
                    to={`updateTeacher/${data.teach_id}`}
                  >
                    Update Teacher
                  </NavLink>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn m-1 btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    onClick={() => handleDelete(data.teach_id)}
                  >
                    Delete Teacher
                  </button>
                </li>
              </ul>
            </div>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-sm btn-info m-0 p-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
              onClick={() => handleStudents(data.teach_id)}
            >
              Show
            </button>
          </td>
        </tr>
      );
    });
  } else if (teachers.length === 0) {
    html = (
      <tr>
        <td>Empty...</td>
      </tr>
    );
  }
  return (
    <div className="container-fluid mt-1 p-1">
      <div className="card border-primary">
        <div className="card-header text-center border-primary border-3">
          Details Of Teacher's
        </div>
        <div className="card-body table-sm-responsive">
          <table className="table table-striped table-sm-responsive text-center">
            <thead className="thead-inverse">
              <tr>
                <th>No.</th>
                <th>Name of Teacher</th>
                <th>Contact</th>
                <th>Actions</th>
                <th>Assigned Students</th>
              </tr>
            </thead>
            <tbody>{html}</tbody>
          </table>
        </div>
      </div>
      {/* <!--show details of teacher Modal 1--> */}
      <div
        className="modal fade"
        id="viewDetails"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Details of Teacher
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container-fluid">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-6 col-sm-6">
                        <pre>Teacher Name :</pre>
                        <pre>Teacher Email :</pre>
                        <pre>Teacher Phone No. :</pre>
                        <pre>Gender :</pre>
                        <pre>Subjects :</pre>
                        <pre>Teacher Address :</pre>
                        <pre>City :</pre>
                        <pre>No of Students assigned :</pre>
                      </div>
                      <div className="col-6 col-sm-6">
                        <pre>{showData.teach_name}</pre>
                        <pre>{showData.teach_email}</pre>
                        <pre>{showData.teach_contact}</pre>
                        <pre>{showData.gender}</pre>
                        <pre>{showData.teach_subject}</pre>
                        <pre>{showData.teach_address}</pre>
                        <pre>{showData.teach_city}</pre>
                        <pre>{showData.students?.length}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*show details of asssigned students model 2 */}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Assigned Students Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container-fluid">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table table-sm">
                      <thead>
                        <tr>
                          <th>Roll No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Class</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.length > 0 ? (
                          students.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td>{item.stud_id}</td>
                                <td>{item.stud_name}</td>
                                <td>{item.stud_email}</td>
                                <td>{item.stud_class}</td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td colSpan={4} className="text-center">
                              No Student has assigned..
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
