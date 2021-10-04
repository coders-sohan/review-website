import React from "react";

const AboutSection = () => {
	return (
		<>
			{/* about section style */}
			<div className="flex flex-col text-center w-full mb-10">
				<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
					We Are Proud
				</h1>
				<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
					You don't have to struggle alone, you've got our assistance and help.
				</p>
			</div>
			<div className="flex flex-wrap -m-4 text-center">
				<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
					<div className="border-2 border-gray-200 hover:border-indigo-600 transition duration-300 ease-linear px-4 py-6 rounded-lg">
						<i class="fas fa-users text-5xl text-indigo-500 my-3"></i>
						<h2 className="title-font font-medium text-3xl text-gray-900">
							570K
						</h2>
						<p className="leading-relaxed">Students</p>
					</div>
				</div>
				<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
					<div className="border-2 border-gray-200 hover:border-indigo-600 transition duration-300 ease-linear px-4 py-6 rounded-lg">
						<i class="fas fa-chalkboard-teacher text-5xl text-indigo-500 my-3"></i>
						<h2 className="title-font font-medium text-3xl text-gray-900">
							6K
						</h2>
						<p className="leading-relaxed">Teachers</p>
					</div>
				</div>
				<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
					<div className="border-2 border-gray-200 hover:border-indigo-600 transition duration-300 ease-linear px-4 py-6 rounded-lg">
						<i class="fas fa-clock text-5xl text-indigo-500 my-3"></i>
						<h2 className="title-font font-medium text-3xl text-gray-900">
							5M+
						</h2>
						<p className="leading-relaxed">Viewed hours</p>
					</div>
				</div>
				<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
					<div className="border-2 border-gray-200 hover:border-indigo-600 transition duration-300 ease-linear px-4 py-6 rounded-lg">
						<i class="fas fa-globe text-5xl text-indigo-500 my-3"></i>
						<h2 className="title-font font-medium text-3xl text-gray-900">
							50+
						</h2>
						<p className="leading-relaxed">Languages</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutSection;
