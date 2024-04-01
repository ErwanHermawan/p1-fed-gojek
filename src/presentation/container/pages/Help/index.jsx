// -- templates
import Default from "presentation/component/templates/Default";

// -- components
import HeadlineBanner from "presentation/component/organisms/HeadlineBanner";
import SectionTopic from "presentation/component/organisms/SectionTopic";

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
