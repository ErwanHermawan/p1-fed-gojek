import gofood from "core/assets/img/dummy/gofood-default.svg";
import gomart from "core/assets/img/dummy/gomart-default.svg";
import gomed from "core/assets/img/dummy/gomed-default.svg";
import goshop from "core/assets/img/dummy/goshop-default.svg";
import bgshopping from "core/assets/img/dummy/product-bg-shopping.svg";

const dataFeatureShopping = {
	title: "Food & Shopping",
	description:
		"Fill your cart with food, groceries, medicines, electronics and more. Without stepping out.",
	bg: {
		color: "red",
		image: bgshopping,
	},
	item: [
		{
			image: gofood,
			description: "Hungry? Order in.",
			button: {
				to: "gofood",
				text: "Know more",
				variant: "text",
			},
		},
		{
			image: gomart,
			description: "Groceries delivered from stores nearby.",
			button: {
				to: "gomart",
				text: "Know more",
				variant: "text",
			},
		},
		{
			image: gomed,
			description: "Chat with doctors, order in medicines.",
			button: {
				to: "gomed",
				text: "Know more",
				variant: "text",
			},
		},
		{
			image: goshop,
			description: "Buy anything from anywhere",
			button: {
				to: "goshop",
				text: "Know more",
				variant: "text",
			},
		},
	],
};

export default dataFeatureShopping;
