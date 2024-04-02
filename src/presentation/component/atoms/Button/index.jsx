// -- core
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

const Button = (props) => {
	const { to, text, type, icon } = props;

	return (
		<>
			{to && (
				<Link to={to} className={style.btn}>
					{text}
					{icon && <i className={`fi-${icon}`}></i>}
				</Link>
			)}
			{!to && (
				<button type={type} className={style.btn}>
					{text}
					{icon && <i className={`fi-${icon}`}></i>}
				</button>
			)}
		</>
	);
};

export default Button;
