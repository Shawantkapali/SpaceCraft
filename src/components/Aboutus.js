import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {ArrowRightCircle} from "react-bootstrap-icons";
import spaceship from "../assets/spaceship.png";
import './AboutusStyles.css';
const Aboutus = () => {
  return (
    <section className = "banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <h1> About Us
                    <br></br>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                    <span className="tagline">Learn More</span>

                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={spaceship} alt="Header Img"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Aboutus