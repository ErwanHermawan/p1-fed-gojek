const Banner = (props) => {
	const { data } = props;

	return (
		<div className="banner">
			<div className="banner__img">
				<img src={data.image} alt="Banner" className="banner__img__el" />
			</div>
			<div className="banner__text">
				<h1 className="banner__title">{data.title}</h1>
				{data.description !== undefined ? (
					<p className="banner__desc">{data.description}</p>
				) : null}
			</div>
		</div>
	);
};

export default Banner;
