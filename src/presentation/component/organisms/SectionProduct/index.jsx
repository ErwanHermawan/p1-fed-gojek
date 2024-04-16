// --- components
import ProductItem from "presentation/component/molecules/ProductItem";

// --- style
import style from "./style.module.scss";

const SectionProduct = ({ data }) => {
	return (
		<div className={style.section}>
			<div className="container">
				<div className={style.list}>
					{data.map((val, idx) => (
						<ProductItem {...val} key={`kp-${idx}`} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SectionProduct;
