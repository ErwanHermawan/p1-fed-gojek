import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

// -- data
import dataFooter from "./dataFooter";

const Footer = () => {
	return (
		<div className={style.footer}>
			<div className="container">
				{/* top footer */}
				<div className={style.top}>
					{/* logo */}
					<div className={style.logo}>
						<img src={dataFooter.logo} alt="Gojek" className={style.logoImg} />
					</div>
					<div className={style.list}>
						{/* list menu navigation */}
						{dataFooter.nav.map((vN, iL) => (
							<div className={style.nav} key={`lk-${iL}`}>
								<h4 className={style.title}>{vN.title}</h4>
								<ul className={style.menu}>
									{vN.menu.map((vM, iM) => (
										<li className={style.item} key={`lm-${iM}`}>
											<Link href={vM.to} className={style.link}>
												{vM.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
						{/* list menu sosmed */}
						<div className={style.sosmed}>
							{dataFooter.sosmed.map((vS, iS) => (
								<div className={style.nav} key={`lk-${iS}`}>
									<h4 className={style.title}>{vS.title}</h4>
									<ul className={style.menu}>
										{vS.icon.map((vC, iC) => (
											<li className={style.item} key={`lm-${iC}`}>
												<Link href={vC.to} className={style.link}>
													<i className={`fi-${vC.name}`}></i>
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* middle footer */}
				<div className={style.middle}>
					<div className={style.list}>
						{/* term & condition */}
						<ul className={style.menu}>
							{dataFooter.terms.map((vT, iT) => (
								<li className={style.item} key={`lt-${iT}`}>
									<a href={vT.to} className={style.link}>
										{vT.text}
									</a>
								</li>
							))}
						</ul>
						{/* form */}
						{dataFooter.form.map((vF, iF) => (
							<div className={style.form} key={`kf-${iF}`}>
								<i className={`fi-${vF.icon}`}></i>
								<input type="text" className={style.input} />
							</div>
						))}
					</div>
				</div>
				{/* bottom footer */}
				<div className={style.bottom}>
					<p className={style.copyright}>{dataFooter.copyright}</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
