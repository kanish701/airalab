import { motion } from 'framer-motion';
import { CheckCircle2, Layers, LineChart, Database, ArrowRight } from 'lucide-react';

// Keep your original image imports
import saasImg from '../../../assets/AIchip.png';
import etlImg from '../../../assets/ETL Image.png';
import predictiveImg from '../../../assets/energy-industry-powerbi-epcgroup.png';

const solutionsData = [
    {
        id: 'saas',
        title: "AI based SaaS Solutions",
        description: "At AI Labs, we build AI-powered SaaS platforms that help businesses innovate faster and scale effortlessly. By combining AI automation with cloud-native architecture, our SaaS solutions deliver flexibility, intelligence, and efficiency — customized for your unique business needs.",
        features: [
            "Cloud-Native & Scalable – Grow without heavy infrastructure costs.",
            "AI-Driven Automation – Streamline workflows and customer interactions.",
            "Personalized Experiences – Use machine learning to tailor services for users.",
            "Secure & Reliable – Built with enterprise-grade standards."
        ],
        useCases: "Healthcare platforms, financial dashboards, learning management systems, manufacturing process monitoring.",
        image: saasImg,
        icon: Layers
    },
    {
        id: 'etl',
        title: "ETL Solutions",
        description: "Data is the foundation of every AI solution. At AI Labs, we provide ETL (Extract, Transform, Load) solutions that turn raw data into clean, structured, and actionable insights.",
        features: [
            "Data Extraction – Collect data from multiple sources (databases, APIs, cloud apps).",
            "Data Transformation – Clean, normalize, and enrich data for better accuracy.",
            "Data Loading – Store it efficiently in your data warehouse or analytics AI-Ready.",
            "Pipelines – Optimized pipelines that feed directly into AI and BI systems."
        ],
        useCases: "Consolidating healthcare records, automating financial reporting, integrating student performance data, streamlining manufacturing IoT data.",
        image: etlImg,
        icon: Database
    },
    {
        id: 'predictive',
        title: "Predictive Analysis",
        description: "Stay ahead of the curve with AI-powered predictive analytics that forecast trends, identify risks, and reveal opportunities before they happen.",
        features: [
            "Trend Forecasting – Anticipate market changes and consumer behavior.",
            "Risk Detection – Identify anomalies like fraud or equipment failures early.",
            "Business Optimization – Use predictive models to improve sales, operations, and decision-making.",
            "AI Models – Leveraging machine learning, regression models, and deep learning for accurate predictions."
        ],
        useCasesList: [
            "Healthcare: Predicting patient health outcomes.",
            "Finance: Fraud detection and credit risk analysis.",
            "Education: Forecasting student performance and dropout risks.",
            "Manufacturing: Predictive maintenance and demand forecasting."
        ],
        image: predictiveImg,
        icon: LineChart
    }
];

const AIBasedSaaSSolutions = () => {
    return (
        <div className="relative bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
            
            {/* --- BACKGROUND ELEMENTS --- */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* --- CONTENT CONTAINER --- */}
            <div className="relative z-10 max-w-7xl mx-auto pt-24 pb-20 px-6 lg:px-8">
                
                {/* Breadcrumb */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 text-sm text-gray-500 mb-12"
                >
                    <span>Home</span>
                    <span className="text-gray-700">/</span>
                    <span>Capabilities</span>
                    <span className="text-gray-700">/</span>
                    <span className="text-yellow-500 font-medium">Development</span>
                </motion.div>

                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 max-w-3xl"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Scalable Solutions <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
                            Built for Impact
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        From raw data to predictive insights, we engineer the full lifecycle of your AI infrastructure.
                    </p>
                </motion.div>

                {/* --- SECTIONS LOOP --- */}
                <div className="flex flex-col gap-24">
                    {solutionsData.map((item, index) => {
                        // Alternate layout: Even index = Image Right, Odd index = Image Left
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div 
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                            >
                                {/* Text Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-yellow-400">
                                            <item.icon size={24} />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                                            {item.title}
                                        </h2>
                                    </div>
                                    
                                    <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
                                        {item.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="mb-8">
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Key Features</h3>
                                        <ul className="space-y-3">
                                            {item.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                                    <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                                    <span className="leading-relaxed">
                                                        {feature.includes('–') ? (
                                                            <>
                                                                <strong className="text-white font-semibold">{feature.split('–')[0]}</strong>
                                                                – {feature.split('–')[1]}
                                                            </>
                                                        ) : feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Use Cases Box */}
                                    <div className="bg-[#161515] border border-white/10 rounded-xl p-6 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
                                        <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                                            <ArrowRight className="w-4 h-4" /> Real-world Applications
                                        </h4>
                                        
                                        {item.useCasesList ? (
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                                                {item.useCasesList.map((uc, i) => (
                                                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 shrink-0" />
                                                        {uc}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                {item.useCases}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Image Content */}
                                <div className="flex-1 w-full">
                                    <div className="relative group perspective-1000">
                                        {/* Glow behind image */}
                                        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        
                                        {/* Image Card */}
                                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-y-2">
                                            {/* Top Bar for 'Browser' look */}
                                            <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                            </div>
                                            
                                            {/* Actual Image */}
                                            <div className="relative aspect-[4/3] bg-black/50 p-4 flex items-center justify-center">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    className="w-full h-full object-contain drop-shadow-2xl"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AIBasedSaaSSolutions;