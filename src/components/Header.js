// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm John Doe</h1>
                <p>Blockchain Developer</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;