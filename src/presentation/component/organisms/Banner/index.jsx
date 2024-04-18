// -- style
import style from "./style.module.scss";

const Banner = (props) => {
	return (
		<div className={style.banner}>
			<div className={style.image}>
				<img src={props.image} alt={props.title} />
			</div>
			{props.embed && (
				<div className={style.iframe}>
					<iframe
						src={`https://www.youtube.com/embed/${props.embed}?enablejsapi=1&amp;version=3&amp;controls=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=${props.embed}&amp;playsinline=1`}
						title={props.title}
					></iframe>
				</div>
			)}
			<div className={style.text}>
				<div className="container">
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
