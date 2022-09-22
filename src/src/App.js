import React, { useEffect, useState } from "react";
// imported all Components
import Header from "./Header";
import Footer from "./Footer";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Employees from "./Employees";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import "./App.css";

// import  react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// imported gender images
import male from "./images/man.png";
// import womanOne from "./images/womanOne.png";
import womanTwo from "./images/womanTwo.png";

function App() {
  function GenderImageSelector(gender) {
    if (gender === "male") {
      return male;
    } else {
      return womanTwo;
    }
  }

  function handleTeamSelection(event) {
    // document.getElementById("selector").addEventListener(, )
    console.log(event.target.value);
    setTeam(event.target.value);
  }

  function handleEmpCardClick(event) {
    const transformedEmployees = employees.map((emp) =>
      emp.id === parseInt(event.currentTarget.id)
        ? emp.teamName === selectedTeam
          ? { ...emp, teamName: "" }
          : { ...emp, teamName: selectedTeam }
        : emp
    );
    setEmployees(transformedEmployees);
  }

  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("empList")) || [
      {
        id: 1,
        fullName: "Swastik dolas",
        designation: "React Native Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Deepak dubey",
        designation: "Salesforce Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Sandhya verma",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Akansha raghuwanshi",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "Ritik chouhan",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Ruchi srivastav",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "Deepak puri goswasmi",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Anjali tiwari",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Rashi chourasiya",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Aarti tiwari",
        designation: "Python Developer",
        gender: "female",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Ashish sahu",
        designation: "Ethical hacker",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Manish Kapse",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("empList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  return (
    <Router>
      <Navbar />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((emp) => emp.teamName === selectedTeam).length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmpCardClick={handleEmpCardClick}
              handleTeamSelection={handleTeamSelection}
              GenderImageSelector={GenderImageSelector}
            />
          }
        />

        <Route
          path="/GroupedTeamMembers"
          element={<GroupedTeamMembers selectedTeam={selectedTeam} setTeam={setTeam} employees={employees} />}
        />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
