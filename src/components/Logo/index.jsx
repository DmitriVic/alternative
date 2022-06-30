
import s from "./index.module.scss";
import logo from './img/label2.svg'



export const Logo = () => {
  return (
   <div className={s.logo}>
				<img className={s.logolImg} src={logo} alt="" />
			</div>
  );
};

export default Logo



