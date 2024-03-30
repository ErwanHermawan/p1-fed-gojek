// --- core
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// - style
import "style/app.scss";

// -- pages
import Home from "pages/Home";
import Partner from "pages/Partner";
import Careers from "pages/Careers";
import Company from "pages/Company";
import Products from "pages/Products";
import Blog from "pages/Blog";
import Help from "pages/Help";
import Login from "pages/Login";
import Register from "pages/Register";
import NotFound from "pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/partner" element={<Partner />}></Route>
				<Route path="/careers" element={<Careers />}></Route>
				<Route path="/company" element={<Company />}></Route>
				<Route path="/products" element={<Products />}></Route>
				<Route path="/blog" element={<Blog />}></Route>
				<Route path="/help" element={<Help />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/not-found" element={<NotFound />}></Route>
				<Route path="*" element={<Navigate to="/not-found" />}></Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
