
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import s from "./index.module.scss";
//import ggg from '../../objData/img/Rectangle 134-1.jpg'



export const Card = ({ title, image,children}) => {
	console.log(children);
  return (
    <>
      <div className={s.card}>
			{/* <img src={ggg} alt="" /> */}
			{/* <img className={s.image} src={image} alt="" />
			<div className={s.title}>{title}</div> */}
			{children}
		</div>
    </>
  );
};

export default Card



