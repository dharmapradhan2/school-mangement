import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { http } from "../../CommonApi/http";
import "./Home.css";
function Home() {
  const [principal, setPrincipal] = useState({});
  const [teacherData, setTeacherData] = useState([]);
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    const getPrincipalData = async () => {
      await http.get("getPrincipal").then((res) => {
        let [...data] = res.data;
        setPrincipal(data[0]);
        setTeacherData(data[0].teachers_data);
      });
    };
    return () => {
      getPrincipalData();
    };
  }, []);
  let html = "",
    teacherHtml = "";
  function handleShow(id) {
    let dataIs = teacherData.filter((data) => data.teach_id === id);
    setShowData(dataIs[0]);
  }

  // console.log(showData);
  if (teacherData.length > 0) {
    teacherHtml = teacherData.map((item, i) => {
      return (
        <tr key={i}>
          <td>{item.teach_name}</td>
          <td>{item.teach_email}</td>
          <td>
            <button
              type="button"
              className="btn btn-sm btn-info m-0 p-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => handleShow(item.teach_id)}
            >
              Details
            </button>
          </td>
        </tr>
      );
    });
  } else if (teacherData.length === 0) {
    teacherHtml = <tr><td colSpan={3}>Data is Empty...</td></tr>;
  }
  if (principal) {
    html = (
      <>
        <div className="card">
          <div className="card-body">
            <div className="card-title d-flex flex-column">
              <pre>Principal Name : {principal.prin_name}</pre>
              <pre>Qulification : {principal.prin_qulification}</pre>
              <pre>Contact Details: {principal.prin_contact}</pre>
            </div>
          </div>
        </div>
        <div className="table-sm-responsive">
          <table className="table table-striped table-inverse table-sm-responsive">
            <thead className="thead-inverse">
              <tr>
                <th>Teacher's Name</th>
                <th>Email ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{teacherHtml}</tbody>
          </table>
        </div>
      </>
    );
  } else {
    html = (
      <div className="card">
        <div className="card-body">
          <div className="card-title d-flex flex-column">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid mt-1 p-1">
      <div className="card text-center">
        <div className="card-header bg-dark">
          <ul className="nav nav-tabs card-header-tabs nav-justified">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="true" to="/">
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
                className="nav-link"
                aria-current="true"
                to="/addStudent"
              >
                Add Student
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="card-body bg-light">
          <h4 className="card-title border-bottom border-danger border-2">
            WelCome to our School
          </h4>
          <p className="font-monospace text-wrap">
            The School, Berhampur, Odisha is one of the oldest educational
            institutions of India. It was started as a school in 1856 in
            Berhampur and became an intermediate College in 1878. Its earlier
            name was Native College.
          </p>
          {html}

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
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="col-6 col-sm-6">
                            <pre>Teacher Name :</pre>
                            <pre>Teacher Email :</pre>
                            <pre>Teacher Phone No. :</pre>
                            <pre>Subjects :</pre>
                            <pre>Teacher Address :</pre>
                          </div>
                          <div className="col-6 col-sm-6">
                            <pre>{showData.teach_name}</pre>
                            <pre>{showData.teach_email}</pre>
                            <pre>{showData.teach_contact}</pre>
                            <pre>{showData.teach_subject}</pre>
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
    </div>
  );
}

export default Home;
