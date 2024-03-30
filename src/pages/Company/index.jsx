// -- templates
import Default from "templates/Default";

// -- components
import Banner from "components/Banner";
import Pillar from "components/Pillar";
import Loyalty from "components/Loyalty";

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
