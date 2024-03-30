// -- templates
import Default from "templates/Default";

// -- components
import HeadlineBanner from "components/HeadlineBanner";
import SectionTopic from "components/SectionTopic";

// -- data
import dataBanner from "./dataBanner";
import dataTopic from "./dataTopic";

const Help = (props) => {
	return (
		<>
			<Default activeMenu="help">
				<HeadlineBanner data={dataBanner} />
				<SectionTopic data={dataTopic} />
			</Default>
		</>
	);
};

export default Help;
