
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import Card from "../Card";
import s from "./index.module.scss";




export const Catalog = ({ data }) => {
	
	return (
		<>
			<div className={s.catalog}>
				{data?.map(el => {
					return (
						<Card
							{...el}
							key={el.id} >
							<img className={s.image} src={el.image} alt="" />
							<div className='box'>{el.title}</div>
						</Card>
					)
				})}
			</div>
		</>
	);
};

export default Catalog


