// -- components
import Button from "components/Button";

const Feature = ({ data }) => {
	return (
		<div
			className={
				data.bg !== undefined
					? `feature feature--product feature--${data.bg.color}`
					: "feature"
			}
		>
			<div className="container">
				<div className="feature__head">
					<div className="feature__title">{data.title}</div>
					{data.description !== undefined ? (
						<p className="feature__description">{data.description}</p>
					) : null}
				</div>
				<div className="feature__list">
					{data.item.map((v, i) => (
						<div className="feature__item" key={`kc-${i}`}>
							{v.image !== undefined ? (
								<div className="feature__image">
									<img
										src={v.image}
										alt="feature"
										className="feature__img__el"
										width="149"
										height="32"
									/>
								</div>
							) : null}
							{v.title !== undefined ? (
								<h3 className="feature__item__title"> {v.title}</h3>
							) : null}
							<p className="feature__description">{v.description}</p>
							<div className="feature__button">
								<Button
									type="link"
									variant={
										v.button.variant !== undefined
											? v.button.variant
											: "primary"
									}
									href={v.button.to}
								>
									{v.button.text} <i className="fi-arrow-right"></i>
								</Button>
							</div>
						</div>
					))}
				</div>
				{/* change background image */}
				{data.bg !== undefined ? (
					<div className="feature__bg">
						<img
							src={data.bg.image}
							alt={data.title}
							className="feature__bg__el"
						/>
					</div>
				) : null}
			</div>
		</div>
	);
};
export default Feature;
