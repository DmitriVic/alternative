
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
import cn from "classnames";
import s from "./index.module.scss";




export const MenuContact = ({setActive}) => {
  return (
   <div className={s.menuContact}>
				<div>
					Тамбов, <br />
					Бульвар Строителей, 2Б, офис 28
				</div>
				<div className={s.greyText}>
					пн-пт: 9:00 - 16:00 <br />
					сб-вс: выходной
				</div>
				<div>
					<span className={s.tel}><a className={s.aTel} href="tel:+79158724107">+7 (915)-872-41-07</a></span> <br />
					<span  className={cn(s['call'],s['greyText'])} onClick={(e) =>(setActive(true))} >Перезвоним через 5 минут</span>
				</div>
			</div>
  );
};

export default MenuContact



