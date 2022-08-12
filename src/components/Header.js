// Import Assets
import profile from "../assets/profile-pic (2).jpg";
import { Link } from 'react-router-dom';


const Header = (props) => {

  return (
    <section className="header">
      <Link to="/">
        <img src={profile} alt="Damon Pickett" />
      </Link>

      <div className="header__content">
        <h1>
          Hi, I'm <span className="camelCase">damonPickett</span>
        </h1>
        <h2>Blockchain Developer</h2>
        
          <button onClick={() => props.setShow(true)} className="button">Get In Touch</button>
        
      </div>
    </section>
  );
};

export default Header;
