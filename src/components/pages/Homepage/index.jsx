
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
import cn from "classnames";
import Catalog from "../../Catalog";
import PlombAndSys from "../../PlombAndSys";
import Text from "../../Text";
import s from "./index.module.scss";





export const Homepage = ({data}) => {
  return (
    <>
    <PlombAndSys/>
	 <div style={{ height: '100px'}}></div>
	 <Text/>
	 <div style={{ height: '100px'}}></div>
	 <Catalog data={data}/>
    </>
  );
};

export default Homepage



