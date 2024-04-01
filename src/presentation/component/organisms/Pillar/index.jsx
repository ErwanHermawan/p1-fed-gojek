const Pillar = ({ data }) => {
	return (
		<div className="pillar">
			<div className="container">
				<div className="pillar__head">
					<h2 className="pillar__title">{data.title}</h2>
				</div>
				<div className="pillar__list">
					{data.list.map((v, i) => (
						<div
							className={
								v.bg !== undefined
									? `pillar__item pillar__item--${v.bg}`
									: `pillar__item`
							}
							key={`kp-${i}`}
						>
							<div className="pillar__text">
								<div className="pillar__text__title">{v.title}</div>
								<p className="pillar__text__description">{v.description}</p>
							</div>
							<div className="pillar__image">
								<img
									src={v.image}
									alt={v.title}
									className="pillar__image__item"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Pillar;
