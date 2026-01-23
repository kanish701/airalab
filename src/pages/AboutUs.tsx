import { motion } from 'framer-motion';
import { Linkedin, ArrowUpRight } from 'lucide-react';

// --- ASSETS ---
// (Keep your existing imports)
import avatar from '../assets/profile.jpg';
import valueimage1 from '../assets/earthblack-illustration.jpg';
import valueimage2 from '../assets/illustration.jpg';
import valueimage3 from '../assets/illustration001.png';
import valueimage4 from '../assets/wave-particles-big.webp';

// --- DATA ---
const teamMembers = [
  { name: 'Prabhu Lingam', role: 'Founder & CEO', linkedin: '#', img: avatar },
  { name: 'Co-Founder Name', role: 'Founder & CTO', linkedin: '#', img: avatar },
  { name: 'Co-Founder Name', role: 'Founder', linkedin: '#', img: avatar },
  { name: 'Co-Founder Name', role: 'Founder', linkedin: '#', img: avatar },
];

const values = [
  {
    title: 'Collaboration',
    description: 'Great things happen together. We co-create with students, businesses, and industries to amplify success.',
    img: valueimage1,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    height: 'h-64 md:h-full' 
  },
  {
    title: 'Excellence',
    description: 'Every course, product, and solution is built with excellence, driven by real impact and lasting value.',
    img: valueimage2,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    height: 'h-64'
  },
  {
    title: 'Innovation',
    description: 'We don’t just follow trends, we create them. Innovation fuels bold, intelligent solutions.',
    img: valueimage3,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    height: 'h-64'
  },
  {
    title: 'Continuous Learning',
    description: 'AI change is the only constant. We stay curious, adapt fast, and grow with every challenge.',
    img: valueimage4, // Using image 4 to vary texture
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    height: 'h-64'
  },
  {
    title: 'Integrity',
    description: 'Trust is our currency. We believe AI should be transparent, responsible, and built for good.',
    img: valueimage4, // Using image 4 again or a different one if available
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    height: 'h-64'
  },
];

const AboutUs = () => {
  return (
    <div className="relative bg-[#0a0a0a] min-h-screen text-white font-sans overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        
        {/* --- BREADCRUMB --- */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-gray-500 mb-12 uppercase tracking-wider font-mono"
        >
            <span>Home</span>
            <span className="text-gray-700">/</span>
            <span>Company</span>
            <span className="text-gray-700">/</span>
            <span className="text-yellow-500">About Us</span>
        </motion.div>

        {/* --- HERO SECTION --- */}
        <section className="mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
            >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                    We Are <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
                        AIyutham.
                    </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-6 border-l-2 border-yellow-500/50 pl-6">
                    An innovative AI-driven startup empowering students, businesses, and industries through advanced training, intelligent software, and automation.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                    Founded in 2025 in Coimbatore, AIyutham emerged from a vision to bridge the gap between AI innovation and real-world application. Our team brings together expertise in AI engineering, education, and software development to deliver transformative solutions.
                </p>
            </motion.div>
        </section>

        {/* --- TEAM SECTION --- */}
        <section className="mb-24">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Team</h2>
                    <p className="text-gray-400">Meet the minds behind the intelligence.</p>
                </div>
                <div className="h-px bg-white/10 w-full max-w-md hidden md:block"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative bg-[#161515] border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2"
                    >
                        {/* Image Container */}
                        <div className="h-64 bg-gradient-to-b from-white/5 to-transparent flex items-end justify-center pt-8 overflow-hidden relative">
                            <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]"></div>
                            <img 
                                src={member.img} 
                                alt={member.name} 
                                className="h-full w-auto object-contain drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
                            />
                        </div>
                        
                        {/* Info Container */}
                        <div className="p-5 border-t border-white/10 bg-[#161515] relative z-10">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                                        {member.name || "Team Member"}
                                    </h3>
                                    <p className="text-sm text-gray-400 font-mono mt-1">
                                        {member.role}
                                    </p>
                                </div>
                                <a 
                                    href={member.linkedin} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                                >
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* --- VALUES SECTION (Bento Grid) --- */}
        <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                {values.map((value, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`relative rounded-3xl overflow-hidden border border-white/10 group ${value.colSpan} ${value.rowSpan} ${value.height}`}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img 
                                src={value.img} 
                                alt={value.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                            />
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2 group-hover:text-yellow-400 transition-colors">
                                    {value.title}
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5" />
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;