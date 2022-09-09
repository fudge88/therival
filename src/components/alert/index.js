import { Typography } from '@mui/material';
import React from 'react';

const Alert = () => {
	return (
		<div>
			<Typography
				sx={{
					textTransform: 'capitalize',
					textAlign: 'center',
					backgroundColor: '#e6e76d',
					padding: '2px',
				}}
				variant="body2">
				Autumn Special offer now available!
			</Typography>
		</div>
	);
};

export default Alert;
