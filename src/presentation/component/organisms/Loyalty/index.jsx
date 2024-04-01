// -- components
import Button from "presentation/component/atoms/Button";

const Loyalty = (props) => {
	const { data } = props;
	return (
		<div className="loyalty">
			<div className="container">
				<div className="loyalty__wrapper">
					<div className="loyalty__img">
						<img
							src={data.image}
							alt={data.title}
							className="loyalty__img__el"
						/>
					</div>
					<div className="loyalty__text">
						<h2 className="loyalty__title">{data.title}</h2>
						{data.desc !== undefined ? (
							<p className="loyalty__desc">{data.desc}</p>
						) : null}
						<Button type="link" variant="primary" href={data.btnTo}>
							{data.btnText}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loyalty;
