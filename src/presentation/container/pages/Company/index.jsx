// -- templates
import Default from "presentation/component/templates/Default";

// -- components
import Banner from "presentation/component/organisms/Banner";
import Pillar from "presentation/component/organisms/SectionPillar";
import Loyalty from "presentation/component/organisms/Loyalty";

// -- data
import dataBanner from "./dataBanner";
import dataPillar from "./dataPillar";
import dataLoyalty from "./dataLoyalty";

const Company = (props) => {
	return (
		<>
			<Default activeMenu="company">
				<Banner {...dataBanner} />
				<Pillar {...dataPillar} />
				<Loyalty {...dataLoyalty} />
			</Default>
		</>
	);
};

export default Company;
