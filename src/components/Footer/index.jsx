
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import Logo from "../Logo";
import s from "./index.module.scss";




export const Footer = () => {
	return (
		<footer>
			<div className={s.wrapper}>
				<div className={s.contactNav}>
					<div className={s.box1}>
						{/* <p>O АЛЬТЕРНАТИВА Т </p> */}
						<Logo footer/>
						<div>
							<p><a href="tel:+79158724107">+7 915 872 41 07</a></p>
							<p><a href="tel:+74752504507" >+7 4752 504 507</a></p>
						</div>
					</div>
					<div className={s.navMenu}>
						<a href="">Главная</a><a href="">Каталог</a><a href="">О компании</a><a href="">Контакты</a><a href="">Политика конфиденциальности</a> <a href="">Универсальные пломбы</a><a href=""> Пломбы с проволокой </a><a href="">Антимагнитные пломбы</a>
						<a href="">Пломбировочные наклейки и ленты </a>
						<a href="">Запорно-пломбировочные устройства</a>
					</div>
				</div>
				<div className={s.adress}>
					г. Тамбов, <br />
					Бульвар Энтузиастов, 2Б, офис 28
				</div>
				<div className={s.line}></div>
				<div className={s.made}>
					<p>2022</p>
					<p>Запилил Власов Д.В</p>
				</div>
			</div>
			{/* <p>2022</p> */}
		</footer>
	);
};

export default Footer


