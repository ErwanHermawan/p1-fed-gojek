import gobiz from "core/assets/img/dummy/gobiz-default.svg";
import midtrans from "core/assets/img/dummy/midtrans-default.svg";
import moka from "core/assets/img/dummy/moka-default.svg";
import selly from "core/assets/img/dummy/selly-default.svg";
import bgbusiness from "core/assets/img/dummy/product-bg-business.svg";

const dataFeatureBusiness = {
	title: "Business",
	description: "Manage your restaurants, run ads, create promos, and do more.",
	bg: {
		color: "purple",
		image: bgbusiness,
	},
	item: [
		{
			image: gobiz,
			description: "A Gojek app to run and grow your business.",
			button: {
				to: "gobiz",
				text: "Know more",
				variant: "text",
			},
		},
		{
			image: midtrans,
			description: "Accept payments and make payouts easily",
			button: {
				to: "midtrans",
				text: "Know more",
				variant: "text",
			},
		},
		{
			image: moka,
			description: "Cloud based POS that made selling easy",
			button: {
				to: "moka",
				text: "Know more",
				variant: "text",
			},
		},
		{
			image: selly,
			description: "Keyboard for online sellers",
			button: {
				to: "selly",
				text: "Know more",
				variant: "text",
			},
		},
	],
};

export default dataFeatureBusiness;
