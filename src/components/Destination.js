import React from 'react'
import "./DestinationStyles.css";
import DestinationData from './DestinationData';
import southpole from '../assets/southpole.PNG';
import polesouth from '../assets/southpole.jpg';
import red from '../assets/red.jpg';
import mars from '../assets/mars.jpg'
const Destination = () => {


  return (
    <div className="back">
    <div className="destination">
       <h1>Destination</h1> 
       <DestinationData className="first-des" heading="South Pole of the Moon" text="The lunar south pole is the southernmost point on the Moon. It is of interest to scientists because of the occurrence of water ice in permanently shadowed areas around it. The lunar south pole region features craters that are unique in that the near-constant sunlight does not reach their interior. Such craters are cold traps that contain a fossil record of hydrogen, water ice, and other volatiles dating from the early Solar System. In contrast, the lunar north pole region exhibits a much lower quantity of similarly sheltered craters." 
       img1={southpole} img2={polesouth}/>
<DestinationData className="first-des-reverse" heading="Our Red Neighbor" text="Mars' orbit is close to Earth's orbit and the asteroid belt. While Mars' day and general composition are similar to Earth, the planet is hostile to life. Mars has an unbreathable atmosphere, thin enough that its temperature on average fluctuates between −70 and 0 °C (−94 and 32 °F), yet thick enough to cause planet-wide dust storms. The barren landscape on Mars is covered by fine dust and intense ionizing radiation. Mars has in-situ resources, such as underground water, Martian soil, and ore, which could be used by colonists. Opportunities to generate electricity via wind, solar, and nuclear power using resources on Mars are poor." 
       img1={red} img2={mars}/>
    </div>
    </div>
  );
};

export default Destination