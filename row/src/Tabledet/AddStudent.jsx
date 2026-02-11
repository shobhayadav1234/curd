import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css";

const AddStudent = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        course: "",
        fee: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(() => {
            navigate("/"); 
        });
    };

    return (
        <div className="form-page">
            <h2>Add Student</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                /> <br />

                <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    onChange={handleChange}
                    required
                />  <br />

                <input
                    type="number"
                    name="fee"
                    placeholder="number"
                    onChange={handleChange}
                    required
                /> <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddStudent;
