import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Progress() {
    const { name } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8081/progress/`)
            .then(res => {
                if (res.data.Status === "Success") {
                    console.log(res.data.Result);
                    setData(res.data.Result);
                } else {
                    alert("Error");
                }
            })
            .catch(err => console.log(err));
    }, [name]); // Include 'name' as a dependency to re-fetch data when 'name' changes

    const navigate = useNavigate();

    return (
        <>
            <div className="templateContainer">
                <div className="template_ContainerEnroll">
                    {data.length > 0 ? (
                        data.map((val) => (
                            <div className="template1" key={val.id} id="enrolledCourse">
                                {name === val.name ? (
                                    <div>
                                    <h4>Course name: {val.selectedcourse}</h4>
                                    <h4>Duration : {val.duration}</h4>
                                    </div>
                                ) : null}
                            </div>
                        ))
                    ) : (
                        <p>No results found.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Progress;
