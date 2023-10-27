import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Raiseproblem() {
  const [originalData, setOriginalData] = useState([]);
  const [data, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8081/getproblem").then((res) => {
      if (res.data.Status === "Success") {
        setOriginalData(res.data.Result);
        setFilteredData(res.data.Result);
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

  // Function to navigate to the solution form and pass the row ID
  const navigateToSolutionForm = (id) => {
    navigate(`/solutionform/${id}`);
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
                placeholder="Seach your queries here"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                }}
              />
              <button className="btn btn-success" type="submit" onClick={handleSearch}>
                Search Query
              </button>
              <Link to="/queryform">
                <button className="btn btn-primary">Ask a Query</button>
              </Link>
            </div>
          </div>
        </div>
        <br></br>
        <center>
          <table className="gridTable">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Problem</th>
                <th>Solution</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val) => {
                const currentStatus = val.stat.toLowerCase();
                return (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.problem}</td>
                    <td>{val.solution}</td>
                    <td>
                      {currentStatus === "verified" ? (
                        <button>Verified</button>
                      ) : (
                        <button onClick={() => navigateToSolutionForm(val.id)}>UnVerified</button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
}

export default Raiseproblem;