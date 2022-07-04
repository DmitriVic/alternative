
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import Card2 from "../Card2";
import s from "./index.module.scss";




export const PopularGoods = ({dataPopular}) => {
	
  return (
    <>
      <div className={s.popularGoods}>
			<div className={s.title}>Популярные товары:</div>
			<div className={s.gridBox}>
				{dataPopular.map((el) => {
					if (el.id <= 4) {
					return	(
					<Card2
					key={el.id}
					 {...el}/>
					)}
				})}
			</div>
		</div>
    </>
  );
};

export default PopularGoods



