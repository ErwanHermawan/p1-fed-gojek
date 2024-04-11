// -- components
import PillarItem from "presentation/component/molecules/PillarItem";

// -- style
import style from "./style.module.scss";

const SectionPillar = (props) => {
	return (
		<div className={style.pillar}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.title}</h2>
				</div>
				<div className={style.list}>
					{props.list.map((val, idx) => (
						<PillarItem {...val} key={`kp-${idx}`} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionPillar;
