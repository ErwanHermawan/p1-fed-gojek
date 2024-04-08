// -- templates
import Default from "presentation/component/templates/Default";

// -- components
import Banner from "presentation/component/organisms/Banner";
import Feature from "presentation/component/organisms/SectionFeature";
import Join from "presentation/component/organisms/SectionJoin";

// -- data
import dataBanner from "./dataBanner";
import dataFeature from "./dataFeature";
import dataJoin from "./dataJoin";

const Career = (props) => {
	return (
		<>
			<Default activeMenu="careers">
				<Banner data={dataBanner} />
				<Feature data={dataFeature} />
				<Join data={dataJoin} />
			</Default>
		</>
	);
};

export default Career;
