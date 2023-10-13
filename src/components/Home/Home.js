import React from "react";
import "./Home.css";
import Slider from "react-slick";

function Home() {

  // These are inbuilt slick operations which can be used
  const carousel = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div>
      <div className="searchInput_Container">
        <input
          id="searchInput"
          type="text"
          placeholder="Type here to search courses"
        />
        <button className="btn btn-success w-10" type="submit">
          Search
        </button>
      </div>
      <Slider {...carousel}>
        <div className="home-images">
            <img src="https://www.verywellmind.com/thmb/BCSbXade5vJqDHOdQPJcnc11oqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-517044699-5aa5ed828e1b6e003672dc54.jpg" alt="course" />
        </div>
        <div className="home-images">
            <img src="https://blog-media.byjusfutureschool.com/bfs-blog/2022/04/22062735/Article-Page-3-2.png" alt="course" />
        </div>
        <div className="home-images">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwGuIrld5JBrLq-FORZK3rmE7cxZUzVqs8Q&usqp=CAU" alt="course" />
        </div>
        <div className="home-images">
            <img src="https://www.reactive-executive.com/wp-content/uploads/2023/02/quel-est-le-role-du-manager-management-et-sa-hierarchie-Reactive-Executive.webp" alt="course" />
        </div>
      </Slider>
      <h2>Learnings</h2>
      <Slider {...settings}>
        <div class="image-wrapper">
          <img
            src="https://www.universitytimes.in/wp-content/uploads/2022/06/Assignment-696x464.jpg"
            alt="Assignment"
          />
          <div class="caption">
            Assignments
          </div>
        </div>
        <div class="image-wrapper">
          <img
            src="https://img.freepik.com/premium-vector/quiz-symbol-neon-illustration-night-isolated-design-elements_168425-181.jpg    "
            alt="Quiz"
          />
          <div class="caption">
            Quizzes
          </div>
        </div>
        <div class="image-wrapper">
          <img
            src="https://uploads-ssl.webflow.com/60b8bc3a2747671228dc5a32/6177ca0a1c7d002ff87054c0_post%2016%20young%20people%20wellbeing%20workshop-p-1080.jpeg"
            alt="Workshop"
          />
          <div class="caption">
            Workshops
          </div>
        </div>
        <div class="image-wrapper">
          <img
            src="https://uploads-ssl.webflow.com/60b8bc3a2747671228dc5a32/6177ca0a1c7d002ff87054c0_post%2016%20young%20people%20wellbeing%20workshop-p-1080.jpeg"
            alt="Workshop"
          />
          <div class="caption">
            Workshops
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default Home;

// These functions are used for custom slide arrows
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#12a89d", borderRadius:'50%',padding:'7px 7px',position:'absolute',right:'-10px' }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}