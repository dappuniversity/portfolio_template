// Import Assets
import profile from '../assets/profile-pic (2).jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Damon Pickett" />

            <div className='header__content'>
                <h1>Hi, I'm <span className='camelCase'>damonPickett</span></h1>
                <p>Blockchain Developer</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;