import React from "react";
import heroImg from "../../img/edu_1.png";

const HeroSection = () => {
	return (
		<>
			<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
				<h1 className="text-6xl mb-6 text-gray-900">
					<span className="font-semibold">Start Learning Daily</span>
					<br className="hidden lg:inline-block" />
					<span className="text-indigo-500 font-bold underline italic">
						New Things
					</span>
				</h1>
				<h1 className="font-semibold text-2xl text-black py-5">
					Unlimited access to all 60+ instructors.
				</h1>
				<p className="mb-8 text-lg font-normal text-gray-500 leading-relaxed">
					Study any topic, anytime. Choose from thousands of expert-led courses
					now. <br /> You`re guaranteed to find something that`s right for you.
				</p>
				<div className="flex justify-center">
					<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg focus:ring-2 ring-offset-2 ring-indigo-500 transition duration-300 ease-linear">
						<span className="mr-3">Enroll Now</span>
						<span>
							<i className="fas fa-check-double text-base"></i>
						</span>
					</button>
					<button className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded text-lg focus:ring-2 ring-offset-2 ring-gray-600 transition duration-300 ease-linear">
						<span className="mr-3">Login</span>
						<span>
							<i className="fas fa-sign-in-alt text-base"></i>
						</span>
					</button>
				</div>
			</div>
			<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
				<img
					className="object-cover object-center mx-auto"
					alt="hero"
					src={heroImg}
				/>
			</div>
		</>
	);
};

export default HeroSection;
