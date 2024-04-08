// -- templates
import Default from "presentation/component/templates/Default";

// -- components
import Banner from "presentation/component/organisms/Banner";
import SectionFeature from "presentation/component/organisms/SectionFeature";
import Join from "presentation/component/organisms/SectionJoin";

// -- data
import dataBanner from "./dataBanner";
import dataFeature from "./dataFeature";
import dataJoin from "./dataJoin";

const Partner = (props) => {
	return (
		<>
			<Default activeMenu="partner">
				<Banner {...dataBanner} />
				<SectionFeature {...dataFeature} />
				<Join {...dataJoin} />
			</Default>
		</>
	);
};

export default Partner;
