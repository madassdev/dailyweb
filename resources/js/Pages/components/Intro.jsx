import React from "react";
import { easeIn, motion } from "framer-motion";

function Intro() {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
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

                <motion.p variants={fadeIn} className="text-sm text-gray-400">
                    Hello there! I am a full-stack web developer with a knack
                    for transforming ideas into reality. With expertise in HTML,
                    CSS, JavaScript, PHP, and more, I excel in creating
                    responsive and dynamic web applications. My mission is to
                    elevate user experiences through clean code and intuitive
                    designs. From the front-end to the back-end, I'm ready to
                    tackle any challenge and help your web projects shine in
                    today's digital landscape.
                </motion.p>

                <motion.div variants={fadeIn} className="flex items-center">
                    <button className="text-white bg-purple-600 p-2 px-6 rounded-full tracking-widest">
                        Resume
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Intro;
