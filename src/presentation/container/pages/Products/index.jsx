// -- templates
import Default from "presentation/component/templates/Default";

// -- components
import Banner from "presentation/component/organisms/Banner";
import SectionProduct from "presentation/component/organisms/SectionProduct";
import Loyalty from "presentation/component/organisms/Loyalty";
import SectionFeature from "presentation/component/organisms/SectionFeature";

// -- data
import dataBanner from "./dataBanner";
import dataProductList from "./dataProductList";
import dataFeatureShopping from "./dataFeatureShopping";
import dataFeatureBusiness from "./dataFeatureBusiness";
import dataLoyalty from "./dataLoyalty";

const Product = (props) => {
	return (
		<>
			<Default activeMenu="products">
				<Banner {...dataBanner} />
				<SectionProduct data={dataProductList} />
				<Loyalty {...dataLoyalty} />
				<SectionFeature {...dataFeatureShopping} />
				<SectionFeature {...dataFeatureBusiness} />
			</Default>
		</>
	);
};

export default Product;
