import s from './index.module.scss'

import React from 'react'
import AntdDropdown from '../AntdDropdown/AntdDropdown'

function Header() {
  return (
	 <div className={s.header}>
		<AntdDropdown   />
	 </div>
  )
}

export default Header