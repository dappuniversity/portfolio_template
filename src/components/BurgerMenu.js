import { HashLink as Link } from 'react-router-hash-link';

const BurgerMenu = (props) => {
  return (
    <div className={props.menuOpen ? 'burger-menu show' : 'burger-menu'}>
      <ul>
        <li>
          <Link smooth to="#home">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="#projects">
            Projects
          </Link>
        </li>
        <li>
          <Link smooth to="#experience">
            Experience
          </Link>
        </li>
        <li>
          <Link smooth to="#contact" onClick={() => props.setShow(true)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
