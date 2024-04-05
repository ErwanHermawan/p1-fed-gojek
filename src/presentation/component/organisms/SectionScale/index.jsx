// -- components
import Button from "presentation/component/atoms/Button";
import ScaleItem from "presentation/component/molecules/ScaleItem";

// -- style
import style from "./style.module.scss";

const SectionScale = (props) => {
	return (
		<div className={style.scale}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.title}</h2>
					<Button to={props.button.to} text={props.button.text} />
				</div>
				<div className={style.list}>
					{props.list.map((val, idx) => (
						<ScaleItem {...val} key={`ks-${idx}`} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionScale;
