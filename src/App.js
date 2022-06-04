// Import Components
import Header from './components/Header';
import Modal from './components/Modal.js';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Social from './components/Social';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Languages from './components/Languages';
import { useState } from 'react';

function App() {
	const [show, setShow] = useState(false)

	return (
		<div className="App">
			<Header setShow={setShow}/>
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
