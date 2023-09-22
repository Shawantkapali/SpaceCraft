import React, {useEffect, useState} from 'react';
import "./HeroStyles.css";
import { ArrowRightCircle } from 'react-bootstrap-icons';
const Hero = (props) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Hello There!", "How are you?", "Hope you are ready."]
  const [text, setText] = useState('');
  const [delta, setDelta] =useState(300-Math.random() *100);
  const period = 2000; 

  useEffect(() => {
      let ticker = setInterval(()=>{
          tick();
      },delta)

      return()=> {
          clearInterval(ticker)
      }
  }, [text])

  const tick = () =>{
      let i = loopNum % toRotate.length;
      let fullText = toRotate [i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
      setText(updatedText);

      if (isDeleting) {
          setDelta(prevDelta => prevDelta/2)
      }
      if (!isDeleting && updatedText === fullText){
          setIsDeleting(true);
          setDelta(period);
      } else if (isDeleting && updatedText ===''){
          setIsDeleting(false);
          setLoopNum(loopNum +1);
          setDelta(100);
      }

  }
  return (
    <div className={props.cName}>
      <video autoPlay loop muted className="hero-video">
        <source src={props.heroImg} type="video/mp4" />
        {/* Add additional source elements for other formats if needed */}
      </video>
      <div className="hero-text">
        <h1>{text}</h1>
        <br></br>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
        <span style={{ marginRight: '10px' }}>{props.buttonText}</span> <ArrowRightCircle size={25} />
          

        </a>
      </div>
    </div>
  );
}

export default Hero;
