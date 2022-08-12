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
						{/* <Homepage
					setModalActive={setModalActive}
					modalActive={modalActive}
					data={data}
					dataPopular={dataPopular}
				/> */}
				{/* <AboutСompany/> */}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium hic beatae illo maxime suscipit repudiandae tempore quod numquam excepturi officiis exercitationem, dolorum fuga porro, quis incidunt! Sunt libero nesciunt minima animi qui, optio eligendi? Maxime fugiat maiores, numquam iste, non sequi laborum porro odio voluptatibus, eaque modi nisi facere? Veniam neque dolore voluptates eaque? Neque possimus non distinctio suscipit, et ipsam, mollitia ad facilis, cumque explicabo accusantium magni? Praesentium dolor accusantium incidunt sint repellat totam minus ex dolorem cumque rerum? Officiis, exercitationem architecto eos distinctio asperiores laudantium quibusdam iste laboriosam possimus rerum quia ipsum quo iure laborum ea qui saepe rem minima libero? Quidem aperiam perferendis dolorum earum veniam provident! Laudantium tenetur illo sapiente unde architecto fuga cumque optio, commodi corporis alias tempore libero animi, facere neque ipsum consectetur voluptate. Repellendus sint dignissimos expedita! Odio sapiente vero nihil hic possimus. Voluptatem eum quisquam placeat sed iure numquam commodi sunt doloribus architecto ab mollitia magni autem adipisci blanditiis, tempora sint, praesentium maiores magnam vero, quae dignissimos quibusdam tempore porro facere! Distinctio, maiores perspiciatis. Perspiciatis natus dolores nisi accusantium laudantium adipisci optio sequi quia repudiandae, minus dolorem, mollitia, vel illum ipsa? Voluptatem mollitia sapiente voluptates eaque ratione debitis possimus natus dicta minima facere necessitatibus, culpa neque ab officia error cupiditate veniam veritatis ex dolorum. Amet quas maiores a inventore molestias maxime illum. Animi aliquid non mollitia, officiis magni veniam placeat vel cum obcaecati pariatur, iure natus, nam tempore facere aut dolore saepe rerum enim deserunt voluptate excepturi nihil impedit assumenda! Perferendis cum excepturi, ipsum vitae provident harum inventore dolore dolorem ipsam atque porro laboriosam similique, nihil ipsa aut voluptates? Vel assumenda eaque ab est pariatur vitae harum iste tenetur dignissimos asperiores, enim rerum ad facere voluptate nihil ullam eos laudantium ex temporibus libero sequi nemo, tempore minus! Reiciendis sit, odit quis obcaecati optio nesciunt! Doloremque similique, illo culpa fuga, nihil quam veritatis omnis quae porro, vero dolor error sunt tempore blanditiis nesciunt cum labore. Nobis architecto doloribus, voluptatum mollitia cumque, molestias, reprehenderit aliquam qui exercitationem quibusdam officia? Minima in, sunt accusantium laudantium, labore rem perferendis quod et eius sit necessitatibus nostrum doloribus porro dolor? Facilis ex vero totam sapiente aut natus numquam placeat, suscipit quod magnam? Eius corrupti recusandae excepturi, placeat repudiandae quod sint doloribus possimus quam totam quisquam tempora quasi fugit iste quia debitis aut optio eos consequatur maiores mollitia! Sequi ullam, error et non rem suscipit nesciunt accusamus architecto aliquid amet. Vitae id, distinctio magnam, corrupti porro laboriosam exercitationem debitis quia odit nam iste? Accusantium possimus est tenetur, eius blanditiis error, necessitatibus vitae, consequatur earum incidunt illum. Similique quis eaque, a quam fuga natus tempore explicabo odio veniam possimus incidunt delectus accusantium pariatur ea odit. Velit modi eum sunt esse dolorem voluptatibus ipsa voluptatem, aliquam quis exercitationem cum suscipit, qui, et tempore laborum optio aut laboriosam voluptates id assumenda. Temporibus rerum mollitia autem obcaecati minima maiores, numquam aut dolore provident eum consequatur qui debitis accusantium ratione asperiores necessitatibus! Qui laudantium reiciendis ipsum, perspiciatis sapiente doloribus earum nihil, obcaecati enim aperiam aliquid sunt exercitationem distinctio eligendi dolores. Rem porro earum mollitia nemo. Aperiam reprehenderit omnis nisi voluptate earum aliquam possimus assumenda nostrum non fugiat, maxime fugit repellendus veniam alias error, quis facilis cupiditate eaque pariatur unde debitis recusandae eius quas ex. Alias suscipit accusamus aliquid eos voluptates eligendi aperiam dolorum nostrum distinctio autem reprehenderit officia mollitia, minus dignissimos iusto? Nesciunt aspernatur tempore eum laborum repudiandae corrupti doloremque inventore nam hic voluptates, vero nostrum tenetur iure eius beatae repellat molestias quia libero temporibus. Consectetur magni maiores, libero sequi repellendus id doloribus quas eius cumque magnam repudiandae voluptate asperiores facilis nesciunt tempora sunt eveniet ea at omnis quod fugiat blanditiis mollitia. Eum nam rerum natus vero repellat sunt assumenda dolorem! Deleniti expedita numquam minus ipsum maiores fugiat ducimus doloribus quidem placeat distinctio dolorum nihil modi libero at fugit quae voluptate, vitae sequi qui! Corporis enim illum illo saepe nisi omnis hic porro ex, perferendis repudiandae officiis veniam provident sequi? Magni, ipsam sequi laboriosam nulla at pariatur eaque eos molestias quaerat suscipit rem, dolore dolorum aliquam dignissimos? Id impedit itaque, libero vero enim quo neque similique. Nisi molestiae soluta nobis alias unde id mollitia iste excepturi exercitationem aliquam modi aut fuga aspernatur labore saepe totam repudiandae, nostrum in porro quod itaque vero. Quasi, eos. Itaque corporis iusto doloremque pariatur consectetur necessitatibus laboriosam fuga, adipisci officia distinctio et fugit, similique, sequi labore amet officiis! Deserunt autem iusto tempora sapiente laboriosam suscipit laudantium doloremque atque nam sunt corrupti non provident minus est fuga, culpa totam amet ab, sed, ducimus delectus aspernatur beatae at ipsum! Accusamus, deserunt dicta, deleniti minima error doloremque provident cumque nam veritatis consectetur officiis nemo et suscipit incidunt iure illo dolor? Facilis omnis rem provident ad corrupti! Cumque doloremque maiores, possimus a explicabo accusantium fuga exercitationem placeat repellendus aperiam harum sequi est, illo nisi nobis quidem impedit. Illo dolorem quisquam perspiciatis consequuntur dicta? Dolores quo harum, odit distinctio nihil fugiat magni. Perferendis nemo beatae fuga a nisi omnis libero aliquid nihil quis, ratione magnam accusamus. Recusandae dignissimos praesentium nemo doloremque. Cupiditate dolorum officia, in quia accusantium consequatur excepturi blanditiis, illo neque ratione quo itaque. Exercitationem assumenda, voluptates, magni perspiciatis harum commodi tenetur recusandae numquam vel eius animi aperiam voluptatum itaque dolores minus sed labore delectus sint. Ullam, iure exercitationem? Dignissimos, eius odio odit iusto incidunt fugit mollitia aut itaque sunt expedita corporis, eveniet quasi eos perspiciatis pariatur fuga nobis accusamus nihil dolor deserunt nesciunt, voluptatem nostrum delectus inventore. Illum voluptatibus praesentium explicabo iste libero consequuntur cupiditate quibusdam suscipit esse facilis dolor molestiae eaque quasi sunt aliquid, necessitatibus quo fugiat reprehenderit? Ex voluptatum ut facere nulla non! Eveniet rerum, fugit deserunt nam soluta, non assumenda veniam perspiciatis unde numquam a quaerat recusandae laudantium quibusdam optio iure eius aspernatur hic aperiam? Tenetur impedit unde corporis, itaque velit delectus consectetur debitis alias non, ullam aliquid illo excepturi aut dolores error, nobis explicabo saepe illum hic! Quibusdam ipsa necessitatibus dignissimos ullam ipsam amet voluptate, doloremque, voluptatibus hic labore aliquid, temporibus veniam. Asperiores neque dolor in adipisci impedit. Id mollitia laborum beatae suscipit sunt dolorem, est blanditiis quidem delectus! Earum officiis repudiandae enim nulla facere fugit magnam possimus! Id unde minima aspernatur deleniti quidem illo harum beatae, inventore laborum natus alias atque at, aliquam quae ea deserunt doloremque possimus placeat itaque commodi ratione quos! Possimus, nesciunt. Autem a ipsum architecto officia, nobis fugiat porro maiores enim inventore. Ipsa minus tempora labore dolor dolorum quaerat dolores enim ea quod, vero, atque neque nam quos. Ratione mollitia, possimus fugiat inventore culpa eius. Minus nulla ducimus earum laudantium, nam ab eius natus hic dolor sed sunt voluptatem in libero fugiat perferendis blanditiis optio et minima veritatis dolorem. Alias neque corporis vel sequi itaque natus necessitatibus recusandae ullam fugiat minima odit maxime quia numquam ipsam, quasi at voluptatum cum, eaque ab doloribus illo, exercitationem voluptate rem blanditiis. Perferendis fugiat nulla facere doloremque! Velit fugit ullam dolorum dignissimos iusto, officia illum, aperiam dicta accusantium, assumenda maiores minus quae consequuntur distinctio! Possimus necessitatibus corrupti temporibus laborum cum, totam est non veniam porro dignissimos repellendus error delectus aspernatur facilis illum, blanditiis obcaecati accusamus saepe esse sed dolor eligendi id facere! Est, delectus praesentium tenetur vero fugit numquam deserunt totam molestias amet, quas nesciunt, dolore esse voluptates repellat aliquid odit. Veniam ratione harum non labore, laudantium quam, atque maxime at totam in soluta qui aliquam ad officia voluptatem omnis corrupti animi dignissimos inventore culpa! Eum culpa incidunt tempora fuga excepturi sint harum impedit corrupti beatae itaque suscipit adipisci ducimus numquam tempore sunt sequi qui hic enim ipsum dolor, vel natus. Pariatur delectus ipsam quaerat vero corporis facere reiciendis, laborum odit eligendi sed, explicabo placeat? Nihil adipisci corrupti tempora quidem, nisi enim ea maxime. Maiores reiciendis deserunt optio corrupti vitae, reprehenderit aspernatur atque quo laboriosam quasi ipsum officia eius nihil voluptate accusamus nesciunt consequuntur, incidunt omnis earum! Reiciendis natus non excepturi deleniti quibusdam, nihil fugiat mollitia odio delectus veniam sapiente iste laborum dicta, explicabo porro voluptate et debitis assumenda? Maxime cum assumenda beatae expedita quibusdam fugiat optio, voluptate tempore dolorum? Eligendi consequuntur earum voluptatum sunt voluptatem vitae eaque minus nisi dicta id, provident, ipsa quisquam repudiandae unde dolore sed deserunt repellat, quaerat doloribus libero? Pariatur quidem itaque ipsum animi similique impedit alias, reiciendis culpa inventore dolorem dolores nobis, repudiandae ad expedita a magnam. Accusamus eius quisquam fuga libero voluptatum, officia, beatae rem eveniet et assumenda perferendis suscipit sequi? Beatae vel quisquam expedita deserunt? Eaque accusantium eius ipsam animi unde! Dolor officia excepturi dignissimos, nesciunt vitae in quam ab iusto architecto libero reprehenderit nemo nobis? Magnam minima repellat, voluptate inventore dolor nesciunt repudiandae nihil quod natus ipsum possimus voluptatibus corporis praesentium! Ipsa assumenda inventore dolore, officia perspiciatis corporis veritatis consequatur ipsam natus consequuntur blanditiis deleniti nostrum praesentium enim quia voluptas cupiditate ullam incidunt quo beatae ex alias ipsum dolorem? Commodi iure et tempore soluta? Natus, dolore, nam, ad deserunt autem omnis totam quasi saepe quam sapiente nesciunt! Facere reprehenderit ratione ut atque autem, maxime praesentium aliquam voluptate? Perspiciatis, error. Corrupti optio quidem placeat accusantium magnam illum doloremque!
				
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
