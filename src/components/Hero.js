// Import Assets
import profile from "../assets/profile-pic (2).jpg";
import { Link } from 'react-router-dom';


const Hero = (props) => {

  return (
    <>
    <div id='home'></div>
    <section className="hero" data-aos='fade-in'>
      
      <Link to="/">
        <img src={profile} alt="Damon Pickett" />
      </Link>

      <div className="hero__content">
        <h1>
          Hi, I'm <span className="camelCase">damonPickett</span>
        </h1>
        <h2>Software Developer</h2>
        
          <button onClick={() => props.setShow(true)} className="button">Get In Touch</button>
        
      </div>
    </section>
    </>
  );
};

export default Hero;
