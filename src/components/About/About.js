import React from "react";
import { NavLink } from "react-router-dom";
import whyImg from "../../img/why.png";
import AboutSection from "../AboutSection/AboutSection";

const About = () => {
	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container mx-auto py-24 flex items-center">
					<div className="md:w-1/2">
						<img
							className="object-cover object-center mx-auto"
							alt="Why us"
							src={whyImg}
						/>
					</div>
					<div className="md:w-1/2 w-5/6">
						<p className="mb-4 text-red-500 text-xl font-semibold italic">
							Why Choses Me
						</p>
						<h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
							Tools For Teachers And
							<br className="hidden lg:inline-block" />
							<span className="text-red-500 underline italic">Learners</span>
						</h1>
						<p className="mb-8 pt-3 leading-relaxed">
							Oxford chimney pot Eaton faff about blower blatant brilliant,
							<br />
							bubble and squeak he legged it Charles bonnet arse at public
							<br />
							school bamboozled.
						</p>
						<div className="flex">
							<NavLink
								className="inline-flex text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg focus:ring-2 ring-offset-2 ring-indigo-500 transition duration-300 ease-linear"
								to="/courses"
							>
								<span className="mr-3">Enroll Now</span>
								<span>
									<i className="fas fa-check-double text-base"></i>
								</span>
							</NavLink>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-gray-50 body-font">
				<div className="container px-5 py-14 mx-auto">
					<AboutSection></AboutSection>
				</div>
			</section>
		</>
	);
};

export default About;
