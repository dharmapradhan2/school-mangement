import React, { useEffect, useState } from "react";
import { http } from "../../../CommonApi/http";
function Teacher() {
  useEffect(() => {
    const getTeachersData = async () => {
      await http.get("showStudentsByTeacher").then((res) => {
        let [...data] = res.data;
        // setPrincipal(data[0]);
        // setTeacherData(data[0].teachers_data);
        console.log(data);
      });
    };
    return () => {
      getTeachersData();
    };
  }, []);
  return (
    <div className="container-fluid mt-1 p-1">
      <div className="card border-primary">
        <div className="card-header text-center border-primary border-3">
          Details Of Teacher's
        </div>
        <div className="card-body">
          <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
              <tr>
                <th>No.</th>
                <th>Name of Teacher</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>dfvwrevwrtg</td>
                <td>+90905345353</td>
                <td className="btn btn-sm btn-info mt-1 p-1">View Details</td>
              </tr>
              <tr>
                <td>1</td>
                <td>dfvwrevwrtg</td>
                <td>+90905345353</td>
                <td className="btn btn-sm btn-info mt-1 p-1">View Details</td>
              </tr>
              <tr>
                <td>1</td>
                <td>dfvwrevwrtg</td>
                <td>+90905345353</td>
                <td className="btn btn-sm btn-info mt-1 p-1">View Details</td>
              </tr>
              <tr>
                <td>1</td>
                <td>dfvwrevwrtg</td>
                <td>+90905345353</td>
                <td className="btn btn-sm btn-info mt-1 p-1">View Details</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
