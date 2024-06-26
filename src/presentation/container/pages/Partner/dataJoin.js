import imgEmployee from "core/assets/img/dummy/employees.svg";
import imgDriver from "core/assets/img/dummy/driver-partner.svg";
import imgMerchant from "core/assets/img/dummy/merchant-partner.svg";

const dataJoin = {
	title: "Join the ride",
	list: [
		{
			img: imgEmployee,
			title: "Employees",
			description:
				"Behind Southeast Asia’s only hyper-growth startup are some billion-dollar brains, doing what they do best.",
			button: {
				to: "/employees",
				text: "Join as employee",
			},
		},
		{
			img: imgDriver,
			title: "Driver partners",
			description:
				"We’re home to 2 million+ driver partners, who enjoy a bundle of health and financial benefits.",
			button: {
				to: "/driver",
				text: "Join as a driver partner",
			},
		},
		{
			img: imgMerchant,
			title: "Merchants",
			description:
				"We empower 500,000+ merchants with cutting-edge technologies that help them multiply reach and sales.",
			button: {
				to: "/merchant",
				text: "Join as a merchant",
			},
		},
	],
};

export default dataJoin;
