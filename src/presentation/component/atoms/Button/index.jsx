// -- core
import { Link } from "react-router-dom";

const Button = (props) => {
	const { variant = "primary", ghost, children, type, icon } = props;

	let variantStyle = "btn ";
	if (variant === "primary") {
		variantStyle += "btn-primary";
	} else if (variant === "text") {
		variantStyle += "btn-text";
	}

	if (ghost) {
		variantStyle += "btn-ghost";
	}

	if (type) {
		return (
			<Link {...props} className={variantStyle}>
				{children}
				{icon !== undefined ? <i className="fi-arrow-right"></i> : null}
			</Link>
		);
	}

	return (
		<button {...props} className={variantStyle}>
			{children}
		</button>
	);
};

export default Button;
