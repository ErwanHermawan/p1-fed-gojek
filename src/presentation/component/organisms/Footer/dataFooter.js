import logo from "core/assets/img/logo/gojek.svg";

const dataFooter = {
	logo: logo,
	nav: [
		{
			title: "Company",
			menu: [
				{
					to: "/about",
					text: "About",
				},
				{
					to: "/products",
					text: "Products",
				},
				{
					to: "/blog",
					text: "Blog",
				},
			],
		},
		{
			title: "Join with us",
			menu: [
				{
					to: "/driver",
					text: "Driver Partner",
				},
				{
					to: "/driver",
					text: "Driver Merchants",
				},
			],
		},
		{
			title: "Careers",
			menu: [
				{
					to: "/students",
					text: "Students",
				},
				{
					to: "/professional",
					text: "Professional",
				},
			],
		},
		{
			title: "Get in touch",
			menu: [
				{
					to: "/help",
					text: "Help Center",
				},
				{
					to: "/location",
					text: "Our Location",
				},
			],
		},
	],
	sosmed: [
		{
			title: "Connect with us",
			icon: [
				{
					to: "facebook.com",
					name: "facebook",
				},
				{
					to: "twitter.com",
					name: "twitter",
				},
				{
					to: "instagram.com",
					name: "instagram",
				},
				{
					to: "youtube.com",
					name: "youtube",
				},
			],
		},
		{
			title: "Download app",
			icon: [
				{
					to: "play-store.com",
					name: "play-store",
				},
				{
					to: "apple.com",
					name: "apple",
				},
			],
		},
	],
	terms: [
		{
			to: "/",
			text: "Privacy Notice",
		},
		{
			to: "/",
			text: "Data Attribution",
		},
		{
			to: "/",
			text: "Terms & Condition",
		},
		{
			to: "/",
			text: "Cookie Setting",
		},
	],
	form: [
		{
			icon: "location",
			input: "",
		},
		{
			icon: "language",
			input: "",
		},
	],
	copyright:
		"© 2023 Gojek | Gojek adalah merek milik PT GoTo Gojek Tokopedia Tbk.Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik Indonesia.",
};

export default dataFooter;
