import './App.css';
import React, { useState } from "react";
import TeamMember from "./TeamMember";
import Form from "./Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="container">
      <h1>Add a Team Member</h1>

      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />

      {
        teamMembers.map((teamMember, index) => {
          return (
            <TeamMember key={index} details={teamMember} />
          )
        })
      }
    </div>
  )
}

export default App;
