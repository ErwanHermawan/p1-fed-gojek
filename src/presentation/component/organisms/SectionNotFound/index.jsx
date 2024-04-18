// -- image
import image from "core/assets/img/dummy/not-found.jpg";

// -- components
import Button from "presentation/component/atoms/Button";

// -- style
import style from "./style.module.scss";

const SectionNotFound = () => {
	return (
		<div className={style.notfound}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.image}>
						<img src={image} alt="Oops! Page is unavailable :(" />
					</div>
					<div className={style.text}>
						<h2 className={style.title}>Oops! Page is unavailable :(</h2>
						<p className={style.description}>
							But don't be sad #ThereIsAlwaysAWay for you!
						</p>
						<div className={style.button}>
							<Button to="/" text="Back to homepage" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionNotFound;
