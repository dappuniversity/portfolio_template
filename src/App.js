// Import Components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Social from './components/Social';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes >
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<About />
			<Projects />
			<Experience />
			<Social />
			<Footer />
		</div>
	);
}

export default App;
