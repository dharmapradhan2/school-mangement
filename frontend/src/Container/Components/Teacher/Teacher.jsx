import React, { useEffect, useState } from "react";
import { http } from "../../../CommonApi/http";
function Teacher() {
  const [teachers, setteachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    const getTeachersData = async () => {
      await http.get("showStudentsByTeacher").then((res) => {
        let [...data] = res.data;
        setteachers(data);
      });
    };
    return () => {
      getTeachersData();
    };
  }, []);
  function handleShow(id) {
    let dataIs = teachers.filter((data) => data.teach_id === id);
    setShowData(dataIs[0]);
  }
  function handleStudents(id) {
    let studData = teachers.filter((data) => data.teach_id == id);
    setStudents(studData[0].students);
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
            <button
              type="button"
              className="btn btn-sm btn-info m-0 p-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
              onClick={() => handleShow(data.teach_id)}
            >
              Details
            </button>
          </td>{" "}
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
                <th>view</th>
                <th>Assigned Students</th>
              </tr>
            </thead>
            <tbody>{html}</tbody>
          </table>
        </div>
      </div>
      {/* <!-- Modal 1--> */}
      <div
        className="modal fade"
        id="exampleModal1"
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
                        <pre>Teacher Qualification :</pre>
                        <pre>Teacher Address :</pre>
                        <pre>No of Students assigned :</pre>
                      </div>
                      <div className="col-6 col-sm-6">
                        <pre>{showData.teach_name}</pre>
                        <pre>{showData.teach_email}</pre>
                        <pre>{showData.teach_contact}</pre>
                        <pre>{showData.teach_qualification}</pre>
                        <pre>{showData.teach_address}</pre>
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
      {/* model 2 */}
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
                        {students.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td>{item.stud_id}</td>
                              <td>{item.stud_name}</td>
                              <td>{item.stud_email}</td>
                              <td>{item.stud_class}</td>
                            </tr>
                          );
                        })}
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
