
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import s from "./index.module.scss";
//import ggg from '../../objData/img/Rectangle 134-1.jpg'



const Card2 = ({ title, image, text, text2 }) => {

	return (
		<>
		
				<div className={s.card2}>
					<img className={s.image} src={image} alt="" />
					<div className={s.title}>{title}</div>
					<div className={s.text}>{text}</div>
					<div className={s.text2}>{text2}</div>
				</div>

		</>
	);
};

export default Card2



