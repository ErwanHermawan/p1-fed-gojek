// -- components
import Button from "presentation/component/atoms/Button";

const Scale = (props) => {
	const { data } = props;
	return (
		<div className="scale">
			<div className="container">
				<div className="scale__head">
					<h2 className="scale__title">{data.title}</h2>
					<Button type="link" variant="primary" href={data.button.to}>
						{data.button.text}
					</Button>
				</div>
				<div className="scale__body">
					{data.list.map((v, i) => (
						<div
							className={
								v.bg !== undefined
									? `scale__card scale__card--${v.bg}`
									: `scale__card`
							}
							key={`sc-${i}`}
						>
							<div className="scale__card__img">
								<img
									src={v.image}
									alt={v.description}
									className="scale__card__img__el"
								/>
							</div>
							<div className="scale__card__text">
								<h3 className="scale__card__title">{v.title}</h3>
								<p className="scale__card__desc">{v.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Scale;
