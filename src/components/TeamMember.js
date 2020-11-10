import React from "react";

function TeamMember(props) {
    const {details} = props;

    if (!details) return <h3>Fetching team member info...</h3>

    return (
        <div className="container teammate">
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.role}</p>
        </div>
    )
}

export default TeamMember;