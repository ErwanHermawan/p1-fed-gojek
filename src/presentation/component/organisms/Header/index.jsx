// -- core
import { Link } from "react-router-dom";

import gojekLogo from "assets/img/logo/gojek.svg";

// -- style
import style from "./style.module.scss";

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
		<div className={style.header}>
			<div className="container">
				<div className={style.headerInner}>
					{/* Logo */}
					<div className={style.headerLogo}>
						<Link to="/" className={style.headerLogoLink}>
							<img
								src={gojekLogo}
								alt="Gojek Logo"
								className={style.headerLogoImage}
							/>
						</Link>
					</div>
					{/* Menu */}
					<ul className={style.headerMenu}>
						{menuList.map((val, idx) => (
							<li className={style.headerMenuItem} key={`hm-${idx}`}>
								<Link
									to={val.to}
									className={
										val.active === activeMenu
											? `${style.headerMenuLink} ${style.active}`
											: `${style.headerMenuLink}`
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
