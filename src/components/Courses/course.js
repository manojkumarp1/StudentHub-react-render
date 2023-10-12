import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./course.css";

function Course() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8081/getcourses")
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log(res.data.Result);
          setOriginalData(res.data.Result);
          setFilteredData(res.data.Result); // Initialize filteredData with original data
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);
   

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredResults = originalData.filter((item) =>
      item.coursename.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <>
      <div className="body">
        <div>
          <br />
        </div>
       
        <div></div>
      </div>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Type here to search course"
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
          />
          <button
            className="btn btn-success w-10"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <h2>Courses Available</h2>
        <div className="scroll-container">
          {filteredData.length > 0 ? (
            filteredData.map((val) => {
              return (
                <div className="image-wrapper" key={val.id}>
                <Link to={'/enrollcourse'}>
                     <img src={val.imgurl} alt="" />
                </Link>     
                 <center><h3>{val.coursename}</h3><p>{val.description}</p><p>Duration:{val.duration}</p></center>
                </div>
              );
            })
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Course;