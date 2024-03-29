// -- components
import Header from "components/Header";
import Footer from "components/Footer";
import SectionBLog from "components/SectionBlog";

// -- data
import dataBlog from "./dataBlog";

const Blog = (props) => {
	return (
		<>
			<Header />
			<SectionBLog data={dataBlog} />
			<Footer />
		</>
	);
};

export default Blog;
