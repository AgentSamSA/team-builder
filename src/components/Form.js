import React, { useState, useEffect } from "react";

const initialFormValues = {
    name: "",
    email: "",
    role: "",
}

function Form(props) {
    const { teamMembers, setTeamMembers, memberToEdit } = props;

    const [formValues, setFormValues] = useState(initialFormValues);

    const updateForm = (inputName, inputValue) => {
        setFormValues({
            ...formValues,
            [inputName]: inputValue,
        });
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        updateForm(name, value);
    }

    const submitForm = () => {
        const newTeamMember = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role.trim(),
        }
        setTeamMembers([...teamMembers, newTeamMember]);
        setFormValues(initialFormValues);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submitForm();
    }

    useEffect(() => {
        setFormValues({
            name: memberToEdit.name,
            email: memberToEdit.email,
            role: memberToEdit.role,
        });
    }, [memberToEdit]);

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label>Name:
                    <input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={onChange}
                        placeholder="team member name"
                        required
                    >
                    </input>
                </label>

                <label>Email:
                    <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={onChange}
                        placeholder="team member email"
                        required
                    >
                    </input>
                </label>

                <label>Role:
                    <select name="role" value={formValues.role} onChange={onChange} required>
                        <option value="">-- Select a Role --</option>
                        <option value="Saboteur">Saboteur</option>
                        <option value="Rearguard">Rearguard</option>
                        <option value="Pointman">Pointman</option>
                        <option value="Medic">Medic</option>
                        <option value="Breacher">Breacher</option>
                    </select>
                </label>
            </div>
            <div className="submit">
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form;