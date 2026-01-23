import { motion } from 'framer-motion';
import { 
    Lightbulb, Award, ShieldCheck, Users, BookOpen, 
    Target, Compass 
} from 'lucide-react';

// --- DATA ---
const coreValues = [
  {
    icon: Lightbulb,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "group-hover:border-yellow-400/50",
    title: 'Innovation',
    desc: 'Driving creative AI solutions that solve real problems.',
  },
  {
    icon: Award,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "group-hover:border-blue-400/50",
    title: 'Excellence',
    desc: 'Delivering high-quality training and products with measurable impact.',
  },
  {
    icon: ShieldCheck,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "group-hover:border-green-400/50",
    title: 'Integrity',
    desc: 'Building trust through transparency and ethical AI practices.',
  },
  {
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "group-hover:border-purple-400/50",
    title: 'Collaboration',
    desc: 'Partnering with clients, students, and industries for shared success.',
  },
  {
    icon: BookOpen,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "group-hover:border-pink-400/50",
    title: 'Continuous Learning',
    desc: 'Staying ahead in the fast-evolving AI landscape.',
  },
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const WhyAiraLabs = () => {
  return (
    <div className="relative bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20 overflow-hidden font-sans">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* --- HEADER SECTION --- */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-6 uppercase tracking-wider">
                <span>Home</span>
                <span className="text-gray-700">/</span>
                <span>Company</span>
                <span className="text-gray-700">/</span>
                <span className="text-yellow-500">Why Us</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:items-end">
                <div className="flex-1">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">AIyutham?</span>
                    </h1>
                    <div className="h-1 w-24 bg-yellow-500 rounded-full mb-6"></div>
                </div>
                <div className="flex-1">
                    <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6">
                        Choosing the right AI partner can define the success of your digital transformation. 
                        At AIyutham, we go beyond being just a training and solutions provider — we are your 
                        <span className="text-white font-semibold"> innovation partner</span>.
                    </p>
                </div>
            </div>
        </motion.div>

        {/* --- MISSION & VISION (Split Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {/* Mission Card */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative bg-[#161515] border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300"
            >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target size={100} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Making technology available, affordable, and accessible for all to create meaningful impact.
                    </p>
                </div>
                {/* Decoration Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-transparent opacity-50"></div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative bg-[#161515] border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Compass size={100} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                            <Award className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        To lead a future where innovation is endless—nurturing a culture of continuous learning 
                        and discovery that shapes how we live, work, and connect.
                    </p>
                </div>
                {/* Decoration Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50"></div>
            </motion.div>
        </div>

        {/* --- CORE VALUES GRID --- */}
        <div className="mb-10">
            <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
            >
                <span className="w-2 h-8 bg-yellow-500 rounded-sm"></span>
                Core Values
            </motion.h2>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {coreValues.map(({ icon: Icon, title, desc, color, bg, border }, idx) => (
                    <motion.div 
                        key={idx}
                        variants={itemVariants}
                        className={`group p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 ${border} transition-all duration-300 hover:-translate-y-1`}
                    >
                        <div className={`w-12 h-12 rounded-xl ${bg} ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                            {title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>

      </div>
    </div>
  );
};

export default WhyAiraLabs;