

import s from "./index.module.scss";




export const NavMenu = () => {
  return (
	<div className={s.breadcrumb}>
	<a href="">Главная</a>
	<a href="">О компании</a>
	<a href="">Контакты</a>
</div>
  );
};

export default NavMenu



