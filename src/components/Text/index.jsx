
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import s from "./index.module.scss";




export const Text = () => {
	return (
		<>
			<div className={s.text}>
				<div className={s.line}></div>
				<div >
					Пломбы предназначены для предотвращения попыток доступа к какому-либо объекту для изъятия
					или подмены материальных ценностей. Это средства строго контроля и соблюдения безопасности.
					Запорно-пломбировочное устройство  может стать главным доказательством при
					проведении расследовании, связанное с хищением.
				</div>
			</div>
		</>
	);
};

export default Text



