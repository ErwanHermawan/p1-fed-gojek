// -- components
import FeatureItem from "presentation/component/molecules/FeatureItem";

// -- style
import style from "./style.module.scss";

const SectionFeature = (props) => {
	return (
		<div className={style.feature}>
			<div className="container">
				<div className={style.head}>
					<div className={style.title}>{props.title}</div>
					{props.description && (
						<p className={style.description}>{props.description}</p>
					)}
				</div>
				{/* feature list */}
				<div className={style.list}>
					{props.item.map((val, idx) => (
						<FeatureItem {...val} key={`kf-${idx}`} />
					))}
				</div>
				{/* change background image */}
				{props.bg && (
					<div className={style.bg}>
						<img
							src={props.bg.image}
							alt={props.title}
							className={style.bgImg}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
export default SectionFeature;
