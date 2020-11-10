import React from "react";

function TeamMember(props) {
    const {details, setEdit} = props;

    const setMemberToEdit = (event) => {
        setEdit(details);
    }

    if (!details) return <h3>Fetching team member info...</h3>

    return (
        <div className="container teammate">
            <h2 className="name">Name: {details.name} <button onClick={setMemberToEdit}>Edit info</button></h2>
            <p className="email">Email: {details.email}</p>
            <p className="role">Role: {details.role}</p>
        </div>
    )
}

export default TeamMember;