// -- components
import Button from "presentation/component/atoms/Button";

// -- style
import style from "./style.module.scss";

const Loyalty = (props) => {
	return (
		<div className={style.loyalty}>
			<div className="container">
				<div className={style.wrapper}>
					<div className={style.image}>
						<img
							src={props.image}
							alt={props.title}
							className={style.imageEl}
						/>
					</div>
					<div className={style.text}>
						<h2 className={style.title}>{props.title}</h2>
						{props.description && (
							<p className={style.description}>{props.description}</p>
						)}
						<Button to={props.button.to} text={props.button.text} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loyalty;
