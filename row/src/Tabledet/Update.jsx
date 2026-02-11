

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    course: "",
    fee: ""
  });


  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/Update/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData({
          name: data.name,
          course: data.course,
          fee: data.fee
        });
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(() => {
        alert("Student Updated Successfully");
        navigate("/");
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{marginLeft:550}}>
      <h2>Update Student</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      /> <br />

      <input
        type="text"
        name="course"
        value={formData.course}
        onChange={handleChange}
      /> <br />

      <input
        type="number"
        name="fee"
        value={formData.fee}
        onChange={handleChange}
      /> <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Update;
