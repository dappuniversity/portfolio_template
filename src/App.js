// Import Components
import Header from './components/Header';
import BurgerMenu from './components/BurgerMenu';
import Hero from './components/Hero';
import Modal from './components/Modal.js';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Social from './components/Social';
import Footer from './components/Footer';
import Languages from './components/Languages';
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
	const [show, setShow] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		Aos.init({ duration: 1500 });
	  }, []);

	return (
		<div className="App">
			<Header setShow={setShow} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
			<BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setShow={setShow}/>
			<Hero setShow={setShow}/>
			<Modal show={show} setShow={setShow}/>
			<About />
			<Languages />
			<Projects />
			<Experience />
			<Social />
			<Footer />
		</div>
	);
}

export default App;
