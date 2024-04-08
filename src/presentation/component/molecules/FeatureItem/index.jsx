// -- components
import Button from "presentation/component/atoms/Button";

// -- style
import style from "./style.module.scss";

const FeatureItem = (props) => {
	return (
		<div className={style.item}>
			{props.image && (
				<div className={style.image}>
					<img
						src={props.image}
						alt="feature"
						className={style.imageEl}
						width="149"
						height="32"
					/>
				</div>
			)}
			{props.title && <h3 className={style.title}> {props.title}</h3>}
			<p className={style.description}>{props.description}</p>
			<div className={style.button}>
				<Button href={props.button.to} text={props.button.text} />
			</div>
		</div>
	);
};

export default FeatureItem;
