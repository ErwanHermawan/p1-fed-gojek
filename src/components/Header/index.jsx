import { Link } from "react-router-dom";

import gojekLogo from "assets/img/logo/gojek.svg";

const Header = () => {
	const menuList = [
		{
			to: "/",
			name: "Home",
		},
		{
			to: "/partner",
			name: "Partner with us",
		},
		{
			to: "/careers",
			name: "Careers",
		},
		{
			to: "/company",
			name: "Company",
		},
		{
			to: "/products",
			name: "Products",
		},
		{
			to: "/blog",
			name: "Blog",
		},
		{
			to: "/help",
			name: "Help",
		},
	];

	return (
		<div className="header">
			<div className="container">
				<div className="header__inner">
					{/* Logo */}
					<div className="header__logo">
						<Link to="/" className="header__logo__lnk">
							<img
								src={gojekLogo}
								alt="Gojek Logo"
								className="header__logo__img"
							/>
						</Link>
					</div>
					{/* Menu */}
					<ul className="header__menu">
						{menuList.map((val, idx) => (
							<li className="header__menu__item" key={`hm-${idx}`}>
								<Link to={val.to} className="header__menu__lnk">
									{val.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
