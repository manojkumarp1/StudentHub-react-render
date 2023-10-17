import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AdminCourse.css";
import settings, { carousel } from "../common-components/slick";
import Slider from "react-slick";
import { FaEdit, FaTrash } from 'react-icons/fa';

function AdminCourse() {
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

  const handleDelete = id => {
    axios
      .delete(`http://localhost:8081/deletecourse/${id}`)
      .then(res => {
        if (res.data.Status === 'Success') {
          // Reload the page or update the state as needed
          window.location.reload(true);
        } else {
          alert('Error: Unable to delete course');
        }
      })
      .catch(err => {
        console.error('Error while deleting course:', err);
        alert('Error: Unable to delete course');
      });
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
        <h2 id="courses-avai">Courses Available</h2>
        <Slider {...settings}>
          {filteredData.length > 0 ? (
            filteredData.map((val) => {
              return (
                <div className="course-image-wrapper" key={val.id}>
                  <Link to={"/enrollcourse"}>
                    <img src={val.imgurl} alt="" />
                  </Link>
                  <div className="course-details">
                    <h3 className="course-name">{val.coursename}</h3>
                    <p className="course-description">{val.description}</p>
                    <p className="course-duration">Duration:{val.duration}</p>
                    <Link to={`/editcourse/`+val.id}>
                    <FaEdit />
                  </Link>
                  <Link onClick={e => handleDelete(val.id)} id="deleteCourse" className="deleteButton" type="button">
                    <FaTrash />
                  </Link>

                    
                    




                  </div>
                </div>
              );
            })
          ) : (
            <p>No courses found.</p>
          )}
        </Slider>
      </div>
    </>
  );
}

export default AdminCourse;
