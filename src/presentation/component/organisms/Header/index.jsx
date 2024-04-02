// -- core
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

// -- data
import dataHeader from "./dataHeader";

const Header = ({ activeMenu }) => {
	return (
		<div className={style.header}>
			<div className="container">
				<div className={style.inner}>
					{/* Logo */}
					<div className={style.logo}>
						<Link to="/" className={style.logoLink}>
							<img
								src={dataHeader.logo}
								alt="Gojek Logo"
								className={style.logoImg}
							/>
						</Link>
					</div>
					{/* Menu */}
					<ul className={style.menu}>
						{dataHeader.menu.map((val, idx) => (
							<li className={style.item} key={`hm-${idx}`}>
								<Link
									to={val.to}
									className={
										val.active === activeMenu
											? `${style.link} ${style.active}`
											: `${style.link}`
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
