import React from "react";
import {
    AiOutlineArrowDown,
    AiOutlineGateway,
    AiOutlineHome,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineUser,
} from "react-icons/ai";
import { easeIn, motion } from "framer-motion";
import Nav from "./components/Nav";

function Index() {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div>
            <div className="fixed h-screen w-16 bg-purple-700 text-white">
                <div className="flex flex-col items-center justify-between h-full">
                    <div className="h-12 bg-purple-800 w-full grid place-content-center">
                        <span className="text-xl  font">FD</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center space-y-2 items-center w-full">
                        <div className="w-full border-r-2 flex items-center justify-center border-white py-2">
                            <AiOutlineHome className="text-lg" />
                        </div>
                        <div className="w-full flex items-center justify-center border-white py-2">
                            <AiOutlineUser className="text-lg" />
                        </div>
                        <div className="w-full flex items-center justify-center border-white py-2">
                            <AiOutlineMail className="text-lg" />
                        </div>
                        <div className="w-full flex items-center justify-center border-white py-2">
                            <AiOutlineGateway className="text-lg" />
                        </div>
                        <div className="w-full flex items-center justify-center border-white py-2">
                            <AiOutlinePhone className="text-lg" />
                        </div>
                    </div>
                    <div className="py-12">
                        <AiOutlineArrowDown className="animate-bounce" />
                    </div>
                </div>
            </div>

            <div className="ml-16 h-screen border p-32 flex  items-center space-x-16">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    // transition={{  ease: "easeIn" }}
                >
                    <div className="opacity-50 absolute -left-4 top-12 w-40 h-40 mix-blend-multiply filter blur-xl bg-purple-300 rounded-full animate-blob ani"></div>
                    <div className="opacity-50 absolute right-8 top-12 w-40 h-40 mix-blend-multiply filter blur-xl bg-pink-300 rounded-full animate-blob anim-delay-2"></div>
                    <div className="opacity-50 absolute left-16 top-24 w-40 h-40 mix-blend-multiply filter blur-xl bg-yellow-300 rounded-full animate-blob anim-delay-4"></div>
                    <img
                        src="/images/faves_dp.png"
                        className="relative opacsity-0"
                    />
                </motion.div>
                {/* Text description */}
                <div className="space-y-8">
                    <Nav />
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.5 } },
                        }}
                    >
                        <motion.div
                            className="space-y-4"
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.p variants={fadeIn} className="uppercase">
                                Hi there, I'm
                            </motion.p>

                            <motion.p
                                variants={fadeIn}
                                className="text-4xl font-bold text-purple-600"
                            >
                                FRANK {""}
                                <span className="text-gray-600">OLAYINKA FAVOUR</span>
                            </motion.p>

                            <motion.p
                                variants={fadeIn}
                                className="text-sm text-gray-400"
                            >
                                Hello there! I am a full-stack web developer
                                with a knack for transforming ideas into
                                reality. With expertise in HTML, CSS,
                                JavaScript, PHP, and more, I excel in creating
                                responsive and dynamic web applications. My
                                mission is to elevate user experiences through
                                clean code and intuitive designs. From the
                                front-end to the back-end, I'm ready to tackle
                                any challenge and help your web projects shine
                                in today's digital landscape.
                            </motion.p>

                            <motion.div
                                variants={fadeIn}
                                className="flex items-center"
                            >
                                <button className="text-white bg-purple-600 p-2 px-6 rounded-full tracking-widest">
                                    Resume
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Index;
