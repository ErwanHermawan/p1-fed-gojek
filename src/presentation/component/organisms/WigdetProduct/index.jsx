import { useState, useEffect } from "react";
import formatRupiah from "../../../../core/utils/formatRupiah";

const WidgetProduct = (props) => {
	const basicPrice = 185000;
	const [productNumber, setProductNumber] = useState(1);
	const [totalPrice, setTotalPrice] = useState(0);

	const handleDecrement = () => {
		if (productNumber > 1) {
			setProductNumber((prevVal) => prevVal - 1);
		}
	};

	const handleIncrement = () => {
		setProductNumber((prevVal) => prevVal + 1);
	};

	useEffect(() => {
		setTotalPrice(productNumber * basicPrice);
	}, [productNumber]);

	return (
		<div className="widget-product">
			<div className="container">
				<div className="widget-product__box">
					<div className="widget-product__control">
						<button
							className="widget-product__btn"
							onClick={handleDecrement}
							disabled={productNumber === 1}
						>
							-
						</button>
						<p className="widget-product__number">{productNumber}</p>
						<button className="widget-product__btn" onClick={handleIncrement}>
							+
						</button>
					</div>
					<div className="widget-product__total">
						<p className="widget-product__total__txt">Subtotal</p>
						<p className="widget-product__total__nominal">
							{formatRupiah(totalPrice)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WidgetProduct;
