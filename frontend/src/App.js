import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Container/Header/Navbar";
import Home from "./Container/Home_Page/Home";
import Teacher from "./Container/Components/Teacher/Teacher";
import Student from "./Container/Components/Student/Student";
import AddTeacher from "./Container/Home_Page/AddTeacher";
import AddStudent from "./Container/Home_Page/AddStudent";
import UpdateTeacher from "./Container/Components/Teacher/UpdateTeacher";
import UpdateStudent from "./Container/Components/Student/UpdateStudent";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/addTeacher" element={<AddTeacher />} />
          <Route path="teacher/updateTeacher/:id" element={<UpdateTeacher />} />
          <Route path="student/updateStudent/:id" element={<UpdateStudent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
