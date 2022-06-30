import catImg from '../Header/img/catImg.svg'
import 'antd/dist/antd.css';
import s from './index.module.css'
import '../../App.css';
//import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
      },
      // {
      //   type: 'divider',
      // },
      {
        label: '3rd menu item',
        key: '3',
      },
    ]}
  />
);

const AntdDropdown = () => (
	
  <>
	<Dropdown className={s.box} overlay={menu} trigger={['click']}>
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