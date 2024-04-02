// -- components
import JoinItem from "presentation/component/molecules/JoinItem";

// -- style
import style from "./style.module.scss";

const SectionJoin = (props) => {
	return (
		<div className={style.join}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.title}</h2>
				</div>
				<div className={style.list}>
					{props.list.map((val, idx) => (
						<JoinItem {...val} key={`kj-${idx}`} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionJoin;
