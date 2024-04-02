// -- style
import style from "./style.module.scss";

const Banner = (props) => {
	return (
		<div className={style.banner}>
			<div className={style.image}>
				<img src={props.image} alt={props.title} />
			</div>
			<div className="container">
				<div className={style.text}>
					<h1 className={style.title}>{props.title}</h1>
					{props.description && (
						<p className={style.description}>{props.description}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Banner;
