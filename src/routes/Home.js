import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Scrollbar from '../components/Scrollbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Missions from '../components/Missions';
import Aboutus from '../components/Aboutus';
import Destination from '../components/Destination';
import Card from '../components/Card.tsx';
import Footer from '../components/Footer.tsx';
const Home = () => {
  return (
    <>
    <Navbar />
    <Hero cName="hero" heroImg="./video.mp4"
    text="Get ready for a Space Adventure"
    buttonText="Let us Start"
    url="/" 
    btnClass ="button"/>

    <Missions />
    <Aboutus />
    <Scrollbar />
    <Destination />
    <Card />
    <Footer />
    </>
  )
}

export default Home