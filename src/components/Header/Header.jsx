import s from './index.module.scss'
import cn from 'classnames'
import label from './img/label2.svg'

import React from 'react'
import AntdDropdown from '../AntdDropdown/AntdDropdown'
import MenuContact from '../MenuContact'

function Header({setActive}) {
	return (
		<div className={s.header}>

			<div className={s.label}>
				<img className={s.labelImg} src={label} alt="" />
			</div>
			
			<MenuContact/>
			<AntdDropdown />
			<div className={s.breadcrumb}>
				<a href="">Главная</a>
				<a href="">О компании</a>
				<a href="">Контакты</a>
			</div>
		</div>
	)
}

export default Header