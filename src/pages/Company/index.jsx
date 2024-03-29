// -- components
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Pillar from "components/Pillar";
import Loyalty from "components/Loyalty";

// -- data
import dataBanner from "./dataBanner";
import dataPillar from "./dataPillar";
import dataLoyalty from "./dataLoyalty";

const Company = (props) => {
	return (
		<>
			<Header activeMenu="company" />
			<Banner data={dataBanner} />
			<Pillar data={dataPillar} />
			<Loyalty data={dataLoyalty} />
			<Footer />
		</>
	);
};

export default Company;
