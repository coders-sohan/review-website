import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/educlub.png";

const Header = () => {
	return (
		<header className=" bg-gray-50 border-b border-gray-300">
			<div className="container mx-auto flex flex-wrap py-3 flex-col md:flex-row items-center">
				<NavLink to="/">
					<img src={logo} alt="logo" />
				</NavLink>
				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					<NavLink
						className="mr-5 py-2 px-4 text-base rounded-md font-semibold"
						activeClassName="text-gray-900 bg-red-300"
						to="/home"
					>
						Home
					</NavLink>
					<NavLink
						className="mr-5 py-2 px-4 text-base rounded-md font-semibold"
						activeClassName="text-gray-900 bg-red-300"
						to="/about"
					>
						About
					</NavLink>
					<NavLink
						className="mr-5 py-2 px-4 text-base rounded-md font-semibold"
						activeClassName="text-gray-900 bg-red-300"
						to="/courses"
					>
						Courses
					</NavLink>
					<NavLink
						className="mr-5 py-2 px-4 text-base rounded-md font-semibold"
						activeClassName="text-gray-900 bg-red-300"
						to="/contact"
					>
						Contact
					</NavLink>
				</nav>
				<button className="inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-4 focus:ring-2 ring-indigo-700 ring-offset-2 hover:bg-indigo-700 hover:text-white rounded text-base mt-4 md:mt-0 transition duration-300 ease-linear">
					<span className="mr-2">Login</span>
					<span>
						<i class="fas fa-sign-in-alt text-sm"></i>
					</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
