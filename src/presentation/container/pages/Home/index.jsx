// -- templates
import Default from "presentation/component/templates/Default";

// -- components
import Banner from "presentation/component/organisms/Banner";
import Scale from "presentation/component/organisms/Scale";
import Loyalty from "presentation/component/organisms/Loyalty";
import Join from "presentation/component/organisms/Join";

// -- data
import dataBanner from "./dataBanner";
import dataScale from "./dataScale";
import dataJoin from "./dataJoin";
import dataLoyalty from "./dataLoyalty";

const Home = (props) => {
	return (
		<>
			<Default activeMenu="home">
				<Banner data={dataBanner} />
				<Scale data={dataScale} />
				<Loyalty data={dataLoyalty} />
				<Join data={dataJoin} />
			</Default>
		</>
	);
};

export default Home;
