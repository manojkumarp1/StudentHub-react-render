import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const [userData, setUserData] = useState({
    id: '', // User ID
    firstname: '', // User first name
  });



  const navigate = useNavigate(); // Access the navigation function

  const navigationData = [
    {
      navName: 'Home',
      navRoute: '/',
    },
  
    {
      navName: 'Courses',
      navRoute: '/courses',
    },
    {
      navName: 'Academic Resources',
      navRoute: '/resources',
    },
    {
      navName: 'Communication Tools',
      navRoute: '/tools',
    },
    {
      navName: 'Calendar',
      navRoute: '/calendar',
    },
    {
      navName: 'Progress Tracker',
      navRoute: '/tracker',
    },
    {
      navName: 'Report',
      navRoute: '/report',
    },
  ];

  useEffect(() => {
    const studentId = localStorage.getItem('studentId');
    if (studentId) {
      fetch(`http://localhost:8081/students/${studentId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Status === 'Success') {
            setUserData(data.data); // Assuming the API response structure contains student data
          } else {
            console.error('Error fetching student data.');
          }
        })
        .catch((error) => console.error('Error fetching student data: ', error));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('studentId'); // Clear studentId from local storage
    navigate('/login'); // Navigate to the login page
    localStorage.removeItem('authenticatedUser');
      localStorage.removeItem('authenticatedAdmin');
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="nav-main">
      <div className="nav-wrapper">
        <div className="nav-profile">
          <div className="profile-img">
            {userData.id ? (
              <NavLink to="/profile" className="nav-profile-link">
                <img className="image"  src={`http://localhost:8081${userData.profilePic}`} alt="profilepic" />
              </NavLink>
            ) : (
              <img
                className="image"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="profilepic"
              />
            )}
          </div>
          {userData.id ? (
            <div className="user-name">
              {userData.firstname}
            </div>
          ) : (
            <a href="/login" className="user-name-button">
              Login
            </a>
          )}
        </div>
        {navigationData.map((data, index) => (
          <NavLink className="nav-names" key={index} to={data.navRoute}>
            {data.navName}
          </NavLink>
        ))}
          <div className="nav-logout" onClick={handleLogout}>
            Logout
          </div>
        
      </div>
    </div>
  );
}

export default Navbar;
