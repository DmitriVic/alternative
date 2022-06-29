import s from './index.module.scss'
import label from './img/label2.svg'

import React from 'react'
import AntdDropdown from '../AntdDropdown/AntdDropdown'

function Header() {
	return (
		<div className={s.header}>

			<div className={s.label}>
				<img className={s.labelImg} src={label} alt="" />
			</div>
			
			<div className={s.menuContact}>
				<div>
					Тамбов, <br />
					Бульвар Строителей, 2Б, офис 28
				</div>
				<div className={s.greyText}>
					пн-пт: 9:00 - 16:00 <br />
					сб-вс: выходной
				</div>
				<div>
					<span className={s.tel}><a className={s.aTel} href="tel:+79158724107">+7 (915)-872-41-07</a></span> <br />
					<span className={s.greyText} >Перезвоним через 5 минут</span>
				</div>
			</div>
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