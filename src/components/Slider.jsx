// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// import "./Slider.css";

// // import required modules
// import { Navigation } from "swiper/modules";

// export default function App() {
// 	return (
// 		<>
// 			<Swiper
// 				navigation={true}
// 				modules={[Navigation]}
// 				className="mySwiper"
// 			>
// 				<SwiperSlide>
// 					<div className="slider-content">
// 						<h2>Slide 1</h2>
// 						<p>
// 							Lorem ipsum dolor sit amet consectetur, adipisicing
// 							elit. Quasi omnis veniam vel eveniet provident animi
// 							doloremque voluptatibus ut enim! Provident
// 							repellendus saepe adipisci. Modi saepe cupiditate
// 							quisquam voluptate fugiat placeat? Veritatis ullam
// 							ad impedit beatae, laborum enim eveniet molestias
// 							sint corporis. A fugit expedita placeat odio.
// 							Tenetur asperiores vel a!
// 						</p>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div className="slider-content">
// 						<h2>Slide 1</h2>
// 						<p>
// 							Lorem ipsum dolor sit amet consectetur, adipisicing
// 							elit. Quasi omnis veniam vel eveniet provident animi
// 							doloremque voluptatibus ut enim! Provident
// 							repellendus saepe adipisci. Modi saepe cupiditate
// 							quisquam voluptate fugiat placeat? Veritatis ullam
// 							ad impedit beatae, laborum enim eveniet molestias
// 							sint corporis. A fugit expedita placeat odio.
// 							Tenetur asperiores vel a!
// 						</p>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div className="slider-content">
// 						<h2>Slide 1</h2>
// 						<p>
// 							Lorem ipsum dolor sit amet consectetur, adipisicing
// 							elit. Quasi omnis veniam vel eveniet provident animi
// 							doloremque voluptatibus ut enim! Provident
// 							repellendus saepe adipisci. Modi saepe cupiditate
// 							quisquam voluptate fugiat placeat? Veritatis ullam
// 							ad impedit beatae, laborum enim eveniet molestias
// 							sint corporis. A fugit expedita placeat odio.
// 							Tenetur asperiores vel a!
// 						</p>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div className="slider-content">
// 						<h2>Slide 1</h2>
// 						<p>
// 							Lorem ipsum dolor sit amet consectetur, adipisicing
// 							elit. Quasi omnis veniam vel eveniet provident animi
// 							doloremque voluptatibus ut enim! Provident
// 							repellendus saepe adipisci. Modi saepe cupiditate
// 							quisquam voluptate fugiat placeat? Veritatis ullam
// 							ad impedit beatae, laborum enim eveniet molestias
// 							sint corporis. A fugit expedita placeat odio.
// 							Tenetur asperiores vel a!
// 						</p>
// 					</div>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<div className="slider-content">
// 						<h2>Slide 1</h2>
// 						<p>
// 							Lorem ipsum dolor sit amet consectetur, adipisicing
// 							elit. Quasi omnis veniam vel eveniet provident animi
// 							doloremque voluptatibus ut enim! Provident
// 							repellendus saepe adipisci. Modi saepe cupiditate
// 							quisquam voluptate fugiat placeat? Veritatis ullam
// 							ad impedit beatae, laborum enim eveniet molestias
// 							sint corporis. A fugit expedita placeat odio.
// 							Tenetur asperiores vel a!
// 						</p>
// 					</div>
// 				</SwiperSlide>
// 			</Swiper>
// 		</>
// 	);
// }
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="slider-content">
						<h2>Slide 1</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quasi omnis veniam vel eveniet provident animi
							doloremque voluptatibus ut enim! Provident
							repellendus saepe adipisci. Modi saepe cupiditate
							quisquam voluptate fugiat placeat? Veritatis ullam
							ad impedit beatae, laborum enim eveniet molestias
							sint corporis. A fugit expedita placeat odio.
							Tenetur asperiores vel a!
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slider-content">
						<h2>Slide 1</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quasi omnis veniam vel eveniet provident animi
							doloremque voluptatibus ut enim! Provident
							repellendus saepe adipisci. Modi saepe cupiditate
							quisquam voluptate fugiat placeat? Veritatis ullam
							ad impedit beatae, laborum enim eveniet molestias
							sint corporis. A fugit expedita placeat odio.
							Tenetur asperiores vel a!
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slider-content">
						<h2>Slide 1</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quasi omnis veniam vel eveniet provident animi
							doloremque voluptatibus ut enim! Provident
							repellendus saepe adipisci. Modi saepe cupiditate
							quisquam voluptate fugiat placeat? Veritatis ullam
							ad impedit beatae, laborum enim eveniet molestias
							sint corporis. A fugit expedita placeat odio.
							Tenetur asperiores vel a!
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slider-content">
						<h2>Slide 1</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quasi omnis veniam vel eveniet provident animi
							doloremque voluptatibus ut enim! Provident
							repellendus saepe adipisci. Modi saepe cupiditate
							quisquam voluptate fugiat placeat? Veritatis ullam
							ad impedit beatae, laborum enim eveniet molestias
							sint corporis. A fugit expedita placeat odio.
							Tenetur asperiores vel a!
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slider-content">
						<h2>Slide 1</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quasi omnis veniam vel eveniet provident animi
							doloremque voluptatibus ut enim! Provident
							repellendus saepe adipisci. Modi saepe cupiditate
							quisquam voluptate fugiat placeat? Veritatis ullam
							ad impedit beatae, laborum enim eveniet molestias
							sint corporis. A fugit expedita placeat odio.
							Tenetur asperiores vel a!
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
