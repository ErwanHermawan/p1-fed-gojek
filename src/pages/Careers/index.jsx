// -- components
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Feature from "components/Feature";
import Join from "components/Join";

// -- data
import dataBanner from "./dataBanner";
import dataFeature from "./dataFeature";
import dataJoin from "./dataJoin";

const Career = (props) => {
	return (
		<>
			<Header />
			<Banner data={dataBanner} />
			<Feature data={dataFeature} />
			<Join data={dataJoin} />
			<Footer />
		</>
	);
};

export default Career;
