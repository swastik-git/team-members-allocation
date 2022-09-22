import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];

    var teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    var teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    var teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    var teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    var teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    var teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    var teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    var teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div className="teamNameDiv">
            <div
              key={item.team}
              className="card mt-2"
              style={{ cursor: "pointer" }}
            >
              <h4
                id={item.team}
                className="card-header text-dark bg-light"
                onClick={handleTeamClick}
              >
                Team Name: {item.team}
              </h4>
              <div
                id={"collapse_" + item.team}
                className={item.collapsed === true ? "collapse" : ""}
              >
                <hr />
                {item.members.map((member) => {
                  return (
                    <div class="row row-cols-1 row-cols-md-8 ">
                      <div class="col">
                        <div class="card h-20">
                          {/* <img src={male} class="card-img-top" alt="..." /> */}
                          <div class="card-body">
                            <h5 class="card-title">
                              Full Name: {member.fullName}
                            </h5>
                            <p class="card-text">
                              Designation: {member.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr />
            </div>
          </div>
        );
      })}
    </main>
  );
};
export default GroupedTeamMembers;
