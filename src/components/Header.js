import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return (
    <section className='header'>
      
        <ul className='header-nav'>
            <li><Link smooth to='/#home'>Home</Link></li>
            <li><Link smooth to='/#projects'>Projects</Link></li>
            <li><Link smooth to='/#experience'>Experience</Link></li>
            <li><Link smooth to='/#contact'>Contact</Link></li>
        </ul>
      
    </section>
  );
};

export default Header;
