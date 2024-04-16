// -- style
import style from "./style.module.scss";

const HeadlineBanner = (props) => {
	return (
		<div className={style.headline}>
			<div className="container">
				<div className={style.inner}>
					<h1 className={style.title}>{props.title}</h1>
					<div className={style.image}>
						<img
							src={props.image}
							alt={props.title}
							className={style.imageleft}
						/>
						<img
							src={props.image}
							alt={props.title}
							className={style.imageright}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeadlineBanner;
