// -- templates
import Default from "presentation/component/templates/Default";

// -- components
import Banner from "presentation/component/organisms/Banner";
import ProductList from "presentation/component/organisms/ProductList";
import Loyalty from "presentation/component/organisms/Loyalty";
import Feature from "presentation/component/organisms/SectionFeature";

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
				<Banner data={dataBanner} />
				<ProductList data={dataProductList} />
				<Loyalty data={dataLoyalty} />
				<Feature data={dataFeatureShopping} />
				<Feature data={dataFeatureBusiness} />
			</Default>
		</>
	);
};

export default Product;
