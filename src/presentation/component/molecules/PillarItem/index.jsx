// -- style
import style from "./style.module.scss";

const PillarItem = (props) => {
	const { image, title, description, bg } = props;

	let styleName = style.item;
	switch (bg) {
		case "green":
			styleName += " " + style.green;
			break;
		case "red":
			styleName += " " + style.red;
			break;
		case "orange":
			styleName += " " + style.orange;
			break;
		default:
			styleName = style.item;
	}
	return (
		<div className={styleName}>
			<div className={style.text}>
				<div className={style.title}>{title}</div>
				<p className={style.description}>{description}</p>
			</div>
			<div className={style.image}>
				<img src={image} alt={title} className={style.imageEl} />
			</div>
		</div>
	);
};

export default PillarItem;
