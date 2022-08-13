import "@fontsource/montserrat";
import "@fontsource/oswald";
import "@fontsource/roboto";

// import objData from "./objData/objData"
// import popular from "./objData/objData"

import { objData, popular } from "./objData/objData";

//import * as objData from "./objData/objData";

import './App.css';
import 'antd/dist/antd.css';
import Header from "./components/Header";
import { useState } from "react";

import Modal from "./components/Modal/";
import CallBackForm from "./components/CallBackForm";
import Homepage from "./components/pages/Homepage";
import AboutСompany from "./components/pages/AboutСompany";
import { Footer } from "./components/Footer"





function App() {
	const [modalActive, setModalActive] = useState(false)
	const [data, setData] = useState(objData)
	const [dataPopular, setDataPopular] = useState(popular)

	// console.log(popular);

	return (
		<div className="container">
			<div className="content">
				<Header
					setActive={setModalActive}
				/>
				<main>
						<Homepage
					setModalActive={setModalActive}
					modalActive={modalActive}
					data={data}
					dataPopular={dataPopular}
				/>
				{/* <AboutСompany/> */}
				
				
				</main>
				<Footer/>
				{/* <div className="box"></div> */}
				
			</div>


			<Modal
				active={modalActive}
				setActive={setModalActive}>
				<CallBackForm />
			</Modal>

		</div>
	);
}

export default App;
