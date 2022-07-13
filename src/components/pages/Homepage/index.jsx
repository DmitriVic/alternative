
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
import cn from "classnames";
import Catalog from "../../Catalog";
import InfoBlock from "../../InfoBlock";
import PlombAndSys from "../../PlombAndSys";
import PopularGoods from "../../PopularGoods";
import SliderDoc from "../../SliderDoc";

import Text from "../../Text";
import TitleDocuments from "../../TitleDocuments";
import s from "./index.module.scss";





export const Homepage = ({setModalActive, modalActive, data, dataPopular}) => {
	
  return (
    <>
    <PlombAndSys/>
	 <div style={{ height: '100px'}}></div>
	 <Text/>
	 <div style={{ height: '100px'}}></div>
	 <Catalog data={data}/>
	 <div style={{ height: '100px'}}></div>
	 <InfoBlock/>
	 <div style={{ height: '100px'}}></div>
	 <PopularGoods dataPopular={dataPopular} />
	 <div style={{ height: '100px'}}></div>
	 <TitleDocuments/>
	 <div className={s.gasket}></div>
	 <div style={{ height: '100px', background: "green"}}></div>
	 <SliderDoc
	 active={modalActive}
	 setActive={setModalActive}
	 />
	

    </>
  );
};

export default Homepage



