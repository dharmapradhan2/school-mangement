import React, { useEffect, useState } from "react";
import { http } from "../../../CommonApi/http";
function Student() {
  const [students, setstudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    const getstudentsData = async () => {
      await http.get("showTeacherByStudent").then((res) => {
        let [...data] = res.data;
        setstudents(data);
      });
    };
    return () => {
      getstudentsData();
    };
  }, []);
  function handleShow(id) {
    let dataIs = students.filter((data) => data.stud_id === id);
    setShowData(dataIs[0]);
  }
  function handleTeachers(id) {
    let studData = students.filter((data) => data.stud_id == id);
    setTeachers(studData[0].teachers);
  }
  let html = "",
    teacherHtml = "";
  if (students) {
    html = students.map((data, i) => {
      return (
        <tr key={i}>
          <td>{++i}</td>
          <td>{data.stud_name}</td>
          <td>{data.stud_ph_no}</td>
          <td>
            <button
              type="button"
              className="btn btn-sm btn-info m-0 p-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
              onClick={() => handleShow(data.stud_id)}
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
              onClick={() => handleTeachers(data.stud_id)}
            >
              Show
            </button>
          </td>
        </tr>
      );
    });
  } else if (students.length === 0) {
    html = (
      <tr>
        <td>Empty...</td>
      </tr>
    );
  }
  if (teachers.length > 0) {
    teacherHtml = teachers.map((item, i) => {
      return (
        <tr key={i}>
          <td>{++i}</td>
          <td>{item.teach_name}</td>
          <td>{item.teach_email}</td>
          <td>{item.teach_city}</td>
        </tr>
      );
    });
  } else {
    teacherHtml = (
      <tr>
        <td colSpan={4} className="text-center">
          No Teachers has assigned...
        </td>
      </tr>
    );
  }
  return (
    <div className="container-fluid mt-1 p-1">
      <div className="card border-primary">
        <div className="card-header text-center border-primary border-3">
          Details Of Student's
        </div>
        <div className="card-body table-sm-responsive">
          <table className="table table-striped table-sm-responsive text-center">
            <thead className="thead-inverse">
              <tr>
                <th>No.</th>
                <th>Name of Student</th>
                <th>Contact</th>
                <th>view</th>
                <th>Assigned Teacher</th>
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
                Details of Student
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
                        <pre>Student Name :</pre>
                        <pre>Student Email :</pre>
                        <pre>Student Phone No. :</pre>
                        <pre>Class :</pre>
                        <pre>Student Address :</pre>
                        <pre>No of Teachers assigned :</pre>
                      </div>
                      <div className="col-6 col-sm-6">
                        <pre>{showData.stud_name}</pre>
                        <pre>{showData.stud_email}</pre>
                        <pre>{showData.stud_ph_no}</pre>
                        <pre>{showData.stud_class}</pre>
                        <pre>{showData.address}</pre>
                        <pre>{showData.teachers?.length}</pre>
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
                Assigned Teachers Details
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
                          <th>No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>City</th>
                        </tr>
                      </thead>
                      <tbody>{teacherHtml}</tbody>
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

export default Student;
