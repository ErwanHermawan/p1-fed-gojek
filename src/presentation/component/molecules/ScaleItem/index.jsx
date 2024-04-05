import style from "./style.module.scss";

const ScaleItem = (props) => {
	const { image, title, description, bg } = props;

	let styleName = style.card;
	switch (bg) {
		case "green":
			styleName += " " + style.green;
			break;
		case "purple":
			styleName += " " + style.purple;
			break;
		case "orange":
			styleName += " " + style.orange;
			break;
		case "blue":
			styleName += " " + style.blue;
			break;
		default:
			styleName = style.card;
	}

	return (
		<div className={styleName}>
			<div className={style.image}>
				<img src={image} alt={description} className={style.imageEl} />
			</div>
			<div className={style.text}>
				<h3 className={style.title}>{title}</h3>
				<p className={style.description}>{description}</p>
			</div>
		</div>
	);
};
export default ScaleItem;
