// -- templates
import Default from "templates/Default";

// -- components
import SectionBLog from "components/SectionBlog";

// -- data
import dataBlog from "./dataBlog";

const Blog = (props) => {
	return (
		<>
			<Default activeMenu="blog">
				<SectionBLog data={dataBlog} />
			</Default>
		</>
	);
};

export default Blog;
