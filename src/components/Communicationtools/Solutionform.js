import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SolutionForm() {
  const { id } = useParams();
  const [solution, setSolution] = useState('');
  const navigate = useNavigate();

  const handleUpdateSolution = () => {
    // Send a PUT request to the server to update the solution
    axios.put(`http://localhost:8081/updatesolution/${id}`, { solution })
      .then(response => {
        console.log(response.data);
        navigate(`/tools`);
        // Handle success, e.g., display a success message or redirect

      })
      .catch(error => {
        console.error(error);
        // Handle error, e.g., display an error message
      });
  };

  return (
    <div>
      <h1>Solution Form</h1>
      <textarea
        value={solution}
        onChange={(e) => setSolution(e.target.value)}
        placeholder="Enter the updated solution"
      />
      <button onClick={handleUpdateSolution}>Update Solution</button>

    </div>
  );
}

export default SolutionForm;
