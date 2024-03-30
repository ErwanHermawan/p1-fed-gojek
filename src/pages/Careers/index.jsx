// -- templates
import Default from "templates/Default";

// -- components
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
			<Default activeMenu="careers">
				<Banner data={dataBanner} />
				<Feature data={dataFeature} />
				<Join data={dataJoin} />
			</Default>
		</>
	);
};

export default Career;
