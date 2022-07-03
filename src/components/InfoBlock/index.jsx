
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import s from "./index.module.scss";




export const InfoBlock = () => {
  return (
    <>
     <div className={s.InfoBlock}>
		<div className={s.item}>
			<p>350</p>
			<p>позиций собранно в удобном каталоге</p>
		</div>
		<div className={s.item}>
			<p>15</p>
			<p>организаций сотрудничают с нами на постоянной основе</p>
		</div>
		<div className={s.item}>
			<p>5</p>
			<p>лет на рынке пломб и систем контроля</p>
		</div>
		
	  </div>
    </>
  );
};

export default InfoBlock



