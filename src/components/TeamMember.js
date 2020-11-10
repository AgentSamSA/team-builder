import React from "react";

function TeamMember(props) {
    const {details} = props;

    if (!details) return <h3>Fetching team member info...</h3>

    return (
        <div className="container teammate">
            <h2>Name: {details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default TeamMember;