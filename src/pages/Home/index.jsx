// -- components
import Header from "components/Header";
import Banner from "components/Banner";
import Scale from "components/Scale";
import Loyalty from "components/Loyalty";
import Join from "components/Join";
import Footer from "components/Footer";

// -- data
import dataBanner from "./dataBanner";
import dataScale from "./dataScale";
import dataJoin from "./dataJoin";
import dataLoyalty from "./dataLoyalty";

const Home = (props) => {
	return (
		<>
			<Header />
			<Banner data={dataBanner} />
			<Scale data={dataScale} />
			<Loyalty data={dataLoyalty} />
			<Join data={dataJoin} />
			<Footer />
		</>
	);
};

export default Home;
