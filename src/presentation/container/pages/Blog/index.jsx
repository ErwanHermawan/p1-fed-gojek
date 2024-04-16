// -- templates
import Default from "presentation/component/templates/Default";

// -- components
import SectionBLog from "presentation/component/organisms/SectionBlog";

// -- data
import dataBlog from "./dataBlog";

const Blog = (props) => {
	return (
		<>
			<Default activeMenu="blog">
				<SectionBLog {...dataBlog} />
			</Default>
		</>
	);
};

export default Blog;
