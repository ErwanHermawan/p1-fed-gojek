// -- templates
import Default from "presentation/component/templates/Default";

// -- components
import Banner from "presentation/component/organisms/Banner";
import Feature from "presentation/component/organisms/Feature";
import Join from "presentation/component/organisms/Join";

// -- data
import dataBanner from "./dataBanner";
import dataFeature from "./dataFeature";
import dataJoin from "./dataJoin";

const Partner = (props) => {
	return (
		<>
			<Default activeMenu="partner">
				<Banner data={dataBanner} />
				<Feature data={dataFeature} />
				<Join data={dataJoin} />
			</Default>
		</>
	);
};

export default Partner;
