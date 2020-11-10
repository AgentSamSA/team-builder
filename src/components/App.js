import './App.css';
import React, { useState } from "react";
import TeamMember from "TeamMember";
import Form from "Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div>
      <h1>Add a Team Member</h1>

      <Form />

      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember details={teamMember} />
          );
        })
      }
    </div>

  );
}

export default App;
