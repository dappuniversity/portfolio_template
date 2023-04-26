import { HashLink as Link } from 'react-router-hash-link';

const Header = (props) => {
  return (
    <section className='header'>
      
        <ul className='header-nav'>
            <li><Link smooth to='/#home'>Home</Link></li>
            <li><Link smooth to='/#projects'>Projects</Link></li>
            <li><Link smooth to='/#experience'>Experience</Link></li>
            <li><Link smooth to='/#contact' onClick={() => props.setShow(true)}>Contact</Link></li>
        </ul>

        {/* For tablets and mobile */}

        <div className={props.menuOpen ? 'menu-btn open' : 'menu-btn'} onClick={() => props.setMenuOpen(!props.menuOpen)}>
          <div className='menu-btn__burger'></div>
        </div>
        
    </section>
  );
};

export default Header;
