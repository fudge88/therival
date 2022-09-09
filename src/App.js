import { Routes, Route } from 'react-router-dom';

import './App.css';
import Alert from './components/alert';
import Brand from './components/brand';
import Navigation from './components/navigation';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';

export const App = () => {
	return (
		<div>
			<Brand />
			<Navigation />
			<Alert />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio/" element={<Portfolio />} />
				<Route path="/testimonials/" element={<Testimonials />} />
				<Route path="/contact/" element={<Contact />} />
			</Routes>
		</div>
	);
};

export default App;
