import React from "react";

const Contact = () => {
	return (
		<>
			<section>
				<div className="container mx-auto py-14">
					<div className="text-center mb-10">
						<h1 className="sm:text-4xl text-3xl font-semibold title-font text-gray-900 mb-4">
							<span className="text-red-500">Contact Us</span>
						</h1>
						<div className="flex mt-6 justify-center">
							<div className="w-20 h-1 rounded-full bg-indigo-500 inline-flex"></div>
						</div>
					</div>
					<div className="py-5 flex items-center">
						<div className="w-2/4 p-10 ">
							<div className="bg-gray-100 p-3 rounded-md text-center border-2 hover:border-indigo-600 transition duration-300 ease-linear">
								<h1 className="text-3xl font-bold">Address -</h1>
								<p className="text-lg mt-3 text-indigo-500 font-semibold">
									2B/73, Central Park
								</p>
								<p className="text-lg py-3 text-indigo-500 font-semibold">
									California, USA
								</p>
							</div>
							<div className="bg-gray-100 p-3 my-5 rounded-md text-center border-2 hover:border-indigo-600 transition duration-300 ease-linear">
								<h1 className="text-3xl font-bold">Email -</h1>
								<div className="mt-3">
									<a
										className="text-lg text-indigo-500 font-semibold"
										href="mailto:example@gmail.com"
									>
										example@gmail.com
									</a>
								</div>
							</div>
							<div className="bg-gray-100 p-3 my-5 rounded-md text-center border-2 hover:border-indigo-600 transition duration-300 ease-linear">
								<h1 className="text-3xl font-bold">Phone -</h1>
								<p className="text-lg mt-3 text-indigo-500 font-semibold">
									+123-456-789-098
								</p>
							</div>
						</div>
						<div className="w-2/4 p-10">
							<div className="">
								<h2 className="text-gray-900 text-3xl mb-1 font-bold title-font">
									Get In Touch
								</h2>
								<p className="leading-relaxed mb-5 text-gray-600">
									Have a question or just want to say hi? We'd love to hear from
									you.
								</p>
								<div className="relative mb-4">
									<label for="name" className="leading-7 text-sm text-gray-600">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
								<div className="relative mb-4">
									<label
										for="email"
										className="leading-7 text-sm text-gray-600"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
								<div className="relative mb-4">
									<label
										for="message"
										className="leading-7 text-sm text-gray-600"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
									></textarea>
								</div>
								<button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg focus:ring-2 ring-offset-2 ring-indigo-500 transition duration-300 ease-linear">
									<span className="text-lg mr-3">Submit</span>
									<span className="text-lg">
										<i class="fas fa-paper-plane"></i>
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
