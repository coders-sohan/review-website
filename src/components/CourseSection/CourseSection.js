import React from "react";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";

const CourseSection = (props) => {
	const { name, price, student, star, category, desc, img } = props.course;
	return (
		<>
			<div className="p-4 md:w-1/3">
				<div className="h-full border-2 border-gray-300 hover:border-indigo-600 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-linear">
					<img
						className="lg:h-60 md:h-36 w-full object-cover object-center"
						src={img}
						alt={name}
					/>
					<div className="p-6">
						<div className="flex justify-between items-center mb-3">
							<h1 className="tracking-widest text-sm title-font font-semibold text-red-500">
								{category}
							</h1>
							<span className="text-sm text-yellow-500">
								<Rating
									initialRating={star}
									emptySymbol="far fa-star"
									fullSymbol="fas fa-star"
									readonly
								></Rating>
								<span className="ml-3 text-sm font-semibold text-gray-900">
									({star}/5)
								</span>
							</span>
						</div>
						<h1 className="title-font text-xl font-medium text-gray-900 mb-3">
							{name}
						</h1>
						<p className="leading-relaxed mb-3">{desc}</p>
						<h1 className="text-xl font-semibold py-1">
							<span className="text-red-500">Price:</span>
							<span className="text-gray-600 ml-3">${price}</span>
						</h1>
						<div className="flex items-center flex-wrap mt-6">
							<NavLink
								className="inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-4 focus:ring-2 ring-indigo-700 ring-offset-2 hover:bg-indigo-700 hover:text-white rounded text-base mt-4 md:mt-0 transition duration-300 ease-linear"
								to="/courses"
							>
								<span className="mr-2">Learn More</span>
								<span>
									<i className="fas fa-arrow-right text-sm"></i>
								</span>
							</NavLink>
							<span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
								<svg
									className="w-4 h-4 mr-1"
									stroke="currentColor"
									strokeWidth="2"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									viewBox="0 0 24 24"
								>
									<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
									<circle cx="12" cy="12" r="3"></circle>
								</svg>
								{student}
							</span>
							<span className="text-gray-400 inline-flex items-center leading-none text-sm">
								<svg
									className="w-4 h-4 mr-1"
									stroke="currentColor"
									strokeWidth="2"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									viewBox="0 0 24 24"
								>
									<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
								</svg>
								6
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseSection;
