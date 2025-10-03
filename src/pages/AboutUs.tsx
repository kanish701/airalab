
// import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import avatar from '../assets/profile.jpg';
import valueimage1 from '../assets/earthblack-illustration.jpg'
import valueimage2 from '../assets/illustration.jpg'
import valueimage3 from '../assets/illustration001.png'
import valueimage4 from '../assets/wave-particles-big.webp'

const AboutUs = () => {
  const teamMembers = [
    { name: 'Jyothikumaran', role: 'Founder & CEO', linkedin: '#', img: avatar },
    { name: 'Karthyan', role: 'Founder & CTO', linkedin: '#', img: avatar },
    { name: 'Arvindh Jyothikumaran', role: 'Founder', linkedin: '#', img: avatar },
    { name: 'Adithya Jyothikumaran', role: 'Founder', linkedin: '#', img: avatar },
  ];

  const values = [
    {
      title: 'Collaboration',
      description: 'Great things happen together. We co-create with students, businesses, and industries to amplify success.',
      img: '/src/assets/geometric points-lines.jpg',
    },
    {
      title: 'Excellence',
      description: 'Every course, product, and solution is built with excellence, driven by real impact and lasting value.',
      img: '/src/assets/abstract-3d-.jpg',
    },
    {
      title: 'Innovation',
      description: 'We don’t just follow trends, we create them. Innovation fuels bold, intelligent solutions.',
      img: '/src/assets/AIchip.png',
    },
    {
      title: 'Continuous Learning',
      description: 'AI change is the only constant. We stay curious, adapt fast, and grow with every challenge.',
      img: '/src/assets/Basic_Ui__28186_29.jpg',
    },
    {
      title: 'Integrity',
      description: 'Trust is our currency. We believe AI should be transparent, responsible, and built for good.',
      img: '/src/assets/ETL Image.png',
    },
  ];



  return (
    <div className="pt-8 bg-[#181818] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-gray-400 text-sm mb-4 mt-2">Home / Company / About Us</nav>
      </div>

      {/* Hero Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-300 text-lg mb-4">
            AIra Labs is an innovative AI-driven startup that empowers students, businesses, and industries through advanced artificial intelligence training, intelligent software solutions, and AI-powered automation. We specialize in AI training programs, AI agents, and cutting-edge AI-based applications for diverse sectors.
          </p>
          <p className="text-gray-300 text-lg">
            Founded in 2025 in Coimbatore, AIra Labs emerged from a vision to bridge the gap between AI innovation and real-world application. Our team brings together expertise in AI engineering, education, and software development to deliver transformative solutions.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-4xl font-bold text-white underline decoration-blue-500 decoration-4">Our</span>
            <span className="block text-4xl font-light text-gray-300 mt-2">Team Members</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl flex flex-col items-center shadow-lg overflow-hidden">
                <div className="flex-1 flex flex-col items-center justify-center py-6">
                  <img src={member.img} alt={member.name} className="w-28 h-28 object-contain mb-2" />
                </div>
                <div className="w-full bg-[#232323] flex items-center justify-between px-4 py-3">
                  <div className="flex flex-col text-left">
                    <span className="text-white font-semibold text-base leading-tight">{member.name}</span>
                    <span className="text-white text-sm leading-tight">{member.role}</span>
                  </div>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="ml-2 bg-[#181818] rounded-full p-2 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Left column: Collaboration (large card) */}
            <div className="md:col-span-1 flex flex-col justify-between">
              <div className="relative overflow-hidden shadow-md h-[350px] md:h-[490px] bg-black">
                <img src={valueimage1} alt={values[0].title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white text-2xl font-semibold mb-2 drop-shadow-lg">{values[0].title}</div>
                  <div className="text-gray-200 text-base drop-shadow-lg max-w-xs">{values[0].description}</div>
                </div>
              </div>
            </div>

            {/* Right columns: 2x2 grid for other values */}
            <div className="md:col-span-2 grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-2">
              {/* Excellence */}
              <div className="relative overflow-hidden shadow-md h-[180px] md:h-[200px] bg-black">
                <img src={valueimage2} alt={values[1].title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="absolute bottom-2 left-0 p-4">
                  <div className="text-white text-xl font-semibold mb-1 drop-shadow-lg">{values[1].title}</div>
                  <div className="text-gray-200 text-sm drop-shadow-lg max-w-xs">{values[1].description}</div>
                </div>
              </div>
              {/* Integrity */}
              <div className="relative overflow-hidden shadow-md h-[260px] md:h-[300px] bg-black">
                <img src={valueimage4} alt={values[4].title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="text-white text-xl font-semibold mb-1 drop-shadow-lg">{values[4].title}</div>
                  <div className="text-gray-200 text-sm drop-shadow-lg max-w-xs">{values[4].description}</div>
                </div>
              </div>
              {/* Innovation */}
              <div className="relative overflow-hidden shadow-md h-[260px] md:h-[260px] bg-black">
                <img src={valueimage3} alt={values[2].title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="text-white text-xl font-semibold mb-1 drop-shadow-lg">{values[2].title}</div>
                  <div className="text-gray-200 text-sm drop-shadow-lg max-w-xs">{values[2].description}</div>
                </div>
              </div>
              {/* Continuous Learning */}
              <div className="relative overflow-hidden shadow-md h-[200px] md:h-[220px] bg-black">
                <img src={valueimage4} alt={values[3].title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="text-white text-xl font-semibold mb-1 drop-shadow-lg">{values[3].title}</div>
                  <div className="text-gray-200 text-sm drop-shadow-lg max-w-xs">{values[3].description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;