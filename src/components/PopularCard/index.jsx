
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import s from "./index.module.scss";
//import ggg from '../../objData/img/Rectangle 134-1.jpg'



const PopularCard = ({ title, image, text, text2 }) => {

	return (
		<>

			<div className={s.PopularCard}>
				<img className={s.image} src={image} alt="" />
				<div style={{paddingLeft: "20px"}}>
					<div className={s.title}>{title}</div>
					<div className={s.text}>{text}</div>
					<div className={s.text2}>{text2}</div>
					<button className={s.btn}>Купить</button>
				</div>
			</div>

		</>
	);
};

export default PopularCard



