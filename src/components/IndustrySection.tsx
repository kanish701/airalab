import DemoImage from '../assets/Dummmy-2.png';

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
        <section className="px-6 sm:px-12 py-16 md:py-24 bg-[#161515] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent font-[Inter]">
                            Websites aren’t just part of
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                            what we do. They’re everything we do.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        From design to development, optimization to maintenance—we provide end-to-end web solutions that drive results and accelerate growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#1c1b1b] p-6 rounded-xl border border-gray-800 
                                       transition-all duration-300 hover:border-yellow-400/50 hover:-translate-y-2 
                                       hover:shadow-2xl hover:shadow-yellow-500/10"
                        >
                            <div className="relative z-10">
                                {/* Image rendering */}
                                <div className="mb-6 w-full h-70 rounded-lg overflow-hidden relative">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-2 text-white transition-colors duration-300 group-hover:text-yellow-400">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-normal mb-6 text-base">
                                    {feature.description}
                                </p>

                                {/* CTA Link */}
                                <a href="#" className="flex items-center text-yellow-400 font-semibold text-sm group-hover:text-yellow-300 transition-all duration-300">
                                    Learn more
                                    <svg
                                        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}