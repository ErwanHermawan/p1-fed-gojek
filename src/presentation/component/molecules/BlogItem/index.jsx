// -- style
import style from "./style.module.scss";

const BlogItem = (props) => {
	return (
		<div className={style.item}>
			<a href={props.to} className={style.link}>
				{props.title}
			</a>
			<div className={style.image}>
				<img src={props.image} alt={props.title} className={style.el} />
			</div>
			<div className={style.text}>
				<h3 className={style.title}>{props.title}</h3>
				<p className={style.date}>{props.date}</p>
			</div>
		</div>
	);
};

export default BlogItem;
