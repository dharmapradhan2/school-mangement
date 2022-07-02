import React from "react";

function Student() {
  return (
    <div className="container-fluid mt-1 p-1">
      <div class="card border-danger">
        <div class="card-header text-center border-danger border-3">Details Of Student's</div>
        <div class="card-body">
          <table class="table table-striped table-inverse table-responsive">
            <thead class="thead-inverse">
              <tr>
                <th>No.</th>
                <th>Name of Student</th>
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

export default Student;
