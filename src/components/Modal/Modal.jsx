import s from './index.module.scss'
import cn from "classnames";

function Modal({ active, setActive, children }) {
	return (
		<div
			className={active ? cn(s['modal'], s['active']) : cn(s['modal'])}
			onClick={(e) => setActive(false)}>
			<div
				className={active ? cn(s['modalContent'], s['active']) : cn(s['modal'])}
				onClick={(e) => (e.stopPropagation())}>
				{children}
			</div>
		</div>
	)
}

export default Modal

//className={cn(s['modal'],{ "active" : active })}