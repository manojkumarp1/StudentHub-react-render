-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2023 at 10:27 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studenthub`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(20) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `dob` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `firstname`, `lastname`, `dob`, `email`, `phone`, `password`) VALUES
(1, 'admin', 'admin', '120302', 'admin@gmail.com', 'admin', 'admin@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(40) NOT NULL,
  `coursename` varchar(50) NOT NULL,
  `imgurl` varchar(1000) NOT NULL,
  `description` varchar(300) NOT NULL,
  `duration` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `coursename`, `imgurl`, `description`, `duration`) VALUES
(5, 'Python Programming Language', 'https://www.svgrepo.com//show/376344/python.svg', 'Unravel the simplicity and power of dynamic programming', '10 hours'),
(6, 'Dotnet', 'https://www.srishticampus.com/packageImages/dotnet_round.png', 'Harness the strength of a unified platform', '12 hours'),
(7, 'Javascript', 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*98ydKJQSWDGwHZxUV_-kLw.png', 'Ignite your web creations ', '10 hours'),
(12, 'Javascript', 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*98ydKJQSWDGwHZxUV_-kLw.png', 'Ignite your web creations ', '10 hours');

-- --------------------------------------------------------

--
-- Table structure for table `problems`
--

CREATE TABLE `problems` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `problem` text DEFAULT NULL,
  `stat` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `problems`
--

INSERT INTO `problems` (`id`, `name`, `email`, `problem`, `stat`) VALUES
(1, 'pavan', 'pavan@gmail.com', 'i am facing courses not displayed', 'yes'),
(2, 'pavan', 'pavan@gmail.com', 'i am facing courses not displayed', 'no'),
(3, 'pavan', 'pavan@gmail.com', 'i am facing courses not displayed', 'yes'),
(4, 'Ganesh', 'ganesh@gmail.com', 'i am facing quiz issues', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(20) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `profilePic` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `firstname`, `lastname`, `dob`, `email`, `phone`, `password`, `profilePic`) VALUES
(1, 'hi', 'hi', '0000-00-00', 'hi@gmail.com', 'hi', 'hi@gmail.com', NULL),
(2, 'PavanChintakayala', 'PavanChintakayala', '0000-00-00', 'PavanChintakayala@gmail.com', '1234567890', 'PavanChintakayala@gm', NULL),
(3, 'admin123', 'admin123', '0000-00-00', 'admin123@gmail.com', '1234567890', 'Pavan@180602', NULL),
(4, 'ram', 'ram', '0000-00-00', 'ram@gmail.com', '9874561235', 'ram', NULL),
(5, 'ashok', 'raj', '2023-10-06', 'raj@gmail.com', '9874563212', 'rajrajraj', '/uploads/apartment.jpg'),
(6, 'admin', 'admin', '2023-10-06', 'admin@gmail.com', '9876543213', 'admin@gmail.com', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `problems`
--
ALTER TABLE `problems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `problems`
--
ALTER TABLE `problems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
