// -- components
import BlogItem from "presentation/component/molecules/BlogItem";

// -- style
import style from "./style.module.scss";

const SectionBLog = (props) => {
	return (
		<div className={style.blog}>
			<div className="container">
				<div className={style.head}>
					<h1 className={style.title}>{props.title}</h1>
					<p className={style.description}>{props.description}</p>
				</div>
				<div className={style.list}>
					{props.item.map((val, idx) => (
						<BlogItem {...val} key={`bk-${idx}`} />
					))}
				</div>
				<div className={style.pagination}>
					<a href="/" className={style.paginationLink}>
						<i className="fi-arrow-right"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default SectionBLog;
