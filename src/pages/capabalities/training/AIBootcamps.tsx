import { motion } from 'framer-motion';
import { 
    Rocket, Brain, Eye, Server, Code, Users, 
    ArrowRight, Trophy, MessageSquareText 
} from 'lucide-react';

// --- ASSETS ---
import bootcampImg from '../../../assets/AIchip.png'; 
import jupiterNotebook from '../../../assets/jupyter logo.png';
import kaggleLogo from '../../../assets/kaggle logo.png';
import githubLogo from '../../../assets/github logo.png';
import img1 from '../../../assets/logo1.png'; // Python
import sckitLogo from '../../../assets/scikit learn logo.png';
import tensorLogo from '../../../assets/tensorflow logo.png';

// --- DATA ---
const bootcampModules = [
  {
    title: 'Applied Deep',
    subtitle: 'Learning',
    desc: 'Stop reading theory. Start training. Build and fine-tune deep neural networks on real datasets immediately. You will code CNNs and RNNs from scratch to solve actual pyellowiction problems.',
    icon: Brain
  },
  {
    title: 'Real-Time',
    subtitle: 'Computer Vision',
    desc: 'Build systems that see in real-time. Develop live face detection, object tracking, and automated inspection tools using YOLO and OpenCV directly on video feeds.',
    icon: Eye
  },
  {
    title: 'Generative AI &',
    subtitle: 'NLP Engines',
    desc: 'Don’t just use ChatGPT—build your own. Train custom Transformers, fine-tune LLMs on proprietary data, and create intelligent chatbots that understand context.',
    icon: MessageSquareText
  },
  {
    title: 'Live Model',
    subtitle: 'Deployment',
    desc: 'A model on your laptop is useless. You will dockerize your AI applications, build REST APIs with FastAPI, and deploy them to live cloud servers (AWS/Azure) for the world to use.',
    icon: Server
  },
  {
    title: 'Industry',
    subtitle: 'Capstone',
    desc: 'Simulate a real startup environment. Join an agile team to architect, build, and ship a full-stack AI product. From data pipeline to user interface, you own the code.',
    icon: Code
  },
  {
    title: 'Career &',
    subtitle: 'Portfolio',
    desc: 'Walk away with more than a certificate. You will leave with a GitHub portfolio of 5+ deployed projects and the experience of having solved production-level bugs.',
    icon: Users
  }
];

const outcomes = [
    "Experience the full AI lifecycle: Data -> Model -> Production",
    "Gain hands-on expertise with PyTorch, TensorFlow & Docker",
    "Debug real-world errors in complex neural networks",
    "Collaborate in agile teams using Git and CI/CD pipelines",
    "Build a portfolio that proves you can do the job"
];

const tools = [
    { name: "PyTorch", img: tensorLogo },
    { name: "Python", img: img1 },
    { name: "Docker", img: githubLogo },
    { name: "HuggingFace", img: sckitLogo },
    { name: "AWS", img: kaggleLogo },
    { name: "FastAPI", img: jupiterNotebook },
];

const AIBootcamps = () => {
  return (
    <div className="relative bg-[#0a0a0a] min-h-screen text-white overflow-hidden font-sans">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        
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
            <span className="text-yellow-500 font-medium">AI Bootcamps</span>
        </motion.div>

        {/* --- HERO SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
            
            {/* Text Content */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center lg:text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-yellow-500/30 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold tracking-widest uppercase">
                    <Rocket size={12} /> Live Project Training
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                    Gain Real-Time <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                        Hands-on Experience
                    </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
                    Stop Learning Syntax. Start Building Systems.
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    This bootcamp is built on the philosophy of "Learning by Doing." You won't just watch tutorials; 
                    you will code, break, debug, and deploy real AI applications in a simulated industry environment.
                </p>
            </motion.div>

            {/* Image Content */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full max-w-md lg:max-w-full"
            >
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-yellow-500/10">
                    <img 
                        src={bootcampImg} 
                        alt="AI Bootcamp" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                        <Trophy className="text-yellow-400 w-5 h-5" />
                        <span className="text-sm font-semibold text-white">5+ Live Projects</span>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* --- CURRICULUM GRID --- */}
        <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-white/10 flex-1"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Your Hands-On Journey</h2>
                <div className="h-px bg-white/10 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bootcampModules.map((item, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative bg-[#161515] p-8 rounded-2xl border border-white/5 hover:border-yellow-500/50 hover:bg-white/5 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                    {item.title}
                                </h3>
                                <h3 className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors">
                                    {item.subtitle}
                                </h3>
                            </div>
                            <div className="p-3 bg-white/5 rounded-lg text-yellow-400 group-hover:scale-110 transition-transform">
                                <item.icon size={24} />
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* --- LEARNING OUTCOMES & TOOLS --- */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
            
            {/* Left: Outcomes List */}
            <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-light text-white mb-2">Practical <br /><span className="font-bold text-yellow-500">Outcomes</span></h2>
                <p className="text-gray-400 mb-10">By the end of this bootcamp, you will:</p>

                <div className="space-y-6">
                    {outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-6 group">
                            <span className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                                0{idx + 1}.
                            </span>
                            <div className="pt-2">
                                <p className="text-xl text-gray-200 font-medium leading-tight group-hover:text-yellow-400 transition-colors">
                                    {outcome}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Tools Grid */}
            <div className="flex-1">
                <div className="bg-[#161515] border border-white/10 rounded-3xl p-8 lg:p-12 h-full flex flex-col justify-center relative overflow-hidden">
                    {/* Background glow for the card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none" />
                    
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Production Stack</h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {tools.map((tool, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                            >
                                <img src={tool.img} alt={tool.name} className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100" />
                                <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* --- CTA SECTION --- */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center py-16 px-6 bg-gradient-to-b from-white/5 to-transparent rounded-3xl border border-white/10"
        >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready to code your future?
            </h3>
            <button className="group relative px-8 py-4 bg-[#FFD700] hover:bg-[#FCD34D] text-black font-bold rounded-xl transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,215,0,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,215,0,0.5)] flex items-center gap-2 mx-auto">
                Join the Bootcamp
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
        </motion.div>

      </div>
    </div>
  );
};

export default AIBootcamps;