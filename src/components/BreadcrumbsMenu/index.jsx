
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import s from "./index.module.scss";
import { Breadcrumb } from 'antd';

 const BreadcrumbsMenu = ({prop}) => (
  <Breadcrumb className={s.BreadCrumb}>
    <Breadcrumb.Item href="">
      <span>Главная</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>{prop}</Breadcrumb.Item>
  </Breadcrumb>
);

export default BreadcrumbsMenu;



