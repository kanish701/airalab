import { motion } from 'framer-motion';
import ImageScroller from './ImageScroller'; // Assuming this component exists

// Utility for clean class merging (optional, but good practice)
const cn = (...classes: Array<string | false | null | undefined>): string =>
    classes.filter((c): c is string => Boolean(c)).join(' ');

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-0 pb-20 overflow-hidden bg-[#0a0a0a] selection:bg-yellow-500/30">
            
            {/* --- BACKGROUND ELEMENTS --- */}
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            {/* Ambient Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />


            {/* --- MAIN CONTAINER --- */}
            <div className="container relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                
                {/* --- LEFT SECTION (TEXT) --- */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    
                    {/* Badge */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 mb-6 border rounded-full bg-white/5 border-white/10 backdrop-blur-sm"
                    >
                        <span className="flex w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                        <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">AIyutham v2.0 Live</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                    >
                        Innovating the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">
                            Future of AI
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-xl mx-auto md:mx-0 text-lg text-gray-400 mb-8 leading-relaxed"
                    >
                        Empowering industries with intelligent agents and automation. 
                        We turn complex AI concepts into scalable, real-world solutions.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a href="tel:+919585512666" className="group relative px-8 py-4 bg-[#FFD700] hover:bg-[#FCD34D] text-black font-bold rounded-xl transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,215,0,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,215,0,0.5)]">
                            <span className="flex items-center gap-2">
                                Book Intro Call
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </a>
                        
                        <button className="px-8 py-4 text-white transition-all duration-300 border border-gray-800 bg-white/5 hover:bg-white/10 rounded-xl hover:border-gray-600">
                            View Demo
                        </button>
                    </motion.div>
                </div>


                {/* --- RIGHT SECTION (MOCKUP) --- */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="w-full md:w-1/2 perspective-1000"
                >
                    {/* Floating Animation Wrapper */}
                    <motion.div 
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative mx-auto"
                    >
                        {/* Glow behind mockup */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 rounded-2xl blur-2xl opacity-50" />
                        
                        {/* Browser Window */}
                        <div className="relative overflow-hidden bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                            
                            {/* Browser Header */}
                            <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex-1 px-4 py-1.5 text-xs text-gray-500 text-center bg-black/20 rounded-md font-mono border border-white/5">
                                    AIyutham
                                </div>
                            </div>

                            {/* Content Area (Image Scroller) */}
                            <div className="relative w-full aspect-[4/3] bg-black/50 overflow-hidden">
                                {/* We pass a className to ImageScroller if it accepts one, or wrap it */}
                                <div className="h-full w-full">
                                    <ImageScroller />
                                </div>
                                
                                {/* Overlay Gradient for better integration */}
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}