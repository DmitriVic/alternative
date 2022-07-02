import s from './index.module.scss'


import AntdDropdown from '../AntdDropdown/AntdDropdown'

import MenuContact from '../MenuContact'
import NavMenu from '../NavMenu'
import Logo from '../Logo'
import bg from './img/Group 132.svg'


function Header({setActive}) {
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<Logo/>
				<MenuContact
				setActive={setActive}/>
				<AntdDropdown />
				<NavMenu/>
			
			</div>
			{/* <img src={bg} className={s.backgr } /> */}
		</div>
	)
}

export default Header