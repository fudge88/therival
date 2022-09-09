import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/icons-material/Square';

import { GamesItem } from '../../data/gamesItem';

const GamesList = () => {
	return (
		<Container
			maxWidth={false}
			sx={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'space-evenly',
			}}>
			{GamesItem.map((product) => (
				<Card
					key={product.id}
					sx={{
						width: { sm: 150, md: 300 },
						height: { sm: 150, md: 320 },
						boxShadow: 'none',
						m: '5px',
					}}>
					<CardMedia
						component="img"
						sx={{
							width: { sm: 150, md: 300 },
							height: { sm: 150, md: 200 },
						}}
						image={product.img}
						alt="name"
					/>
					<CardContent sx={{ padding: '10px 0px' }}>
						<Typography
							variant="h6"
							component="div"
							sx={{ textTransform: 'capitalize' }}>
							{product.title}
						</Typography>
						<Typography variant="body2" component="div">
							{product.caption}
						</Typography>
					</CardContent>
				</Card>
			))}
		</Container>
	);
};

export default GamesList;
