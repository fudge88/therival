import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import '../../App.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper';

import { carouselImages } from '../../data/carousel';
import { Typography } from '@mui/material';

const Carousel = () => {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				parallax={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Parallax, Pagination, Navigation]}
				className="mySwiper">
				{carouselImages.map((item) => (
					<SwiperSlide key={item.id}>
						<img src={item.img} />
						<Typography className="testimonial" sx={{ position: 'absolute' }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
							laoreet justo vitae porttitor porttitor.
						</Typography>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Carousel;
