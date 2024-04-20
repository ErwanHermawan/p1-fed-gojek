// -- components
import Button from "presentation/component/atoms/Button";

// -- style
import style from "./style.module.scss";

const FeatureItem = (props) => {
	let styleName = style.item;
	if (props.section) {
		switch (props.section) {
			case "product":
				styleName += " " + style.white;
				break;
			default:
				styleName = style.item;
		}
	}
	return (
		<div className={styleName}>
			{props.image && (
				<div className={style.image}>
					<img
						src={props.image}
						alt="feature"
						className={style.imageEl}
						height="32"
					/>
				</div>
			)}
			{props.title && <h3 className={style.title}> {props.title}</h3>}
			<p className={style.description}>{props.description}</p>
			<div className={style.button}>
				<Button
					to={props.button.to}
					text={props.button.text}
					variant={props.icon && "arrow"}
					icon={props.icon && "arrow-right"}
				/>
			</div>
		</div>
	);
};

export default FeatureItem;
