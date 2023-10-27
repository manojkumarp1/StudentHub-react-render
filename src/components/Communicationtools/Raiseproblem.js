import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import axios from "axios";

function Raiseproblem() {
  const [originalData, setOriginalData] = useState([]);
  const [data, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8081/getproblem").then((res) => {
      if (res.data.Status === "Success") {
        console.log(res.data.Result);
        setOriginalData(res.data.Result);
      } else {
        alert("Error");
      }
    }).catch((err) => console.log(err));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredResults = originalData.filter((item) =>
      item.problem.toString().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <>
      <div className="body">
        <div>
          <br />
        </div>
      </div>
      <div className="template_Container">
        <div className="row justify-content-center mb-3">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="input-group">
              <input
                id="searchStudent"
                type="text"
                className="form-control"
                placeholder="Type here problem to track your status"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                }}
              />
              <button className="btn btn-success" type="submit" onClick={handleSearch}>
                Track
              </button>
              <Link to="/raiseproblemform"> {/* Link to the "raiseproblemform" page */}
                <button className="btn btn-primary">Raise a Problem</button>
              </Link>
            </div>
          </div>
        </div>
        <br></br>
        {data.length > 0 ? (
          <center>
            <table className="gridTable">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Problem</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val) => {
                  const currentStatus = val.stat.toLowerCase();
                  let buttonColor;
                  let buttonText;

                  if (currentStatus === "pending") {
                    buttonColor = "yellow";
                    buttonText = "Pending";
                  } else if (currentStatus === "solved") {
                    buttonColor = "green";
                    buttonText = "Solved";
                  } else if (currentStatus === "rejected") {
                    buttonColor = "red";
                    buttonText = "Rejected";
                  } else {
                    // Handle other status values here
                    buttonColor = "gray"; // Default color for unknown status
                    buttonText = "Unknown"; // Default text for unknown status
                  }

                  return (
                    <tr key={val.id}>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.problem}</td>
                      <td>
                        <button style={{ backgroundColor: buttonColor }}>{buttonText}</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </center>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}

export default Raiseproblem;
