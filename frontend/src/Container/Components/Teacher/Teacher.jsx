import React, { useEffect, useState } from "react";
import { http } from "../../../CommonApi/http";
function Teacher() {
  const [teachers, setteachers] = useState([]);
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
  console.log(teachers);
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
              data-bs-target="#exampleModal"
              onClick={() => handleShow(data.teach_id)}
            >
              Details
            </button>
          </td>
        </tr>
      );
    });
  } else if (teachers.length === 0) {
    html = <tr>Empty...</tr>;
  }
  return (
    <div className="container-fluid mt-1 p-1">
      <div className="card border-primary">
        <div className="card-header text-center border-primary border-3">
          Details Of Teacher's
        </div>
        <div className="card-body container-fluid">
          <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
              <tr>
                <th>No.</th>
                <th>Name of Teacher</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{html}</tbody>
          </table>
        </div>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
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
                        </div>
                        <div className="col-6 col-sm-6">
                          <pre>{showData.teach_name}</pre>
                          <pre>{showData.teach_email}</pre>
                          <pre>{showData.teach_contact}</pre>
                          <pre>{showData.teach_qualification}</pre>
                          <pre>{showData.teach_address}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
