import React from 'react'
import alien from "../assets/alien.jpg";
import astronaut from "../assets/astronaut.jpg";
import galaxy from "../assets/galaxy.jpg";
import solarflare from "../assets/solarflare.jpg";
import blackhole from "../assets/blackhole.jpg"
import cosmos from "../assets/cosmos.jpg";
import './MissionsStyles.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import Missioncards from './Missioncards';
const Missions = () => {
    const missions = [
        {
          title: "UFOs are coming",
          description: "Beware of the Danger",
          imgUrl: alien,
        },
        {
            title: "Hi there",
            description: "Let us travel to Space",
            imgUrl: astronaut,
          },
          
          {
            title: "SolarFlares",
            description: "From the sun",
            imgUrl: solarflare,
          },
          {
            title: "Blackhole",
            description: "that roam out of our planet",
            imgUrl: blackhole,
          },
          {
            title: "The Cosmos",
            description: "seen from our eyes",
            imgUrl: cosmos,
          },
          {
            title: "The Vast Galaxy",
            description: "Our Milky way",
            imgUrl: galaxy,
          },
    ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <div className="title"><h2>Projects</h2></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                      <Row>
                        {
                          missions.map((missions, index) => {
                            return (
                              <Missioncards
                                key={index}
                                {...missions}
                                />
                            )
                          })
                        }
                      </Row>
                  
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Missions