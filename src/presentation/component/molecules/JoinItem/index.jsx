// -- components
import Button from "presentation/component/atoms/Button";

// -- style
import style from "./style.module.scss";

const JoinItem = (props) => {
	return (
		<div className={style.card}>
			{/* image */}
			<div className={style.image}>
				<img
					src={props.img}
					alt={props.title}
					className={style.imageEl}
					width={80}
					height={80}
				/>
			</div>
			{/* text */}
			<div className={style.text}>
				<h3 className={style.title}>{props.title}</h3>
				<p className={style.description}>{props.description}</p>
				<div className={style.button}>
					<Button to={props.btnTo} text={props.btnText} />
				</div>
			</div>
		</div>
	);
};

export default JoinItem;
