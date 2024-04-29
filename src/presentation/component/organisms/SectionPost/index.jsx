// import PersonalInfoCard from "presentation/component/molecule/PersonalInfoCard";

import style from "./style.module.scss";

const SectionPost = (props) => {
	const { title, data, error } = props;

	return (
		<div className={style.section}>
			<div className="container">
				<h2 className={style.title}>{title}</h2>
				{data !== null ? (
					<div className={style.list}>
						{data.map((val, idx) => (
							<div className={style.card} key={`pic${idx}`}>
								<h5 className={style.titleCard}>{val.title}</h5>
								<p className={style.body}>{val.body}</p>
							</div>
						))}
					</div>
				) : null}
				{error !== null ? <p className={style.error}>{error}</p> : null}
			</div>
		</div>
	);
};

export default SectionPost;
