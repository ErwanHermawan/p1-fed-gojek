// -- components
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import ProductList from "components/ProductList";
import Loyalty from "components/Loyalty";
import Feature from "components/Feature";

// -- data
import dataBanner from "./dataBanner";
import dataProductList from "./dataProductList";
import dataFeatureShopping from "./dataFeatureShopping";
import dataFeatureBusiness from "./dataFeatureBusiness";
import dataLoyalty from "./dataLoyalty";

const Product = (props) => {
	return (
		<>
			<Header activeMenu="products" />
			<Banner data={dataBanner} />
			<ProductList data={dataProductList} />
			<Loyalty data={dataLoyalty} />
			<Feature data={dataFeatureShopping} />
			<Feature data={dataFeatureBusiness} />
			<Footer />
		</>
	);
};

export default Product;
