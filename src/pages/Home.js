import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Logo from '../assets/Logo.png';
import Category from '../components/category';

const Home = () => {
	return (
		<>
			<Container className="homebg">
				<Stack
					sx={{
						justifyContent: { xs: 'center', md: 'left' },
						textAlign: { xs: 'center', md: 'left' },
					}}
					direction={{ xs: 'column', sm: 'row' }}>
					<Box
						component="img"
						sx={{ maxWidth: { xs: 300, md: 600 }, margin: 'auto' }}
						src={Logo}
					/>
					<Box
						className="headerText"
						sx={{
							margin: 'auto',
							justifyContent: { xs: 'center', md: 'left' },
						}}>
						<Typography
							sx={{
								textTransform: 'uppercase',
								fontWeight: 'bold',
							}}
							variant="h3">
							Team Building Events.
						</Typography>
						<Typography
							variant="h5"
							sx={{
								textTransform: 'uppercase',
								letterSpacing: '1px',
							}}>
							Let the competition begin!
						</Typography>
						<Button
							sx={{
								mt: 2,
								color: 'white',
								backgroundColor: 'black',
								cursor: 'pointer',
								'&:hover': { backgroundColor: '#e6e76d', color: 'black' },
							}}
							size="medium"
							variant="contained">
							Upcoming events
						</Button>
					</Box>
				</Stack>
			</Container>
			<Category />
		</>
	);
};

export default Home;
