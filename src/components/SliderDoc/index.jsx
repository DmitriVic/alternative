
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
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Modal from "../Modal";
import { useState } from "react";

export const SliderDoc = ({ setActive, Active }) => {
const [state, setState] = useState(false)
const [stateImg, setStateImg] = useState()
		function handleImg(params) {
			setState(el => !el)
			setStateImg(params)
		}

	return (
		<div className={s.wrapper}>
			<Swiper className={s.swipers}
				modules={[Navigation, A11y]}
				spaceBetween={0}
				slidesPerView={1}
				navigation={{

				}}
				onSlideChange={() => console.log('slide change')}
				//onSwiper={(swiper) => console.log(swiper)}
				
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
					<SwiperSlide className={s.slide} ><div className={s.box2}><img src={doc1} className={s.box} onClick={()=>handleImg(doc1)} alt="" /></div></SwiperSlide>
					<SwiperSlide className={s.slide} ><div className={s.box2}><img src={doc2} className={s.box} onClick={()=>handleImg(doc2)} alt="" /></div></SwiperSlide>
					<SwiperSlide className={s.slide} ><div className={s.box2}><img src={doc3} className={s.box} onClick={()=>handleImg(doc3)} alt="" /></div></SwiperSlide>

				</div>
			</Swiper>
			{ state && <img className={s.img} src={stateImg} alt="" />}
			
			<Modal
				// setModalActive={setModalActive}
				// ModalActive={ModalActive}
			>

			</Modal>
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



