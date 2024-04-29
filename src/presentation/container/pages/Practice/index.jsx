import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// -- templates
import Default from "presentation/component/templates/Default";

// -- components
import MovieCarousel from "presentation/component/organisms/MovieCarousel";
import SectionPost from "presentation/component/organisms/SectionPost";

// -- data
import dataMovie from "./dataMovie";

// -- hooks
import useFetch from "core/hooks/useFetch";
const configMovie = {
	arrows: false,
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	draggable: false,
	swipeToSlide: false,
	infinit: true,
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 1000,
	slideToShow: 1,
	slideToScroll: 1,
};

const Practice = (props) => {
	const [startDate, setStartDate] = useState(new Date());
	const holidays = [
		{
			date: "2024-12-25",
			holidayName: "Hari Raya Natal",
			is_national_holiday: true,
		},
		{
			date: "2024-10-5",
			holidayName: "Hari Raya Kuningan",
			is_national_holiday: false,
		},
		{
			date: "2024-09-26",
			holidayName: "Umanis Galungan",
			is_national_holiday: false,
		},
		{
			date: "2024-09-25",
			holidayName: "Hari Raya Galungan",
			is_national_holiday: false,
		},
		{
			date: "2024-09-24",
			holidayName: "Penampahan Galungan",
			is_national_holiday: false,
		},
		{
			date: "2024-09-15",
			holidayName: "Maulid Nabi Muhammad SAW",
			is_national_holiday: true,
		},
		{
			date: "2024-08-17",
			holidayName: "Hari Proklamasi Kemerdekaan RI",
			is_national_holiday: true,
		},
		{
			date: "2024-07-13",
			holidayName: "Hari Saraswati",
			is_national_holiday: false,
		},
		{
			date: "2024-07-7",
			holidayName: "Tahun Baru Islam 1446 Hijriyah",
			is_national_holiday: true,
		},
		{
			date: "2024-06-17",
			holidayName: "Hari Raya Idul Adha 1445 Hijriyah",
			is_national_holiday: true,
		},
		{
			date: "2024-06-1",
			holidayName: "Hari Lahirnya Pancasila",
			is_national_holiday: true,
		},
		{
			date: "2024-05-23",
			holidayName: "Hari Raya Waisak 2568",
			is_national_holiday: true,
		},
		{
			date: "2024-05-9",
			holidayName: "Kenaikan Isa Al Masih",
			is_national_holiday: true,
		},
		{
			date: "2024-05-1",
			holidayName: "Hari Buruh Internasional",
			is_national_holiday: true,
		},
		{
			date: "2024-04-11",
			holidayName: "Hari Raya Idul Fitri 1445 Hijriyah",
			is_national_holiday: true,
		},
		{
			date: "2024-04-10",
			holidayName: "Hari Raya Idul Fitri 1445 Hijriyah",
			is_national_holiday: true,
		},
		{
			date: "2024-03-29",
			holidayName: "Wafat Isa Al Masih",
			is_national_holiday: true,
		},
		{
			date: "2024-03-11",
			holidayName: "Hari Raya Nyepi",
			is_national_holiday: true,
		},
		{
			date: "2024-03-9",
			holidayName: "Hari Raya Kuningan",
			is_national_holiday: false,
		},
		{
			date: "2024-02-29",
			holidayName: "Umanis Galungan",
			is_national_holiday: false,
		},
		{
			date: "2024-02-28",
			holidayName: "Hari Raya Galungan",
			is_national_holiday: false,
		},
		{
			date: "2024-02-27",
			holidayName: "Penampahan Galungan",
			is_national_holiday: false,
		},
		{
			date: "2024-02-10",
			holidayName: "Tahun Baru Imlek 2575 Kongzili",
			is_national_holiday: true,
		},
		{
			date: "2024-02-8",
			holidayName: "Isra Mikraj Nabi Muhammad SAW",
			is_national_holiday: true,
		},
		{
			date: "2024-01-9",
			holidayName: "Hari Siwa Ratri",
			is_national_holiday: false,
		},
		{
			date: "2024-01-1",
			holidayName: "Tahun Baru Masehi",
			is_national_holiday: true,
		},
	];

	const { data: dataPosts } = useFetch(
		"https://jsonplaceholder.typicode.com/posts"
	);
	const datepickerConfig = {
		monthsShown: 2,
		selected: startDate,
		onChange: (date) => setStartDate(date),
		minDate: new Date(),
		holidays: holidays,
		placeholderText: "This display holidays",
	};

	return (
		<>
			<Default activeMenu="practice">
				<MovieCarousel config={configMovie} data={dataMovie} />
				<div className="container">
					<DatePicker {...datepickerConfig} />
				</div>
				<SectionPost title="New Posts" data={dataPosts} />
			</Default>
		</>
	);
};

export default Practice;
