import "@fontsource/montserrat";
import "@fontsource/oswald";
import "@fontsource/roboto";

import objData from "./objData/objData"

import './App.css';
import 'antd/dist/antd.css';
import Header from "./components/Header/Header";
import { useState } from "react";

import Modal from "./components/Modal/Modal";
import CallBackForm from "./components/CallBackForm";
import Homepage from "./components/pages/Homepage";



function App() {
	const [modalActive, setModalActive] = useState(false)
	const [data, setData] = useState(objData)

	//console.log(data);

	return (
		<div className="container">
			<div className="content">
				<Header
				setActive={setModalActive} 
				 />
				<Homepage data={data}/>
			</div>
			
			<Modal
				active={modalActive}
				setActive={setModalActive}>
				<CallBackForm/>
				</Modal>

		</div>
	);
}

export default App;
