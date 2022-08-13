
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import BreadcrumbsMenu from "../../BreadcrumbsMenu";
import TheLine from "../../Line";
import PlombAndSys from "../../PlombAndSys";
import s from "./index.module.scss";




const AboutСompany = () => {
	return (
		<div className={s.AboutСompany}>
			<div className={s.wrapper}>
				<PlombAndSys />
				<div style={{height: "200px"}}></div>
				<BreadcrumbsMenu prop={'О компании'} />
				<div className={s.content}>
					<div style={{margin: "20px 0 0 121px",padding: '20px 0'}}><TheLine/></div>
					<div className={s.text}>
						<div className={s.title}>Мы рядом с Вами уже много лет</div>
						<p>Наша цель — сохранить ваше имущество в пути, на складе, дома. </p>
						<p>Пломбы не являются абсолютным решением проблем, но это позволит уменьшить риски потерь, взять на контроль движение материальных ценностей. </p>
						<p>Мы поможем Вам подобрать средство опломбирования. Стоимость покупки не имеет значения, заказ  от одной пломбы  важен для нас </p>
					</div>
				</div>
			</div>



		</div>
	);
};

export default AboutСompany



