import catImg from '../Header/img/catImg.svg'
//import 'antd/dist/antd.css';
import s from './index.module.css'
import '../../App.css';
//import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
const menu = (
  <Menu
    items={[
      {
        label: <p  className={s.link}>  Универсальные пломбы</p>,
        key: '0',
      },
      {
        label: <a href="#" className={s.link}> Пломбы с проволокой </a>,
        key: '1',
      },
      {
        label: <a href="#" className={s.link} > Антимагнитные пломбы </a>,
        key: '2',
      },
      {
        label: <a href="#" className={s.link}> Пломбировочные наклейки и ленты</a>,
        key: '3',
      },
      {
        label: <a href="#" className={s.link}> Запорно-пломбировочные устройства для ж/д состава </a>,
        key: '4',
      },
      {
        label: <a href="#" className={s.link}> Инструмент, проволока </a>,
        key: '5',
      },
      {
        label: <a href="#" className={s.link}> Курьерские пакеты и сейф-пакеты </a>,
        key: '6',
      },
    
    ]}
  />
);

const AntdDropdown = () => (
	
  <>
	<Dropdown overlayClassName={s.menu} className={s.box} overlay={menu} trigger={['click']}>
	  <a onClick={(e) => e.preventDefault()}>
		 <Space>
			<img src={catImg} alt="" />
			Каталог
		 </Space>
	  </a>
	</Dropdown>
  </>
);

export default AntdDropdown;