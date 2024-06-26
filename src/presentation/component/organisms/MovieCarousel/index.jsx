// -- slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "./style.module.scss";

// -- slick
import React from "react";
import Slider from "react-slick";

const MovieCarousel = (props) => {
	const { data, config } = props;

	return (
		<div className="apple-tv">
			<div className={style.appleTVContainer}>
				<Slider {...config}>
					{data.map((val, idx) => (
						<div key={`sc-${idx}`} className={style.appleTVItem}>
							<a href={val.to} className={style.appleTVLink}>
								{val.title}
							</a>
							<img
								src={val.image}
								alt={val.title}
								className={style.appleTVImage}
							/>
							<div className="apple-tv__text">
								<button className={style.appleTVBtn}>Stream now</button>
								<h3 className={style.appleTVTitle}>
									<strong>{val.category}</strong> &middot; {val.title}
								</h3>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default MovieCarousel;
