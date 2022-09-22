import React from "react";

export default function Employees({
  employees,
  selectedTeam,
  handleEmpCardClick,
  handleTeamSelection,
  GenderImageSelector,
}) {
  function EmpCardCssSelector(empTeamName) {
    if (empTeamName === selectedTeam) return "card m-2 standout";
    else return "card m-2";
  }
  return (
    <div className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-7">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={(event) => handleTeamSelection(event)}
            id="selector"
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8 ">
          <div className="card-collection ">
            {employees.map((emp) => (
              <div
                key={emp.id}
                id={emp.id}
                style={{ cursor: "pointer" }}
                className={EmpCardCssSelector(emp.teamName)}
                onClick={(event) => handleEmpCardClick(event)}
              >
                <img alt="Employee_image" src={GenderImageSelector(emp.gender)} />
                <div className="card-body">
                  <h6 className="card-title"> Full Name : {emp.fullName}</h6>
                  <p>{emp.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
