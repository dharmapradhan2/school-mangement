import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { http } from "../../CommonApi/http";
import "./Home.css";
function Home() {
  const [principal, setPrincipal] = useState([]);
  useEffect(() => {
    const getPrincipalData = async () => {
      await http.get("getPrincipal").then((res) => {
        let [...data] = res.data;
        setPrincipal(data);
      });
    };
    return () => {
      getPrincipalData();
    };
  }, []);

  console.log(principal);
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
          <div className="card">
            <div className="card-body">
              <div className="card-title d-flex flex-column">
                <pre>Principal Name : Sibaram Panda</pre>
                <pre>Qulification : Ph.D in Computer Science</pre>
                <pre>Contact Details: +91909073945</pre>
              </div>
            </div>
          </div>
          <div className="table-sm-responsive">
            <table className="table table-striped table-inverse table-responsive">
              <thead className="thead-inverse">
                <tr>
                  <th>Teacher's Name</th>
                  <th>Email ID</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>regwrtgr</td>
                  <td>xyz@gmail.com</td>
                  <td className="btn btn-sm btn-info p-1 mt-1">View Details</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
