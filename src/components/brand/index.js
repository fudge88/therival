import { Box } from '@mui/system';
import React from 'react';
import Logo from '../../assets/Logo.png';

const Brand = () => {
	return (
		<Box
			noWrap
			component="div"
			sx={{
				mr: 2,
				justifyContent: 'center',
				display: { xs: 'flex', md: 'flex' },
			}}>
			<img
				src={Logo}
				style={{ width: 240, height: 140 }}
				alt="rival games logo"
			/>
		</Box>
	);
};

export default Brand;
