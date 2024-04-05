const SectionTopic = ({ data }) => {
	return (
		<div className="topic">
			<div className="container">
				<div className="topic__head">
					<h2 className="topic__title">{data.title}</h2>
				</div>
				<div className="topic__list">
					{data.item.map((v, i) => (
						<div className="topic__item" key={`tk-${i}`}>
							<a href={v.to} className="topic__link">
								{v.title}
							</a>
							<div className="topic__box">
								<img src={v.logo} alt={v.title} className="topic__logo" />
								<p className="topic__item__title">{v.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionTopic;
