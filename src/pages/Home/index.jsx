// -- templates
import Default from "templates/Default";

// -- components
import Banner from "components/Banner";
import Scale from "components/Scale";
import Loyalty from "components/Loyalty";
import Join from "components/Join";

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
