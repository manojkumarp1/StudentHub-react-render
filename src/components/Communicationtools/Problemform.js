import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Problemform() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    problem: '',
    stat: 'pending'
  });

  const navigate = useNavigate();

  const handleInput = event => {
    const { name, value } = event.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`http://localhost:8081/addproblem`, formValues)
      .then(res => {
        if (res.data.status === 'Success') {
          navigate('/raiseproblem');
        } else {
          alert('Error: Unable to add course');
        }
      })
      .catch(err => {
        console.error('Error while adding course:', err);
        alert('Error: Unable to add course');
      });
  };

  return (
    <>
      <div className="body">
        <div><br /></div>
        <div></div>
      </div>
      <center>
        <h2>Raise a Problem</h2>
      </center>
      <div className="d-flex justify-content-center align-items-center vh-100 addpage">
        <div className="p-1 rounded w-25 border addform">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input 
                type="text"
                value={formValues.name}
                className="form-control"
                name="name"
                placeholder="Enter your Name"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={formValues.email}
                className="form-control"
                name="email"
                placeholder="Enter your email"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <input
              type="text"
                value={formValues.problem}
                className="form-control"
                name="problem"
                placeholder="Enter your problem"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-success">
                Raise a problem
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Problemform;