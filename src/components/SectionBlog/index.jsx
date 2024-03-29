const SectionBLog = ({ data }) => {
	return (
		<div className="blog">
			<div className="container">
				<div className="blog__head">
					<h1 className="blog__title">{data.title}</h1>
					<p className="blog__description">{data.description}</p>
				</div>
				<div className="blog__list">
					{data.item.map((v, i) => (
						<div className="blog__item" key={`bk-${i}`}>
							<a href={v.to} className="blog__link">
								{v.title}
							</a>
							<div className="blog__image">
								<img src={v.image} alt={v.title} className="blog__image__el" />
							</div>
							<div className="blog__text">
								<h3 className="blog__text__title">{v.title}</h3>
								<p className="blog__text__date">{v.date}</p>
							</div>
						</div>
					))}
				</div>
				<div className="blog__paging">
					<a href="/" className="blog__paging__link">
						<i className="fi-arrow-right"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default SectionBLog;
