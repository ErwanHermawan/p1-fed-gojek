const ProductList = ({ data }) => {
	return (
		<div className="product-list">
			<div className="container">
				<div className="product-list__wrapper">
					{data.map((v, i) => (
						<div
							className={
								v.bg !== undefined
									? `product-list__card product-list__card--${v.bg}`
									: `product-list__card`
							}
							key={`pk-${i}`}
						>
							<ul className="product-list__list">
								{v.item.map((vI, iI) => (
									<li className="product-list__item" key={`ik-${iI}`}>
										<img
											src={vI.image}
											alt=""
											className="product-list__image"
											height="28"
										/>
									</li>
								))}
							</ul>
							<div className="product-list__text">
								<h3 className="product-list__title">{v.title}</h3>
								<p className="product-list__description">{v.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductList;
