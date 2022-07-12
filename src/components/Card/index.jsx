
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import s from "./index.module.scss";




export const Card = ({ children}) => {
  return (
    <>
      <div className={s.Card}>
			{children}
		</div>
    </>
  );
};

export default Card



