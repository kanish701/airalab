import React from 'react';
import { motion } from 'framer-motion';
import DemoImage from '../assets/Dummmy-2.png';

// Animation variants for the stagger effect
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2 // Delay between each card appearing
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function IndustrySection() {
    const features = [
        {
            image: DemoImage,
            title: "AI Training",
            description: "Hands-on AI training programs designed to bridge the gap between theory and industry practice.",
        },
        {
            image: DemoImage,
            title: "Web Development",
            description: "Modern builds that are fast, scalable, and future-proof using cutting-edge technologies.",
        },
        {
            image: DemoImage,
            title: "Dashboard",
            description: "Engaging dashboards with intuitive data visualizations and seamless user experiences.",
        }
    ];

    return (
        <section className="relative px-6 py-24 bg-[#0a0a0a] overflow-hidden">
            
            {/* --- BACKGROUND ELEMENTS (Matches Hero) --- */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            
            {/* Subtle glow in the center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                
                {/* --- HEADER SECTION --- */}
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
                    >
                        <span className="text-white">
                            Websites aren’t just <br className="hidden md:block" /> part of what we do.
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                            They’re everything we do.
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        From design to development, optimization to maintenance—we provide end-to-end web solutions that drive results.
                    </motion.p>
                </div>

                {/* --- CARDS GRID --- */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/10"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-gray-900">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                
                                {/* Floating Icon/Badge (Optional decoration) */}
                                <div className="absolute top-3 right-3 z-20 bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/10">
                                    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow px-2 pb-2">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                                    {feature.description}
                                </p>

                                {/* Interactive Link */}
                                <div className="flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-yellow-400 transition-colors duration-300">
                                    <span>Explore Solution</span>
                                    <svg 
                                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}