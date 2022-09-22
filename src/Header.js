import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Header({ selectedTeam, teamMemberCount }) {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-9">
          <h2>Team Member Allocation</h2>
          <h4>
            {selectedTeam} has {teamMemberCount} {teamMemberCount < 2 ? "member" : "members"}
          </h4>
        </div>
      </div>
    </header>
  );
}

export default Header;
