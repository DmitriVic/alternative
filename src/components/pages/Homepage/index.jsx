
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
import cn from "classnames";
import Catalog from "../../Catalog";
import InfoBlock from "../../InfoBlock";
import PlombAndSys from "../../PlombAndSys";
import PopularGoods from "../../PopularGoods";
import Text from "../../Text";
import s from "./index.module.scss";





export const Homepage = ({data, dataPopular}) => {


  return (
    <>
    <PlombAndSys/>
	 <div style={{ height: '100px'}}></div>
	 <Text/>
	 <div style={{ height: '100px'}}></div>
	 <Catalog data={data}/>
	 <div style={{ height: '100px'}}></div>
	 <InfoBlock/>
	 <PopularGoods dataPopular={dataPopular} />
    </>
  );
};

export default Homepage



