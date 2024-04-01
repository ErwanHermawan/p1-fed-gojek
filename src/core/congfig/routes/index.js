import { Navigate } from "react-router-dom";

// -- pages
import Home from "presentation/container/pages/Home";
import Partner from "presentation/container/pages/Partner";
import Careers from "presentation/container/pages/Careers";
import Company from "presentation/container/pages/Company";
import Products from "presentation/container/pages/Products";
import Blog from "presentation/container/pages/Blog";
import Help from "presentation/container/pages/Help";
// import Login from "presentation/container/pages/Login";
// import Register from "presentation/container/pages/Register";
import NotFound from "presentation/container/pages/NotFound";

const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/partner",
		element: <Partner />,
	},
	{
		path: "/careers",
		element: <Careers />,
	},
	{
		path: "/company",
		element: <Company />,
	},
	{
		path: "/products",
		element: <Products />,
	},
	{
		path: "/blog",
		element: <Blog />,
	},
	{
		path: "/help",
		element: <Help />,
	},
	{
		path: "/not-found",
		element: <NotFound />,
	},
	{
		path: "*",
		element: <Navigate to="/not-found" />,
	},
];

export default routes;
