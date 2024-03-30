// -- components
import Header from "components/Header";
import Footer from "components/Footer";

const Default = (props) => {
	const { children, activeMenu } = props;
	return (
		<>
			<Header activeMenu={activeMenu} />
			<main className="main">{children}</main>
			<Footer />
		</>
	);
};

export default Default;
