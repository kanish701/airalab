import ImageScroller from './ImageScroller';

export default function HeroSection() {
    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-12 lg:py-10 bg-[#161515] overflow-hidden min-h-[90vh]">
            {/*Left Section */}
            <div className="max-w-4xl z-10 animate-fade-in-up lg:pr-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-[1.] bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent font-[Open sans]">
                    Innovating the Future with<br />
                    Intelligent AI Solutions
                </h2>
                <p className="text-base lg:text-lg mb-12 text-gray-300 leading-relaxed max-w-2xl">
                    AI Labs is an innovative AI-driven startup that empowers students, businesses, and industries through advanced artificial intelligence training, intelligent software solutions, and AI-powered automation. We specialize in AI training programs, AI agents, and cutting-edge AI-based applications for diverse sectors.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-3">
                    <button className="group bg-[#FFD700] hover:bg-[#e6c200] text-black px-8 py-1.5 lg:px-10 lg:py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-yellow-500/25 text-base flex items-center justify-center gap-2">
                        Book intro call
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="mt-16 lg:mt-0 lg:mb-10 w-full lg:w-3/5 flex justify-center lg:justify-end relative z-10">
                <div className="relative">
                    {/* Mockup Box */}
                    <div className="relative bg-gray-900 backdrop-blur-sm rounded-2xl shadow-2xl p-0 w-full max-w-2xl transform hover:scale-105 transition-transform duration-700 border border-gray-700/50">
                        {/* Mockup Header */}
                        <div className="flex items-center justify-between px-6 py-2 bg-gray-800 backdrop-blur-sm rounded-t-xl border-b border-gray-700/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-gray-600 rounded-full shadow-sm"></div>
                                <div className="w-3 h-3 bg-gray-600 rounded-full shadow-sm"></div>
                                <div className="w-3 h-3 bg-gray-600 rounded-full shadow-sm"></div>
                            </div>
                            <div className="flex-1 bg-gray-700 rounded-lg px-4 py-1 mx-6 text-sm text-gray-300 flex items-center gap-3 backdrop-blur-sm border border-gray-600">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">AIra</span>
                            </div>
                        </div>

                        {/* The animated image scroller is placed here */}
                        <ImageScroller />

                    </div>
                </div>
            </div>
        </section>
    );
}