import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
const Item = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.mode === '#fff',
	...theme.typography.h6,
	padding: theme.spacing(1),
	justifyContent: 'center',
	textAlign: 'center',
	alignItems: 'center',
	minHeight: '60px',
	backgroundColor: '#e6e76d',
	minWidth: '30%',
	margin: '2px',
	paddingTop: '30px',
}));

const Category = () => {
	return (
		<Box sx={{ padding: 'none' }}>
			<Box>
				<Typography
					variant="h5"
					sx={{
						textTransform: 'uppercase',
						textAlign: 'center',
						padding: '20px',
						maxWidth: '70%',
						margin: 'auto',
					}}>
					No.1 for Team Building activities and corporate events
				</Typography>
			</Box>
			<Stack
				sx={{
					textAlign: 'center',
					justifyContent: 'center',
				}}
				direction={{ xs: 'column', sm: 'row' }}>
				<Item>Indoor Activities</Item>
				<Item>Outdoor Activities</Item>
				<Item>Mobile Escape Room</Item>
			</Stack>
		</Box>
	);
};

export default Category;
