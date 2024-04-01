import imgEmployee from "assets/img/dummy/employees.svg";
import imgDriver from "assets/img/dummy/driver-partner.svg";
import imgMerchant from "assets/img/dummy/merchant-partner.svg";

const dataJoin = {
	title: "Join the ride",
	list: [
		{
			img: imgEmployee,
			title: "Employees",
			desc: "Behind Southeast Asia’s only hyper-growth startup are some billion-dollar brains, doing what they do best.",
			btnTo: "employees",
			btnText: "Join as employee",
		},
		{
			img: imgDriver,
			title: "Driver partners",
			desc: "We’re home to 2 million+ driver partners, who enjoy a bundle of health and financial benefits.",
			btnTo: "driver",
			btnText: "Join as a driver partner",
		},
		{
			img: imgMerchant,
			title: "Merchants",
			desc: "We empower 500,000+ merchants with cutting-edge technologies that help them multiply reach and sales.",
			btnTo: "merchant",
			btnText: "Join as a merchant",
		},
	],
};

export default dataJoin;
