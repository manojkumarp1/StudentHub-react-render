import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Progress.css";


function Progress() {
    const { name } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://studenthub-wa9t.onrender.com/progress`)
            .then((res) => {
                if (res.data.Status === "Success") {
                    const initializedData = res.data.Result.map((item) => ({
                        ...item,
                        progress: item.progress || 0, // Initialize to 0 if progress is undefined or NaN
                    }));
                    console.log(initializedData);
                    setData(initializedData);
                } else {
                    alert("Error found");
                }
            })
            .catch((err) => console.log(err));
    }, [name]);

    const navigate = useNavigate();

    // Function to update progress with a random percentage or initialize to zero
    const updateRandomProgress = (id) => {
        const randomPercentage = Math.floor(Math.random() * 10) + 1; // Generate a random percentage between 1 and 10

        // Update the progress locally and send the update to the server
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          progress: Math.min(1, item.progress + randomPercentage / 100),
                      }
                    : item
            )
        );

        // Update progress on the server
        axios
            .put(`https://studenthub-wa9t.onrender.com/progress/${id}`, {
                progress: Math.min(1, data.find((item) => item.id === id).progress + randomPercentage / 100),
            })
            .then((res) => {
                // Handle successful update if needed
            })
            .catch((err) => {
                console.error(err);
                // Handle error if needed
            });
    };

    return (
        <>
            <div className="templateContainer2">
                <div className="template_ContainerEnroll1">
                    <center>
                        <h1>Courses Enrolled</h1>
                        <br></br>
                    </center>
                    {data.length > 0 ? (
                        data.map((val) => {
                            if (name === val.name) {
                                const progressPercent = (val.progress * 100).toFixed(2);

                                return (
                                    <div className="template2" key={val.id} id="enrolledCourse">
                                        <div>
                                            <h4>Course name: {val.selectedcourse}</h4>
                                            <h4>Duration : {val.duration}</h4>
                                            <h4>Progress : {progressPercent}%</h4>
                                        </div>
                                        <button
                                            className="status"
                                            onClick={() => {
                                                if (val.progress < 1) {
                                                    updateRandomProgress(val.id);
                                                }
                                            }}
                                        >
                                            Update Progress
                                        </button>
                                    </div>
                                );
                            }
                            return null;
                        })
                    ) : (
                        <p>No results found.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Progress;
