
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import s from "./index.module.scss";

import doc1 from "./img/doc1.jpg"
import doc2 from "./img/doc2.jpg"
import doc3 from "./img/doc3.jpg"

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SliderDoc = () => {
	return (
		<div className={s.wrapper}>
			<Swiper className={s.swipers}
				modules={[Navigation,  A11y]}
				spaceBetween={0}
				slidesPerView={1}
				navigation={{
					
				}}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				breakpoints={{
					640: {
					  slidesPerView: 1,
					  spaceBetween: 20,
					},
					768: {
					  slidesPerView: 2,
					  spaceBetween: 40,
					},
					1024: {
					  slidesPerView: 2,
					  spaceBetween: 50,
					},
				 }}
				 
			
			>
				<div className={s.slideBox}>
					<SwiperSlide className={s.slide} ><img src={doc1} className={s.box} alt="" /></SwiperSlide>
					<SwiperSlide className={s.slide}><img src={doc2} className={s.box} alt="" /></SwiperSlide>
					<SwiperSlide className={s.slide}><img src={doc3} className={s.box} alt="" /></SwiperSlide>
				</div>
			</Swiper>
		</div>
	);
};

export default SliderDoc










// export const SliderDoc = () => {
//   return (
//     <>
//       <h1>УДАЛИ МЕНЯ</h1>
//     </>
//   );
// };

// export default SliderDoc



