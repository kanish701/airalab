

import saasImg from '../../../assets/AIchip.png';
import etlImg from '../../../assets/ETL Image.png';
import predictiveImg from '../../../assets/energy-industry-powerbi-epcgroup.png';

const AIBasedSaaSSolutions = () => {

        return (
            <div className="bg-gradient-to-br from-[#191924] via-[#181818] to-[#232323] min-h-screen text-white pt-16 pb-16 px-2 md:px-0">
                {/* Breadcrumb */}
                <div className="text-gray-400 text-xs pt-4 pl-6">Home | Capabilities | Development</div>

                {/* Card Grid */}
                <div className="max-w-5xl mx-auto flex flex-col gap-10 mt-8">
                    {/* SaaS Solutions */}
                    <div className="group bg-[#232323]/90 rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl hover:-translate-y-1 transition-all border border-white/10">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-white drop-shadow">AI based SaaS Solutions</h1>
                            <p className="text-gray-200 text-base md:text-lg mb-4 leading-relaxed">At AI Labs, we build AI-powered SaaS platforms that help businesses innovate faster and scale effortlessly. By combining AI automation with cloud-native architecture, our SaaS solutions deliver flexibility, intelligence, and efficiency — customized for your unique business needs.</p>
                            <div className="mb-3">
                                <span className="font-bold text-white">Key Features</span>
                                <ul className="list-disc list-inside text-gray-300 text-base mt-2 space-y-1 pl-2">
                                    <li>Cloud-Native &amp; Scalable – Grow without heavy infrastructure costs.</li>
                                    <li>AI-Driven Automation – Streamline workflows and customer interactions.</li>
                                    <li>Personalized Experiences – Use machine learning to tailor services for users.</li>
                                    <li>Secure &amp; Reliable – Built with enterprise-grade standards.</li>
                                </ul>
                            </div>
                            <div className="text-base text-yellow-300 font-semibold mt-2">
                                Use Cases: <span className="text-white font-medium">Healthcare platforms, financial dashboards, learning management systems, manufacturing process monitoring.</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-full md:w-64 flex justify-center">
                            <img src={saasImg} alt="SaaS" className="rounded-xl object-contain w-60 h-44 bg-black/10 shadow-lg group-hover:scale-105 transition-transform" />
                        </div>
                    </div>

                    {/* ETL Solutions */}
                    <div className="group bg-[#232323]/90 rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl hover:-translate-y-1 transition-all border border-white/10">
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-white drop-shadow">ETL Solutions</h2>
                            <p className="text-gray-200 text-base md:text-lg mb-4 leading-relaxed">Data is the foundation of every AI solution. At AI Labs, we provide ETL (Extract, Transform, Load) solutions that turn raw data into clean, structured, and actionable insights.</p>
                            <div className="mb-3">
                                <span className="font-bold text-white">Key Features</span>
                                <ul className="list-disc list-inside text-gray-300 text-base mt-2 space-y-1 pl-2">
                                    <li>Data Extraction – Collect data from multiple sources (databases, APIs, cloud apps).</li>
                                    <li>Data Transformation – Clean, normalize, and enrich data for better accuracy.</li>
                                    <li>Data Loading – Store it efficiently in your data warehouse or analytics AI-Ready.</li>
                                    <li>Pipelines – Optimized pipelines that feed directly into AI and BI systems.</li>
                                </ul>
                            </div>
                            <div className="text-base text-yellow-300 font-semibold mt-2">
                                Use Cases: <span className="text-white font-medium">Consolidating healthcare records, automating financial reporting, integrating student performance data, streamlining manufacturing IoT data.</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-full md:w-64 flex justify-center">
                            <img src={etlImg} alt="ETL" className="rounded-xl object-contain w-60 h-44 bg-black/10 shadow-lg group-hover:scale-105 transition-transform" />
                        </div>
                    </div>

                    {/* Predictive Analysis */}
                    <div className="group bg-[#232323]/90 rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center hover:shadow-2xl hover:-translate-y-1 transition-all border border-white/10">
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-white drop-shadow">Predictive Analysis</h2>
                            <p className="text-gray-200 text-base md:text-lg mb-4 leading-relaxed">Stay ahead of the curve with AI-powered predictive analytics that forecast trends, identify risks, and reveal opportunities before they happen.</p>
                            <div className="mb-3">
                                <span className="font-bold text-white">What We Offer</span>
                                <ul className="list-disc list-inside text-gray-300 text-base mt-2 space-y-1 pl-2">
                                    <li><span className="text-blue-400 font-semibold">Trend Forecasting</span> – Anticipate market changes and consumer behavior.</li>
                                    <li><span className="text-red-400 font-semibold">Risk Detection</span> – Identify anomalies like fraud or equipment failures early.</li>
                                    <li><span className="text-green-400 font-semibold">Business Optimization</span> – Use predictive models to improve sales, operations, and decision-making.</li>
                                    <li><span className="text-yellow-300 font-semibold">AI Models</span> – Leveraging machine learning, regression models, and deep learning for accurate predictions.</li>
                                </ul>
                            </div>
                            <div className="text-base text-yellow-300 font-semibold mt-2">
                                Use Cases:
                                <ul className="list-disc list-inside text-white text-sm mt-1 space-y-1 pl-2">
                                    <li>Healthcare: Predicting patient health outcomes.</li>
                                    <li>Finance: Fraud detection and credit risk analysis.</li>
                                    <li>Education: Forecasting student performance and dropout risks.</li>
                                    <li>Manufacturing: Predictive maintenance and demand forecasting.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-full md:w-64 flex justify-center">
                            <img src={predictiveImg} alt="Predictive Analysis" className="rounded-xl object-contain w-60 h-44 bg-black/10 shadow-lg group-hover:scale-105 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default AIBasedSaaSSolutions;