import TopicItem from "presentation/component/molecules/TopicItem";

// -- style
import style from "./style.module.scss";

const SectionTopic = (props) => {
	return (
		<div className={style.topic}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.title}</h2>
				</div>
				<div className={style.list}>
					{props.item.map((val, idx) => (
						<TopicItem {...val} key={`tk-${idx}`} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionTopic;
