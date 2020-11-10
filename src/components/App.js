import './App.css';
import React, { useState } from "react";
import TeamMember from "TeamMember";
import Form from "Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div>
      <h1>Add a Team Member</h1>

      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />

      {
        teamMembers.map(teamMember => {
          let id = 0;
          id = id + 1;
          return (
            <TeamMember key={id} details={teamMember} />
          )
        })
      }
    </div>
  )
}

export default App;
