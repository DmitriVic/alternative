
import s from "./index.module.scss";
import logo2 from './img/label2.svg'
import logo3 from './img/label3.svg'



const Logo = ({footer}) => {
	
  return (
   <div className={s.logo}>
				{ footer ? <img className={s.logolImg} src={logo3} alt="" /> : <img className={s.logolImg} src={logo2} alt="" />}
			</div>
  );
};

export default Logo



