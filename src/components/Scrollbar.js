import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Saturn from '../assets/Saturn.png';
import Jupiter from '../assets/jupiter.png';
import Mars from '../assets/mars.png';
import Venus from '../assets/venus.png';
import Mercury from '../assets/mercury.png';
import Neptune from '../assets/neptune.png';
import "./ScrollbarStyles.css"
import { Container, Row, Col } from 'react-bootstrap';
const Scrollbar = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      return (
        <section className="skill" id="skills">
        <div className="container">
        <div className="row">
                <div className="col-12">

                        <div className="skill-bx wow zoomIn">
                            <h2>Planets</h2>
                            <p>You can choose to explore <br></br> Each one has its own unique feature</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                               
                                <div className="item">
                                    <img src={Saturn} alt="Image" />
                                    <h5>Saturn</h5>
                                </div>
                                <div className="item">
                                    <img src={Mercury} alt="Image" />
                                    <h5>Mercury</h5>
                                </div>
                                <div className="item">
                                    <img src={Neptune} alt="Image" />
                                    <h5>Neptune</h5>
                                </div>
                                <div className="item">
                                    <img src={Mars} alt="Image" />
                                    <h5>Mars</h5>
                                </div>
                                <div className="item">
                                    <img src={Jupiter} alt="Image" />
                                    <h5>Jupiter</h5>
                                </div>
                                <div className="item">
                                    <img src={Venus} alt="Image" />
                                    <h5>Venus</h5>
                                </div>
                            
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
}

export default Scrollbar