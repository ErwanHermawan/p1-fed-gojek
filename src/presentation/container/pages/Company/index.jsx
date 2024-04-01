// -- templates
import Default from "presentation/component/templates/Default";

// -- components
import Banner from "presentation/component/organisms/Banner";
import Pillar from "presentation/component/organisms/Pillar";
import Loyalty from "presentation/component/organisms/Loyalty";

// -- data
import dataBanner from "./dataBanner";
import dataPillar from "./dataPillar";
import dataLoyalty from "./dataLoyalty";

const Company = (props) => {
	return (
		<>
			<Default activeMenu="company">
				<Banner data={dataBanner} />
				<Pillar data={dataPillar} />
				<Loyalty data={dataLoyalty} />
			</Default>
		</>
	);
};

export default Company;
