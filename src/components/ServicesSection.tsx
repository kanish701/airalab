import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 1. IMPORT ALL UNIQUE ASSETS
import abstractBg from '../assets/abstract-3d-.jpg';
import illustrationBg from '../assets/illustration.jpg';
import waveParticlesBg from '../assets/wave-particles-big.webp';

// Animation Variants for staggering the Bento Grid
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const serviceCards = [
    {
        bgImage: abstractBg, 
        title: 'Build a scalable product with AI',
        description: 'Easily scale your resources up and down based on business needs without hardware limitations.',
        gridSpan: 'lg:col-span-3'
    },
    {
        bgImage: illustrationBg,
        title: 'Automate Workflows with AI',
        description: 'Streamline your operations by automating repetitive tasks, freeing up your team for more strategic work.',
        gridSpan: 'lg:col-span-3'
    },
    {
        bgImage: waveParticlesBg,
        title: 'Data-driven Insights',
        description: 'Turn complex data into actionable insights with AI-powered analytics and real-time dashboards.',
        gridSpan: 'lg:col-span-2'
    },
    {
        bgImage: illustrationBg, 
        title: 'Personalized Experiences',
        description: 'Deliver tailored solutions to every customer using AI-driven recommendations and adaptive systems.',
        gridSpan: 'lg:col-span-2'
    },
    {
        bgImage: waveParticlesBg, 
        title: 'Future-Ready Infrastructure',
        description: 'Scale seamlessly and innovate faster with cloud-native AI solutions built for growth.',
        gridSpan: 'lg:col-span-2'
    }
];

const ServicesSection: React.FC = () => {
    return (
        <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
            
            {/* --- BACKGROUND ELEMENTS (Consistent Grid) --- */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* --- HEADER --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center md:text-left leading-tight">
                        Driven by Intelligence,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                            Focused on Results
                        </span>
                    </h2>
                </motion.div>

                {/* --- BENTO GRID --- */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-6 gap-6 mb-24"
                >
                    {serviceCards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`group relative rounded-3xl overflow-hidden min-h-[300px] border border-white/10 bg-[#161515] ${card.gridSpan}`}
                        >
                            {/* Background Image with Hover Zoom */}
                            <div
                                style={{ backgroundImage: `url(${card.bgImage})` }}
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
                            />
                            
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            
                            {/* Hover Border Glow */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-3xl transition-colors duration-300 pointer-events-none" />

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* --- MIDDLE SECTION --- */}
                <div className="text-center mb-16 relative">
                    {/* Decorative line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-16 bg-gradient-to-b from-transparent via-gray-700 to-transparent -mt-20"></div>
                    
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                        Serving industries that demand speed and scale.
                    </h3>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                        We specialize in industries where high performance and reliability matter most.
                    </p>
                </div>

                {/* --- BOTTOM LINKS SECTION --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                    {[
                        { title: "Development", link: "/capabilities/ai-fundamentals" },
                        { title: "SaaS", link: "/capabilities/ai-freshers-course" },
                        { title: "Dashboards", link: "/capabilities/ai-bootcamps" },
                        { title: "Predictive Analysis", link: "/capabilities/prompt-engineering" },
                        { title: "AI Agents", link: "/capabilities/ai-agents" },
                        { title: "Custom Solutions", link: "/capabilities/custom-solutions" }
                    ].map((item, idx) => (
                        <Link 
                            key={idx}
                            to={item.link} 
                            className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-yellow-400/50 transition-colors duration-300"
                        >
                            <span className="text-2xl md:text-3xl font-bold text-gray-300 group-hover:text-white transition-colors">
                                {item.title}
                            </span>
                            {/* Animated Arrow */}
                            <span className="bg-white/5 p-3 rounded-full group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 transform group-hover:-rotate-45">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;