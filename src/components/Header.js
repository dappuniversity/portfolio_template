// Import Assets
import profile from '../assets/profile-pic (2).jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className='header'>
            <Link to='/'><img src={profile} alt="Damon Pickett" /></Link>

            <div className='header__content'>
                <h1>Hi, I'm <span className='camelCase'>damonPickett</span></h1>
                <p>Blockchain Developer</p>
                <Link to='/contact'><button className='button'>Get In Touch</button></Link>
            </div>
        </section>
    );
}

export default Header;