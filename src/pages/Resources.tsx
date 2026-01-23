import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ExternalLink, Filter, PlayCircle, BookOpen, 
    Newspaper, Code2, ArrowRight, Calendar, User 
} from 'lucide-react';

// --- ASSETS ---
import hackerRankLogo from '../assets/HackerRank_Icon-1000px.png';
import hackerEarthLogo from '../assets/HackerEarth_logo.png';
import leetcodeLogo from '../assets/LeetCode_logo_rvs.png';
import webinarImg from '../assets/webinar 101.png';
import aiNews1 from '../assets/Artificial-Intelligence-2025-08-29-1260x657.jpg';
import aiNews2 from '../assets/big-data-hero.jpg';
import aiNews3 from '../assets/images (1).png';
import book1 from '../assets/AI book.jpeg';
import book2 from '../assets/AI book.jpeg';
import book3 from '../assets/AI book.jpeg';
import book4 from '../assets/AI book.jpeg';
import book5 from '../assets/AI book.jpeg';
import book6 from '../assets/AI book.jpeg';
import book7 from '../assets/AI book.jpeg';

// --- DATA ---
const practicePlatforms = [
    {
        name: 'HackerRank',
        logo: hackerRankLogo,
        url: 'https://www.hackerrank.com/',
        desc: 'The market-leading coding test and interview solution for hiring developers.'
    },
    {
        name: 'HackerEarth',
        logo: hackerEarthLogo,
        url: 'https://www.hackerearth.com/',
        desc: 'Coding practice, hackathons, and developer assessments with leaderboard ranking.'
    },
    {
        name: 'LeetCode',
        logo: leetcodeLogo,
        url: 'https://leetcode.com/',
        desc: 'Enhance your skills, expand your knowledge and prepare for technical interviews.'
    },
];

const editorFilters = [
    'All',
    'IBM Webinar',
    'Zoho Webinar',
    'AI Trends',
    'Data Science',
    'Artificial Intelligence',
    'Machine Learning',
];

const editorsPicks = [
    {
        type: 'WEBINAR',
        date: '10 Sep 2025',
        tags: ['AI Agents'],
        title: 'Get All Of Your Enterprise Data Ready For Agentic AI.',
        desc: 'Focused on preparing organizations for seamless integration with intelligent, autonomous AI agents.',
        img: webinarImg,
        filter: 'IBM Webinar',
        company: 'IBM'
    },
    {
        type: 'WEBINAR',
        date: '17 Sep 2025',
        tags: ['AI'],
        title: 'Increase visibility and control across hybrid environments.',
        desc: 'Learn how to manage complex hybrid cloud infrastructures with AI-driven insights.',
        img: aiNews1,
        filter: 'AI Trends',
        company: 'IBM'
    },
    {
        type: 'ARTICLE',
        date: '17 Sep 2025',
        tags: ['Integration'],
        title: 'WhatsApp integrations in Zoho One',
        desc: 'Connecting businesses directly with customers through seamless API integrations.',
        img: aiNews2,
        filter: 'Zoho Webinar',
        company: 'ZOHO'
    },
    {
        type: 'WEBINAR',
        date: '23 Sep 2025',
        tags: ['Code'],
        title: 'Accelerate IBM i Modernization with watsonx Code Assistant',
        desc: 'Leverage generative AI to refactor legacy codebases faster than ever before.',
        img: aiNews3,
        filter: 'IBM Webinar',
        company: 'IBM'
    },
];

const newsroom = [
    {
        img: aiNews1,
        title: 'GLF 2024 Held at the Home of Hamlet',
        author: 'Keith Meynell',
        date: '17 Aug 2025',
        desc: 'The IBM AI Global Leadership Forum (GLF) 2024 brought together AI leaders to discuss responsible innovation.'
    },
    {
        img: aiNews2,
        title: 'How Enterprises Are Monetising AI Data',
        author: 'Keith Meynell',
        date: '05 Sep 2025',
        desc: 'Discover how enterprises are producing, scaling, and monetizing data, while protecting privacy.'
    },
    {
        img: aiNews3,
        title: 'Tech Trends Redefining The Future',
        author: 'Keren Meynell',
        date: '01 Sep 2025',
        desc: 'AI, IoT, and blockchain are redefining the future. Learn about the latest trends.'
    },
];

const books = [
    { img: book1, title: 'Understanding Hacks' },
    { img: book2, title: 'Beginning Python' },
    { img: book3, title: 'Spirit Hacking Mastery' },
    { img: book4, title: 'Deep Learning' },
    { img: book5, title: 'AI Ethics' },
    { img: book6, title: 'Neural Networks' },
    { img: book7, title: 'Data Science 101' },
];

const Resources = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredPicks = activeFilter === 'All'
        ? editorsPicks
        : editorsPicks.filter((item) => item.filter === activeFilter);

    return (
        <div className="relative bg-[#0a0a0a] min-h-screen text-white overflow-hidden font-sans">
            
            {/* --- BACKGROUND ELEMENTS --- */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">

                {/* --- HERO HEADER --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 text-gray-400 text-xs font-bold tracking-widest uppercase">
                        <BookOpen size={12} /> Knowledge Hub
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        Resources & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                            Insights
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Stay ahead with our curated collection of AI learning materials, expert webinars, and industry updates.
                    </p>
                </motion.div>

                {/* --- EDITOR'S PICKS SECTION --- */}
                <div className="mb-24">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <PlayCircle className="text-yellow-500" /> Editor's Picks
                        </h2>
                        
                        {/* Filter Scroll Container */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            <Filter size={16} className="text-gray-500 flex-shrink-0" />
                            {editorFilters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-1.5 text-xs font-medium rounded-full border transition-all whitespace-nowrap ${
                                        activeFilter === filter 
                                        ? 'bg-yellow-500 text-black border-yellow-500 shadow-lg shadow-yellow-500/20' 
                                        : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[500px]">
                        
                        {/* Featured Item (Takes 7/12 columns) */}
                        <AnimatePresence mode='wait'>
                        {filteredPicks.length > 0 && (
                            <motion.div 
                                key={filteredPicks[0].title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="lg:col-span-8 group relative rounded-3xl overflow-hidden border border-white/10 bg-[#161515]"
                            >
                                <img 
                                    src={filteredPicks[0].img} 
                                    alt="Featured" 
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                                    <div className="flex items-center gap-3 text-sm text-yellow-400 font-mono mb-3">
                                        <span className="bg-yellow-400/10 px-2 py-1 rounded">{filteredPicks[0].company}</span>
                                        <span>{filteredPicks[0].date}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                        {filteredPicks[0].title}
                                    </h3>
                                    <p className="text-gray-300 max-w-2xl mb-6 line-clamp-2 md:line-clamp-none">
                                        {filteredPicks[0].desc}
                                    </p>
                                    <button className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors">
                                        Watch Now <PlayCircle size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                        </AnimatePresence>

                        {/* Sidebar List (Takes 5/12 columns) */}
                        <div className="lg:col-span-4 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
                            {filteredPicks.slice(1).map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                                >
                                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                        <img src={item.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-xs text-yellow-500 font-bold mb-1">{item.type}</span>
                                        <h4 className="text-sm font-bold text-white leading-snug mb-2 group-hover:text-yellow-400 transition-colors">
                                            {item.title}
                                        </h4>
                                        <div className="text-xs text-gray-500">{item.company} • {item.date}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- NEWSROOM SECTION --- */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <Newspaper className="text-blue-500" /> Newsroom
                        </h2>
                        <a href="#" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
                            View Archive <ArrowRight size={14} />
                        </a>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsroom.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-[#161515] rounded-2xl border border-white/10 overflow-hidden group"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img src={item.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono border border-white/10 text-white">
                                        News
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <span className="flex items-center gap-1"><User size={12} /> {item.author}</span>
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                        {item.desc}
                                    </p>
                                    <span className="text-blue-400 text-xs font-bold uppercase tracking-wider group-hover:underline">
                                        Read Story
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- BOOKS SECTION --- */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <BookOpen className="text-purple-500" /> Learning Library
                        </h2>
                    </div>
                    
                    {/* Horizontal Scroll / Grid for Books */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                        {books.map((book, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -8 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[2/3] rounded-lg overflow-hidden border border-white/10 shadow-lg relative mb-4">
                                    <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="bg-white/10 backdrop-blur-md p-2 rounded-full text-white">
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-sm font-semibold text-gray-300 text-center group-hover:text-white line-clamp-2">
                                    {book.title}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- PRACTICE PLATFORM (Glass Card) --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#161515] p-8 md:p-12"
                >
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
                    
                    <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                        {/* Left: Text */}
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                                <Code2 className="text-green-500" /> Practice Lab
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                A hands-on space to practice AI, coding, and data skills. 
                                Master algorithms and system design with industry-standard tools.
                            </p>
                            <button className="text-green-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                View All Platforms <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Right: Platform List */}
                        <div className="lg:w-2/3 flex flex-col gap-4">
                            {practicePlatforms.map((platform, idx) => (
                                <a 
                                    key={idx}
                                    href={platform.url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="group flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-green-500/30 transition-all"
                                >
                                    <div className="w-14 h-14 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                                        <img src={platform.logo} alt={platform.name} className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors flex items-center gap-2">
                                            {platform.name}
                                            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h3>
                                        <p className="text-sm text-gray-400">{platform.desc}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Resources;