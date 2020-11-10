import React, { useState } from "react";

function Form(props) {
    const { teamMembers, setTeamMembers } = props;
    const initialFormValues = {
        name: "",
        email: "",
        role: "",
    }

    const [formValues, setFormValues] = useState(initialFormValues);

    const onChange = (inputName, inputValue, event) => {
        inputName = event.target.name;
        inputValue = event.target.value;
        setFormValues({
            ...formValues,
            [inputName]: inputValue,
        }
        );
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const newTeamMember = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role.trim(),
        }
        setTeamMembers([...teamMembers, newTeamMember]);
        setFormValues(initialFormValues);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-inputs">
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={formValues}
                        onChange={onChange}
                        placeholder="type your team member name"
                        required
                    >
                    </input>
                </label>

                <label>Email
                    <input
                        type="email"
                        name="email"
                        value={formValues}
                        onChange={onChange}
                        placeholder="type your team member email"
                        required
                    >
                    </input>
                </label>

                <label>Role
                    <select name="role" value={formValues} onChange={onChange} required>
                        <option value="">-- Select a Role --</option>
                        <option value="Saboteur">Saboteur</option>
                        <option value="Rearguard">Rearguard</option>
                        <option value="Pointman">PointMan</option>
                        <option value="Medic">Medic</option>
                        <option value="Breacher">Breacher</option>
                    </select>
                </label>
            </div>
        </form>

    )
}

export default Form;