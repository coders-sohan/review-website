import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="container mx-auto">
			<div className="py-20">
				<img
					className="mx-auto"
					src="https://education-review-website-img.netlify.app/error.png"
					alt="404 Error!!!"
				/>
				<h1 className="text-9xl text-indigo-500 font-extrabold text-center mt-5">
					Error !!!
				</h1>
				<p className="text-xl font-semibold text-red-400 text-center mt-10">
					The page you're looking for is not available
				</p>
				<div className="text-center mt-20">
					{/* go to home page */}
					<NavLink
						className="py-3 px-6 font-semibold text-xl bg-indigo-500 text-white hover:bg-indigo-700 rounded-md focus:ring-2 ring-offset-2 ring-indigo-500 transition duration-300 ease-linear"
						to="/home"
					>
						Go to home page
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
