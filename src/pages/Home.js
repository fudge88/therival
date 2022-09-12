import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Logo from '../assets/Logo.png';
import Category from '../components/category';
import Header from '../components/header';

const Home = () => {
	return (
		<>
			<Container className="homebg">
				<Header />
			</Container>
			<Category />
		</>
	);
};

export default Home;
