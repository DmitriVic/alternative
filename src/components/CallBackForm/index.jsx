
//import { HeartTwoTone} from "@ant-design/icons/lib/icons";
//import "antd/dist/antd.css";
//import cn from "classnames";
//import s from "./index.module.scss";






import React from 'react';
import { useForm } from 'react-hook-form';

export default function CallBackForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
	<>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i}) }/>
      <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
      <input type="checkbox" placeholder="Нажимая кнопку “Отправить”, вы соглашаетесь с политикой конфединцеальности" name="Нажимая кнопку “Отправить”, вы соглашаетесь с политикой конфединцеальности" ref={register({})} />

      <input type="submit" />
    </form>
	 </>
  );
}