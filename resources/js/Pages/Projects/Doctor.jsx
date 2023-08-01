import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Doctor() {
    return (
        <div className="font-poppins">
            <div className="w-full bg-[#082144] text-white p-5 px-16 pb-28 relative">
                <div className="flex items-center justify-between">
                    <p className="font-bold">Delta.io</p>
                    <div className="flex items-center space-x-8">
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Question & Answer</a>
                        <a href="#">Consultation</a>
                        <a href="#">Articles</a>
                    </div>

                    <div>
                        <a
                            href="#"
                            className="p-2 px-6 bg-white rounded-full text-[#082144]"
                        >
                            Log In
                        </a>
                    </div>
                </div>

                <div className="space-y-6 mt-12 px-32">
                    <ScrollAnimation animateIn="fadeInUp">
                        <p className="text-center font-bosld text-4xl capitalize tracking-wider">
                            Consult a Doctor Anytime, Anywhere by Video call
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp">
                        <p className="text-sm text-center text-gray-300">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Commodi quibusdam minus a pariatur corporis
                            consequatur nihil, numquam quam voluptas molestias,
                            iste officiis possimus nobis voluptatum libero nulla
                            ipsam saepe voluptatem. Iste officiis possimus nobis
                            voluptatum libero nulla ipsam saepe voluptatem.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp" delay={300}>
                        <div className="flex items-center justify-center">
                            <a
                                href="#"
                                className="p-2 px-8 rounded-full bg-white text-[#082144] border border-white hover:bg-[#082144] hover:text-white transition-all ease-in-out"
                            >
                                Ask a Doctor Online
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="absolute top-0 -left-32 bottom-0 flex items-center">
                    <ScrollAnimation animateIn="fadeIn">
                        <img
                            src="/images/circle-ring.png"
                            className="w-48 h-48"
                        />
                    </ScrollAnimation>
                </div>

                <div className="absolute bottom-4 right-[10%]">
                    <ScrollAnimation animateIn="fadeIn">
                        <img
                            src="/images/dots.png"
                            className="w-24 opacity-40"
                        />
                    </ScrollAnimation>
                </div>
                <div className="absolute w-2/3 mx-auto flex justify-center -bottom-52 z-50 left-0 right-0">
                <ScrollAnimation animateIn="fadeInUp">
                    <img
                        src="/images/doctor.jpeg"
                        className="w-[32em] h-72 object-cover rounded-2xl"
                    />
                    </ScrollAnimation>
                </div>
            </div>

            <div className="px-48 grid grid-cols-3 gap-8 mt-64">
                <div className="space-y-4 p-5 rounded-2xl border border-gray-200">
                    <img src="/images/asset_1.png" className="w-24" />
                    <div className="space-y-2">
                        <p className="font-bold text-[#082144]">
                            All Specialists
                        </p>
                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
                <div className="space-y-4 p-5 rounded-2xl border border-gray-200">
                    <img src="/images/asset_2.png" className="w-24" />
                    <div className="space-y-2">
                        <p className="font-bold text-[#082144]">
                            Private & Secure
                        </p>
                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
                <div className="space-y-4 p-5 rounded-2xl border border-gray-200">
                    <img src="/images/asset_3.png" className="w-24" />
                    <div className="space-y-2">
                        <p className="font-bold text-[#082144]">
                            Million Customer
                        </p>
                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </div>
            </div>
            <ScrollAnimation animateIn="fadeInUp">
                <div className="mt-24 px-24 space-x-24 flex items-center justify-between">
                    <div className="relative w-5/12 p-8">
                        <img
                            src="/images/nurse.jpeg"
                            className="w-full rounded-2xl"
                        />
                        <div className="absolute top-0 bottom-0 w-32 -right-16 flex items-center rounded">
                            <div className="bg-white shadow-lg flex items-center space-x-2 p-1 px-2 rounded-lg bh-white">
                                <span className="bg-green-400 w-2 h-2 rounded-full"></span>
                                <span className="text-xs text-gray-600">
                                    {" "}
                                    Doctor online{" "}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 space-y-8">
                        <p className="font-bold w-2/3 text-[#082144] capitalize">
                            Success will come if you think freely without
                            thinking about what to do.
                        </p>
                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reiciendis nihil fugit odit voluptates illum
                            minus, saepe exercitationem dignissimos aliquam.
                            Voluptatem quasi dolorum non est blanditiis error!
                            Optio, veritatis. Facilis, debitis!
                        </p>

                        <button className="p-1 px-4 rounded-full bg-[#082144] text-white flex items-center space-x-2">
                            <span className="text-xs"> Talk to an expert </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp">
            <div className="flex items-center space-x-24 px-24 py-16">
                <div className="space-y-8">
                    <div className="">
                        <p className="font-bold text-[#082144]">
                            Know about our special tips and tricks
                        </p>
                        <p className="text-xs text-gray-400 text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aperiam dolorum rem expedita itaque et nihil.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <span className="h-12 w-12 rounded-xl bg-[#082144]"></span>
                            <div className="">
                                <p className="text-[#082144] font-bold">
                                    How does it work
                                </p>
                                <p className="text-xs text-gray-600">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="h-12 w-12 rounded-xl bg-[#082144]">
                                123
                            </span>
                            <div className="">
                                <p className="text-[#082144] font-bold">
                                    Option 2 goes here
                                </p>
                                <p className="text-xs text-gray-600">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="h-12 w-12 rounded-xl bg-[#082144]"></span>
                            <div className="">
                                <p className="text-[#082144] font-bold">
                                    Third option here
                                </p>
                                <p className="text-xs text-gray-600">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-5/12 flex">
                    <img
                        src="/images/nurse-2.png"
                        alt="hhh"
                        className="block w-2/3"
                    />
                </div>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp">
            <div className="flex space-x-24 px-32 items-center">
                <div className="w-1/2 p-8">
                    <img src="/images/nurse-3.png" className="w-" />
                </div>
                <div className="w-1/2 space-y-8">
                    <div className="space-y-1">
                        <p className="font-bold text-[#082144]">
                            Frequently asked questions
                        </p>
                        <p className="text-xs text-light text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ipsam cupiditate architecto, numquam
                            praesentium ea non dignissimos quas
                        </p>
                    </div>

                    <div>
                        <p className="font-bold text-[#082144] text-xs">
                            Some random text here
                        </p>
                        <p className="text-xs font-light text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora similique explicabo, molestias maiores
                            cumque, laudantium excepturi
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-[#082144]">
                            <p className="font-bold text-[#082144] text-xs">
                                Question 1 is a question
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </div>
                        <div className="flex justify-between items-center text-[#082144]">
                            <p className="font-bold text-[#082144] text-xs">
                                How much for a demo session?
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </div>
                        <div className="flex justify-between items-center text-[#082144]">
                            <p className="font-bold text-[#082144] text-xs">
                                What about when there is no doctor?
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollAnimation>
            <div className="grid grid-cols-4 gap-8 bg-[#082144] text-white p-8 px-24">
                <div className="space-y-8">
                    <p className="font-bold">Links</p>

                    <div className="space-y-2 flex flex-col text-xs">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Services</a>
                    </div>
                </div>
                <div className="space-y-8">
                    <p className="font-bold">Links</p>

                    <div className="space-y-2 flex flex-col text-xs">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Services</a>
                    </div>
                </div>
                <div className="space-y-8">
                    <p className="font-bold">Links</p>

                    <div className="space-y-2 flex flex-col text-xs">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Services</a>
                    </div>
                </div>
                <div className="space-y-8">
                    <p className="font-bold text-2xl">Delta.io</p>

                    <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Doloribus numquam, tempora delectus enim eos
                        quidem maiores nesciunt.
                    </p>
                    <p className="text-xs">
                        Copyright &copy; 2023, All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Doctor;
