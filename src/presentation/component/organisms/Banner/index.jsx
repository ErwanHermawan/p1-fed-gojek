// -- style
import style from "./style.module.scss";

const Banner = ({ data }) => {
	return (
		<div className={style.banner}>
			<div className={style.image}>
				<img src={data.image} alt={data.title} />
			</div>
			<div className="container">
				<div className={style.text}>
					<h1 className={style.title}>{data.title}</h1>
					{data.description !== undefined ? (
						<p className={style.description}>{data.description}</p>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Banner;
