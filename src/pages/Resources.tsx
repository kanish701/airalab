import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
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




const practicePlatforms = [
	{
		name: 'HackerRank',
		logo: hackerRankLogo,
		url: 'https://www.hackerrank.com/',
		desc: 'The market-leading coding test and interview solution for hiring developers. Start hiring at the pace of innovation!'
	},
	{
		name: 'HackerEarth',
		logo: hackerEarthLogo,
		url: 'https://www.hackerearth.com/',
		desc: 'Coding practice, hackathons, and developer assessments with leaderboard ranking'
	},
	{
		name: 'leetcode',
		logo: leetcodeLogo,
		url: 'https://leetcode.com/',
		desc: 'The best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.'
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
		desc: 'This webinar is focused on preparing organizations\' seamless integration with intelligent, autonomous AI agents.',
		img: webinarImg,
		filter: 'IBM Webinar',
		company: 'IBM'
	},
	{
		type: 'WEBINAR',
		date: '17 Sep 2025',
		tags: ['AI'],
		title: 'Increase visibility and control across hybrid environments.',
		desc: '',
		img: aiNews1,
		filter: 'AI Trends',
		company: 'IBM'
	},
	{
		type: 'ARTICLE',
		date: '17 Sep 2025',
		tags: ['AI'],
		title: 'WhatsApp integrations in Zoho One',
		desc: '',
		img: aiNews2,
		filter: 'Zoho Webinar',
		company: 'ZOHO'
	},
	{
		type: 'WEBINAR',
		date: '23 Sep 2025',
		tags: ['AI'],
		title: 'Accelerate IBM i Modernization with watsonx Code Assistant for i',
		desc: '',
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
		date: '17 August 2025',
		desc: 'The IBM AI Global Leadership Forum (GLF) 2024 was held in Denmark, home of Hamlet. The event brought together AI leaders from around the world to discuss the future of AI, ethics, and responsible innovation.'
	},
	{
		img: aiNews2,
		title: 'How Enterprises Are Monetising AI Data',
		author: 'Keith Meynell',
		date: '05 September 2025',
		desc: 'EDUCATE: Discover how enterprises are producing, scaling, and monetizing data, while protecting privacy and ensuring governance.'
	},
	{
		img: aiNews3,
		title: 'Tech Trends Redefining The Future',
		author: 'Keren Meynell',
		date: '01 September 2025',
		desc: 'AI, IoT, and blockchain are redefining the future of technology. Learn about the latest trends and how organizations can adopt a holistic approach.'
	},
];

const books = [
	{
		img: book1,
		title: 'Understanding Hacks',
	},
	{
		img: book2,
		title: 'Beginning  Python',
	},
	{
		img: book3,
		title: 'Spirit Hacking Mastery',
	},
	{
		img: book4,
		title: 'Spirit Hacking Mastery',
	},
	{
		img: book5,
		title: 'Spirit Hacking Mastery',
	},
	{
		img: book6,
		title: 'Spirit Hacking Mastery',
	},
	{
		img: book7,
		title: 'Spirit Hacking Mastery',
	},

];

const Resources = () => {
	const [activeFilter, setActiveFilter] = useState('All');

	const filteredPicks = activeFilter === 'All'
		? editorsPicks
		: editorsPicks.filter((item) => item.filter === activeFilter);

	return (
		<div className="bg-[#161515] min-h-screen text-white pt-16 pb-16 px-2 md:px-0">
			{/* Breadcrumb */}
			<div className="text-gray-400 text-sm pt-9 pl-6">Home | Resources</div>

			{/* Page Title & Description */}
			<div className="max-w-5xl mx-auto mt-4 mb-8 text-center p-8">
				<h1 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow p-3">Resources</h1>
				<p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto">Stay ahead of the curve with our curated collection of AI learning materials, expert insights, and industry updates. Whether you're just starting or already advancing in your AI journey, our resources are designed to support continuous learning and real-world application.</p>
			</div>

			{/* Editor's Picks */}
			<div className="max-w-6xl mx-auto mb-12 mt-24 p-5">
				<h2 className="text-2xl md:text-4xl font-bold pb-7">Editor's Picks</h2>
				<div className="flex items-center justify-between mb-9">
					<div className="flex flex-wrap items-center justify-evenly w-full gap-4">
						{editorFilters.map((filter) => (
							<button
								key={filter}
								onClick={() => setActiveFilter(filter)}
								className={`px-6 py-2 text-xs font-semibold border transition-all shadow-sm ${activeFilter === filter ? 'bg-yellow-400 text-black border-yellow-400 shadow' : 'bg-[#232323] text-gray-200 border-[#232323] hover:bg-yellow-400 hover:text-black hover:border-yellow-400'}`}
							>
								{filter}
							</button>
						))}
					</div>
				</div>

				<div className="flex flex-col lg:flex-row justify-between gap-10">

					{/* Main pick (large) - Image left, content right */}
					<div className="lg:w-full bg-[#201F1F] shadow-xl group hover:shadow-2xl hover:-translate-y-1 transition-all flex-wrap">
						{filteredPicks[0] && (
							<div className=" h-full">
								{/* Image */}
								<div className="sm:w-5/5 flex sm:flex-row relative">
									<img
										src={filteredPicks[0].img}
										alt="webinar"
										className="w-full h-52 object-cover group-hover:scale-15 transition-transform"
									/>
								</div>
								{/* Content */}
								<div className="md:w-5/5 p-4  justify-between">
									<div>
										<div className="text-sm text-gray-400 mb-2">
											{filteredPicks[0].date} | {filteredPicks[0].tags?.join(', ')}
										</div>
										<div className="text-sm text-gray-400 mb-2">
											Webinar by {filteredPicks[0].company}
										</div>
										<h3 className="font-bold text-xl mb-3 text-white leading-tight">
											{filteredPicks[0].title}
										</h3>
										<p className="text-gray-300 text-sm mb-4 leading-relaxed">
											{filteredPicks[0].desc}
										</p>
									</div>

									<button className="bg-yellow-400 text-black px-6 py-2 font-semibold text-sm hover:bg-yellow-300 transition shadow self-start">
										Watch Now
									</button>

								</div>
							</div>
						)}
					</div>

					{/* Side picks - Image left, content right */}
					<div className="w-full flex flex-col gap-3">
						{filteredPicks.slice(1).map((item, idx) => (
							<div key={idx} className=" shadow group hover:shadow-xl hover:-translate-y-1 transition-all">
								<div className="flex h-32">
									{/* Image */}
									<div className="w-52 flex-shrink-0">
										<img
											src={item.img}
											alt={item.title}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform"
										/>
									</div>
									{/* Content */}
									<div className="flex-1 p-4 flex flex-col justify-center items-start gap-3">
										<div className="text-xs font-semibold text-white">
											{item.type}
										</div>
										<div className="text-xs text-gray-400">
											{item.date} | {item.company}
										</div>
										<h4 className="font-semibold text-gray-300 text-sm leading-tight line-clamp-2">
											{item.title}
										</h4>
									</div>
								</div>
							</div>
						))}
						<div className="flex justify-center pt-2">
							<button className="text-sm w-full h-10 text-gray-400 bg-[#201F1F] hover:text-white transition hover:border">
								View All
							</button>
						</div>
					</div>
				</div>

			</div>

			{/* Newsroom */}
			<div className="max-w-6xl mx-auto mb-12 mt-20">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-2xl md:text-3xl font-bold">Newsroom</h2>
					<button className="text-xs text-gray-200 hover:underline hover:text-yellow-400 transition font-semibold">Read More</button>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
					{newsroom.map((item, idx) => (
						<div key={idx} className="p-5 shadow flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all h-full">
							<img
								src={item.img}
								alt={item.title}
								className="w-full h-42 object-cover mb-4 shadow group-hover:scale-105 transition-transform"
							/>
							<div className="text-sm text-gray-400 mb-3 mt-3">{item.author} | {item.date}</div>
							<div className="font-bold text-lg mb-2 text-white">{item.title}</div>
							<div className="text-gray-300 text-base mb-2">{item.desc}</div>
							<button className="mt-auto text-xs text-yellow-400 hover:underline self-end font-semibold">Read More</button>
						</div>
					))}
				</div>
			</div>



			{/* Books and Learning Materials */}
			<div className="max-w-6xl mx-auto mb-10 mt-20">
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-2xl md:text-3xl font-bold">Books and Learning Materials</h2>
					<button className="text-xs text-gray-200 hover:underline hover:text-yellow-400 transition font-semibold">View All</button>
				</div>
				<div className="flex flex-row flex-wrap justify-evenly gap-[70px] p-3">
					{books.map((item, idx) => (
						<div key={idx} className="shadow flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all">
							<img src={item.img} alt={item.title} className=" w-38 h-42 object-cover mb-2 shadow group-hover:scale-105 transition-transform" />
							<div className="font-bold text-base text-center mb-1 text-white">{item.title}</div>
							<button className="mt-auto text-xs text-yellow-400 hover:underline font-semibold">Read Now</button>
						</div>
					))}
				</div>
			</div>

			{/* Practice Platform Section */}
			<div className="max-w-5xl mx-auto mb-10 mt-20">
				<div className="bg-[#181818] shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center border border-white/10">
					<div className="flex-1 min-w-[220px] mb-6 md:mb-0">
						<h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Practice Platform</h2>
						<p className="text-gray-300 text-base md:text-lg max-w-xs">A hands-on space to practice AI, coding, and data skills with real tools. Learn by experimenting, building, and applying concepts in real time.</p>
					</div>
					<div className="flex-1 flex flex-col gap-6 w-full">
						{practicePlatforms.map((platform) => (
							<a
								key={platform.name}
								href={platform.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-4 group hover:bg-[#232323] p-3 transition"
							>
								<img src={platform.logo} alt={platform.name} className="w-14 h-14 bg-black/20 object-contain" />
								<div>
									<div className="flex items-center gap-1 text-lg font-bold text-white">
										{platform.name}
										<ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 ml-1" />
									</div>
									<div className="text-gray-300 text-sm mt-1 max-w-md">{platform.desc}</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resources;