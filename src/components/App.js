import './App.css';
import React, { useState } from "react";
import TeamMember from "./TeamMember";
import Form from "./Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState("");

  const setEdit = (member) => {
    setMemberToEdit(member);
  }

  return (
    <div className="container">
      <h1>Add a Team Member</h1>

      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} memberToEdit={memberToEdit} />

      {
        teamMembers.map((teamMember, index) => {
          return (
            <TeamMember key={index} details={teamMember} setEdit={setEdit}/>
          )
        })
      }
    </div>
  )
}

export default App;
