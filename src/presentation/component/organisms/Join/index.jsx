// -- components
import Button from "presentation/component/atoms/Button";

const Join = (props) => {
	const { data } = props;
	return (
		<div className="join">
			<div className="container">
				<div className="join__head">
					<h2 className="join__title">{data.title}</h2>
				</div>
				<div className="join__body">
					{data.list.map((val, idx) => (
						<div className="join__card" key={`jk-${idx}`}>
							{/* image */}
							<div className="join__image">
								<img src={val.img} alt={val.title} className="join__img__el" />
							</div>
							{/* text */}
							<div className="join__text">
								<h3 className="join__text__title">{val.title}</h3>
								<p className="join__text__desc">{val.desc}</p>
								<div className="join__button">
									<Button type="link" variant="primary" href={val.btnTo}>
										{val.btnText}
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Join;
