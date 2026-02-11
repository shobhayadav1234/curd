

import { useEffect, useState } from "react";
import "./StudentTable.css";
import { NavLink } from "react-router-dom";
const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.log(err));
  }, []);


  const fetchData = () => {
  fetch("http://localhost:3000/")
    .then(res => res.json())
    .then(data => setStudents(data));
};
useEffect(() => {
  fetchData();
}, []);


const handleDelete = (id) => {
  fetch(`http://localhost:3000/delete/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      alert("Deleted");
      fetchData(); // 🔁 fresh data
    });
};




  return (


    <div className="table-container">
      <NavLink to="/Add">
        <button style={{marginBottom:20}}>ADD USER</button>
      </NavLink>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Fees</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.course}</td>
              <td>₹{item.fee}</td>
              <td>
<NavLink to={`/Update/${item._id}`}>
                <button className="btn edit">Edit</button>

</NavLink>
                {/* <button className="btn delete">Delete</button> */}
                
<button
  className="btn delete"
  onClick={() => handleDelete(item._id)}
>
  Delete
</button>

                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
