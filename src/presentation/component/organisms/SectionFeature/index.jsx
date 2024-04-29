// -- components
import FeatureItem from "presentation/component/molecules/FeatureItem";

// -- style
import style from "./style.module.scss";

const SectionFeature = (props) => {
	const { item, title, description, bg } = props;

	let styleName = style.feature;
	if (bg) {
		switch (bg.color) {
			case "red":
				styleName += " " + style.product + " " + style.red;
				break;
			case "purple":
				styleName += " " + style.product + " " + style.purple;
				break;
			default:
				styleName = style.feature;
		}
	}

	return (
		<div className={styleName}>
			<div className="container">
				<div className={style.head}>
					<div className={style.title}>{title}</div>
					{description && <p className={style.description}>{description}</p>}
				</div>
				{/* feature list */}
				<div className={style.list}>
					{item.map((val, idx) => (
						<FeatureItem
							{...val}
							section={bg && "product"}
							icon={bg && "arrow"}
							key={`kf-${idx}`}
						/>
					))}
				</div>
				{/* change background image */}
				{bg && (
					<div className={style.bg}>
						<img src={bg.image} alt={title} className={style.bgImg} />
					</div>
				)}
			</div>
		</div>
	);
};
export default SectionFeature;
