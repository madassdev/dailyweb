import React, { useState } from "react";
import { motion } from "framer-motion";

function Nav({activeTab, setActiveTab, tabs}) {
   
    return (
        <div className="flex  items-center space-x-4">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`rounded-full px-2 p-1 text-sm relative`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId="activeNav"
                            transition={{duration:0.6,type:'spring'}}
                            className="absolute inset-0 rounded-full bg-purple-600"
                            style={{borderRadius:999}}
                        ></motion.div>
                    )}
                    <span
                        className={`${
                            activeTab === tab.id ? "text-white" : "hover:text-purple-600"
                        } relative z-10`}
                    >
                        {tab.label}
                    </span>
                </button>
            ))}
        </div>
    );
}

export default Nav;
