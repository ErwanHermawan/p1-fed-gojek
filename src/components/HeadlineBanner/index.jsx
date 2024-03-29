const HeadlineBanner = ({ data }) => {
	return (
		<div className="hb">
			<div className="container">
				<div className="hb__wrapper">
					<h1 className="hb__title">{data.title}</h1>
					<div className="hb__image">
						<img
							src={data.image}
							alt={data.title}
							className="hb__image__left"
						/>
						<img
							src={data.image}
							alt={data.title}
							className="hb__image__right"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeadlineBanner;
