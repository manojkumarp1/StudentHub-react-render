import React from 'react';
import "./Home.css";
function Home() {
    return(
        <div>
        <div className="searchInput_Container">
        <input
          id="searchInput"
          type="text"
          placeholder="Type here to search courses"
        
        />
        <button
          className="btn btn-success w-10"
          type="submit"
        >
          Search
        </button>
        
      </div>    
      <h2>Learnings</h2>
      <div class="scroll-container">
  <div class="image-wrapper">
    <img src='https://www.universitytimes.in/wp-content/uploads/2022/06/Assignment-696x464.jpg' alt='Assignment'/>
    <div class="caption"><h3>Assignments</h3></div>
  </div>
  <div class="image-wrapper">
    <img src='https://img.freepik.com/premium-vector/quiz-symbol-neon-illustration-night-isolated-design-elements_168425-181.jpg    ' alt='Quiz' height="61.5%"/>
    <div class="caption"><h3>Quizzes</h3></div>
  </div>
  <div class="image-wrapper">
    <img src='https://uploads-ssl.webflow.com/60b8bc3a2747671228dc5a32/6177ca0a1c7d002ff87054c0_post%2016%20young%20people%20wellbeing%20workshop-p-1080.jpeg' alt='Workshop'/>
    <div class="caption"><h3>Workshops</h3></div>
  </div>
  <div class="image-wrapper">
    <img src='https://uploads-ssl.webflow.com/60b8bc3a2747671228dc5a32/6177ca0a1c7d002ff87054c0_post%2016%20young%20people%20wellbeing%20workshop-p-1080.jpeg' alt='Workshop'/>
    <div class="caption"><h3>Workshops</h3></div>
  </div>

</div>
    </div>  
      
    )
}
export default Home;