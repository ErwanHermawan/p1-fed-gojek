import imgscDownload from "assets/img/dummy/app-download.png";
import imgscDriver from "assets/img/dummy/driver-partner.png";
import imgscFood from "assets/img/dummy/merchants.png";
import imgscChart from "assets/img/dummy/jump-download.png";

const dataScale = {
	title: "We scale like a dream",
	button: {
		to: "/",
		text: "Scale with us",
	},
	list: [
		{
			image: imgscDownload,
			title: "190 million+",
			description: "app downloads since 2015",
			bg: "green",
		},
		{
			image: imgscDriver,
			title: "2 million+",
			description: "driver partners",
			bg: "purple",
		},
		{
			image: imgscFood,
			title: "900,000+",
			description: "GoFood merchants",
			bg: "orange",
		},
		{
			image: imgscChart,
			title: "2.448x",
			description: "jump in downloads from 2015 to 2020",
			bg: "blue",
		},
	],
};

export default dataScale;
