import { Link } from "react-router-dom";

import gojekLogo from "assets/img/logo/gojek.svg";

const Header = ({ activeMenu }) => {
	const menuList = [
		{
			to: "/",
			name: "Home",
			active: "home",
		},
		{
			to: "/partner",
			name: "Partner with us",
			active: "partner",
		},
		{
			to: "/careers",
			name: "Careers",
			active: "careers",
		},
		{
			to: "/company",
			name: "Company",
			active: "company",
		},
		{
			to: "/products",
			name: "Products",
			active: "products",
		},
		{
			to: "/blog",
			name: "Blog",
			active: "blog",
		},
		{
			to: "/help",
			name: "Help",
			active: "help",
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
								<Link
									to={val.to}
									className={
										val.active === activeMenu
											? "header__menu__link active"
											: "header__menu__link"
									}
								>
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
