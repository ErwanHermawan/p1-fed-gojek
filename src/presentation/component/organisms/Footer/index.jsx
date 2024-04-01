// import { Link } from "react-router-dom";

import gojekLogo from "assets/img/logo/gojek.svg";

import "./style.module.scss";

const data = {
	logo: gojekLogo,
	nav: [
		{
			title: "Company",
			menu: [
				{
					to: "/about",
					text: "About",
				},
				{
					to: "/products",
					text: "Products",
				},
				{
					to: "/blog",
					text: "Blog",
				},
			],
		},
		{
			title: "Join with us",
			menu: [
				{
					to: "/driver",
					text: "Driver Partner",
				},
				{
					to: "/driver",
					text: "Driver Merchants",
				},
			],
		},
		{
			title: "Careers",
			menu: [
				{
					to: "/students",
					text: "Students",
				},
				{
					to: "/professional",
					text: "Professional",
				},
			],
		},
		{
			title: "Get in touch",
			menu: [
				{
					to: "/help",
					text: "Help Center",
				},
				{
					to: "/location",
					text: "Our Location",
				},
			],
		},
	],
	sosmed: [
		{
			title: "Connect with us",
			icon: [
				{
					to: "facebook.com",
					name: "facebook",
				},
				{
					to: "twitter.com",
					name: "twitter",
				},
				{
					to: "instagram.com",
					name: "instagram",
				},
				{
					to: "youtube.com",
					name: "youtube",
				},
			],
		},
		{
			title: "Download app",
			icon: [
				{
					to: "play-store.com",
					name: "play-store",
				},
				{
					to: "apple.com",
					name: "apple",
				},
			],
		},
	],
	terms: [
		{
			to: "/",
			text: "Privacy Notice",
		},
		{
			to: "/",
			text: "Data Attribution",
		},
		{
			to: "/",
			text: "Terms & Condition",
		},
		{
			to: "/",
			text: "Cookie Setting",
		},
	],
	copyright:
		"© 2023 Gojek | Gojek adalah merek milik PT GoTo Gojek Tokopedia Tbk.Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik Indonesia.",
};

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer__top">
					<div className="footer__logo">
						<img src={data.logo} alt="Gojek" className="footer__logo__el" />
					</div>
					<div className="footer__list">
						{/* list menu navigation */}
						{data.nav.map((vN, iL) => (
							<div className="footer__nav" key={`lk-${iL}`}>
								<h4 className="footer__nav__title">{vN.title}</h4>
								<ul className="footer__nav__menu">
									{vN.menu.map((vM, iM) => (
										<li className="footer__nav__menu__item" key={`lm-${iM}`}>
											<a href={vM.to} className="footer__nav__menu__link">
												{vM.text}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
						{/* list menu sosmed */}
						<div className="footer__sosmed">
							{data.sosmed.map((vS, iS) => (
								<div className="footer__sosmed__list" key={`lk-${iS}`}>
									<h4 className="footer__sosmed__title">{vS.title}</h4>
									<ul className="footer__sosmed__menu">
										{vS.icon.map((vC, iC) => (
											<li
												className="footer__sosmed__menu__item"
												key={`lm-${iC}`}
											>
												<a href={vC.to} className="footer__sosmed__menu__link">
													<i className={`fi-${vC.name}`}></i>
												</a>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* <div className="footer__middle">
					<div className="footer__list">
						<ul className="footer__terms">
							{data.terms.map((vT, iT) => (
								<li className="footer__terms__item" key={`lt-${iT}`}>
									<a href={vT.to} className="footer__terms__link">
										{vT.text}
									</a>
								</li>
							))}
						</ul>
						<div className="footer__form">
							<div className="footer__form__icon">
								<i className="fi-location"></i>
							</div>
							<div className="footer__form__input">
								<input
									type="text"
									className="footer__form__input__el"
									value="Indonesia"
								/>
							</div>
						</div>
						<div className="footer__form">
							<div className="footer__form__icon">
								<i className="fi-language"></i>
							</div>
							<div className="footer__form__input">
								<input
									type="text"
									className="footer__form__input__el"
									value="English"
								/>
							</div>
						</div>
					</div>
				</div> */}
				<div className="footer__bottom">
					<p className="footer__copyright">{data.copyright}</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
