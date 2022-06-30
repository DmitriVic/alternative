import s from './index.module.scss'

import AntdDropdown from '../AntdDropdown/AntdDropdown'

import MenuContact from '../MenuContact'
import NavMenu from '../NavMenu'
import Logo from '../Logo'



function Header({setActive}) {
	return (
		<div className={s.header}>
			<Logo/>
			<MenuContact
			setActive={setActive}/>
			<AntdDropdown />
			<NavMenu/>
		</div>
	)
}

export default Header