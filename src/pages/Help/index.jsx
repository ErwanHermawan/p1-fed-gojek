// -- components
import Header from "components/Header";
import Footer from "components/Footer";
import HeadlineBanner from "components/HeadlineBanner";
import SectionTopic from "components/SectionTopic";

// -- data
import dataBanner from "./dataBanner";
import dataTopic from "./dataTopic";

const Help = (props) => {
	return (
		<>
			<Header activeMenu="help" />
			<HeadlineBanner data={dataBanner} />
			<SectionTopic data={dataTopic} />
			<Footer />
		</>
	);
};

export default Help;
