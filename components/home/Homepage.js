import Header from "@/components/Header.js"
import Fold1 from "./Fold1.js"
import Fold2 from "./Fold2.js"
import Fold3 from "./Fold3.js"
import Fold4 from "./Fold4.js"
import Fold5 from "./Fold5.js"
import Fold6 from "./Fold6.js"
import Footer from "@/components/Footer.js"

export default function Homepage() {
	return(
		<>
			<Header currentTab="home" />
			<div className="bg-linear-to-r from-[#FF5A3C05] to-[#2F2E7505]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[10px] py-5">
					<Fold1 />
				</div>
			</div>
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[10px] font-['Montserrat']">
				<Fold2 />
				<Fold3 />
			</div>
			<div className="bg-linear-to-r from-[#FF5A3C0D] to-[#2F2E750D]">
				<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[10px] font-['Montserrat']">
					<Fold4 />
				</div>
			</div>
			<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[10px] font-['Montserrat']">
				<Fold5 />
				<Fold6 />
			</div>
			<Footer />
		</>
	)
}