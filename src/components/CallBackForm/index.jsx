
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
import s from "./index.module.scss";







import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
	const { register, reset, handleSubmit, formState: { errors, } } = useForm({
		mode: "onBlur"
	});
	const onSubmit = data =>{ 
		alert("Данные успешно отправлены" + JSON.stringify(data))
		reset()
	};
	

	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={s.form__title}>Заполните форму Мы свяжемся с вами в течении 5 минут</div>
			
			<label >
				<input
					type="text"
					placeholder="Введите выше имя"
					{...register("firstName",{
							required: 'Поле обязательно к заполнению',
							maxLength: 80
						})} />
				<div>{errors?.firstName && <p>{errors?.firstName.message}</p>}</div>
			</label>

			<label >
				<input
					type="tel"
					placeholder="Введите номер телефона"
					{...register("mobileNumber", {
						required: "Введите номер телефона",
						// minLength: { value: 6, message: "Минимум 6 символов" },
						// maxLength: { value: 12, message: "Максимум 12 символов" },
						pattern: { value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, message: "Введите корректно номер телефона" }
					})} />
				<div>{errors?.mobileNumber && <p>{errors?.mobileNumber.message}</p>}</div>
			</label>


			<label >
				<input
				type="text"
				 placeholder=" Введите Email"
				  {...register("email",
					{ required: 'Введите адрес электронной почты', pattern: { value: /^\S+@\S+$/i, message: "Некорректно введен адрес электронной почты" }  }
					)} />
				<div>{errors?.email && <p>{errors?.email.message}</p>}</div>
			</label>


			<button >Отправить</button>
			<div className={s.chekbox}>
				<input type="checkbox" placeholder="Согласие на обработку данных" {...register("сonfirm", {required: true, min: 1})} />
				<span className={errors?.сonfirm && s.error } >Нажимая кнопку  “Отправить”, вы соглашаетесь с политикой конфединцеальности</span>
			</div>

		</form>
	);
}

//pattern: /^\S+@\S+$/i
//className={isValid && s.active}
