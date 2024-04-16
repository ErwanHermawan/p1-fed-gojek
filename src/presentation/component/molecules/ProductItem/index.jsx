// --- style
import style from "./style.module.scss";

const ProductItem = (props) => {
	const { item, title, description, bg } = props;

	let styleName = style.card;
	switch (bg) {
		case "green":
			styleName += " " + style.green;
			break;
		case "blue":
			styleName += " " + style.blue;
			break;
		case "red":
			styleName += " " + style.red;
			break;
		case "purple":
			styleName += " " + style.purple;
			break;
		default:
			styleName = style.card;
	}

	return (
		<div className={styleName}>
			<ul className={style.list}>
				{item.map((val, idx) => (
					<li className={style.item} key={`ik-${idx}`}>
						<img src={val.image} alt="" className={style.image} height="28" />
					</li>
				))}
			</ul>
			<div className={style.text}>
				<h3 className={style.title}>{title}</h3>
				<p className={style.description}>{description}</p>
			</div>
		</div>
	);
};

export default ProductItem;
