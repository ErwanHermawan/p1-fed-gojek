// -- templates
import Default from "presentation/component/templates/Default";

// -- components
import Banner from "presentation/component/organisms/Banner";
import SectionScale from "presentation/component/organisms/SectionScale";
import Loyalty from "presentation/component/organisms/Loyalty";
import SectionJoin from "presentation/component/organisms/SectionJoin";

// -- data
import dataBanner from "./dataBanner";
import dataScale from "./dataScale";
import dataJoin from "./dataJoin";
import dataLoyalty from "./dataLoyalty";

const Home = (props) => {
	return (
		<>
			<Default activeMenu="home">
				<Banner {...dataBanner} />
				<SectionScale {...dataScale} />
				<Loyalty data={dataLoyalty} />
				<SectionJoin {...dataJoin} />
			</Default>
		</>
	);
};

export default Home;
