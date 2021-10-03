import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/educlub.png";

const Footer = () => {
	return (
		<footer className=" bg-gray-100 border-t border-gray-300">
			<div className="container py-4 mx-auto flex items-center sm:flex-row flex-col">
				<NavLink to="/">
					<img src={logo} className="w-32" alt="logo" />
				</NavLink>
				<p className="text-base text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
					© {Date().slice(11, 15)} Educlub — <span>@sohan</span>
				</p>
				<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
					<a
						className="text-indigo-500 text-2xl hover:text-red-400 transition duration-300 ease-linear"
						href="https://facebook.com"
						target="_blank"
						rel="noreferrer noopener"
					>
						<i class="fab fa-facebook-square"></i>
					</a>
					<a
						className="ml-5 text-indigo-500 text-2xl hover:text-red-400 transition duration-300 ease-linear"
						href="https://twitter.com"
						target="_blank"
						rel="noreferrer noopener"
					>
						<i class="fab fa-twitter-square"></i>
					</a>
					<a
						className="ml-5 text-indigo-500 text-2xl hover:text-red-400 transition duration-300 ease-linear"
						href="https://linkedin.com"
						target="_blank"
						rel="noreferrer noopener"
					>
						<i class="fab fa-linkedin"></i>
					</a>
					<a
						className="ml-5 text-indigo-500 text-2xl hover:text-red-400 transition duration-300 ease-linear"
						href="https://github.com"
						target="_blank"
						rel="noreferrer noopener"
					>
						<i class="fab fa-github-square"></i>
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
