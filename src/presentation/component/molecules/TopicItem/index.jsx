// -- style
import style from "./style.module.scss";

const TopicItem = (props) => {
	return (
		<div className={style.item}>
			<a href={props.to} className={style.link}>
				{props.title}
			</a>
			<div className={style.box}>
				<img src={props.logo} alt={props.title} className={style.logo} />
				<p className={style.title}>{props.title}</p>
			</div>
		</div>
	);
};

export default TopicItem;
