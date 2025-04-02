import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const base_url = `http://localhost:5000`;

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [feedback, setFeedback] = useState("");
  useEffect(() => {
    fetch(`${base_url}/users/getusers`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log("there is an error:", err));
  }, []);
  const handleDelete = async (id) => {
    const response = await fetch(
      `${base_url}/users/deleteuser/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(setData(data.filter((data) => data._id !== id)));
    if (response.ok) {
      setFeedback("User deleted successfully");
      setTimeout(() => {
        setFeedback("");
      }, 2000);
    }
  };
  return (
    <div>
      <center>
        <h1 id="user_data_text">User data</h1>
        <div id="userData">
          <table id="table" className="table table-bordered">
            <thead>
              <th>sl.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Delete</th>
            </thead>
            {data.map((userData, index) => (
              <tbody>
                <td key={index}>{index + 1}</td>
                <td key={index}>{userData.name}</td>
                <td key={index}>{userData.email}</td>
                <td key={index}>{userData.message}</td>
                <td key={index}>
                  <button onClick={() => handleDelete(userData._id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tbody>
            ))}
          </table>
          <p>{feedback} </p>
        </div>
      </center>
    </div>
  );
};

export default AdminPage;
