import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import staticImg from '../../../assets/energy-industry-powerbi-epcgroup.png';
import dynamicImg from '../../../assets/Power-BI-report-dashboard-sharing-Webdashboard-Screenshot-1024x576.png';
import interactiveImg from '../../../assets/yEWMiGnwP9B5bdODGz5RdAd0.jpg';
import tableauLogo from '../../../assets/Tableau.png';
import powerbiLogo from '../../../assets/images-removebg-preview (12).png';
import datastudioLogo from '../../../assets/COzv5rGys_4CEAE=.webp';
import qulik from '../../../assets/qulik.png';
import theNeed from '../../../assets/the-need.png';
import theClarity from '../../../assets/the-clarity.png';
import thePurpose from '../../../assets/the-purpose.png';
import theResult from '../../../assets/the-results.png';

type ModalData = {
  src: string;
  title: string;
};

// Renamed component for better clarity
const DashboardPage = () => {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const openModal = (src: string, title: string) => {
    setModalData({ src, title });
  };

  const closeModal = () => {
    setModalData(null);
  };

  // CORRECTED: Assigned the correct image to each dashboard type
  const dashboardTypes = [
    {
      img: staticImg,
      title: 'Static Dashboards',
    },
    {
      img: dynamicImg,
      title: 'Dynamic Dashboards',
    },
    {
      img: interactiveImg,
      title: 'Interactive Dashboards',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#181818] to-[#121212] min-h-screen text-white pb-20">
      
      {/* ADDED: A main container to constrain the width and center the content on larger screens.
        This is the most important fix for the layout.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-sm pt-8 tracking-wide">
          <a href="/" className="text-blue-400 hover:underline">Home</a>
          <span className="mx-1 text-gray-400">|</span>
          <a href="/capabilities/ai-fundamentals" className="text-blue-400 hover:underline">Capabilities</a>
          <span className="mx-1 text-gray-400">|</span>
          <span className="text-gray-200">Dashboards</span>
        </div>

        {/* Header and Description - two column layout */}
        <div className="flex flex-col md:flex-row md:items-center mt-24 gap-16">
          {/* CORRECTED: Invalid width class 'md:w-1.5/2' changed to 'md:w-1/2' */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold text-white leading-tight">Dashboard<br /> Development<br /> Services</h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-300 text-lg leading-relaxed bg-[#181818] p-6 rounded-lg">
              Dashboard Development is a leading design and development process in creating an interactive platform that contains the key data a company has and can use to make better decisions. One of the biggest highlights of dashboard utilization is the versatility it provides. From data visualization, to project progress tracking, to financial tracking, dashboards are a phenomenal tool both internally and externally.
            </p>
          </div>
        </div>

        {/* Dashboard Section */}
        <div className="mt-14 flex flex-col md:flex-row gap-5 items-center justify-center">
          {dashboardTypes.map((dashboard, index) => (
            <div
              key={index}
              className="relative flex-1 min-w-[260px] max-w-[400px] h-80 rounded-lg shadow-xl overflow-hidden group border border-gray-800"
            >
              <img
                src={dashboard.img}
                alt={dashboard.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center p-5">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-2xl font-semibold text-white mb-4">{dashboard.title}</h3>
                  <button
                    onClick={() => openModal(dashboard.img, dashboard.title)}
                    className="text-white p-3 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8V4h4"/><path d="M20 8V4h-4"/><path d="M4 16v4h4"/><path d="M20 16v4h-4"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools and Technologies */}
        <div className="mt-20 flex flex-col md:flex-row gap-8 items-start">
          {/* CORRECTED: Width classes added up to >100%. Changed both to md:w-1/2 for a 50/50 split. */}
          <div className="md:w-1/2 flex items-start">
            <h2 className="text-4xl font-bold text-white leading-tight">Dashboard Development<br />Tools and Technologies<br />We Use</h2>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-6">
            <div className="bg-[#181818] rounded-md flex items-center px-6 py-5 min-h-[70px]">
              <img src={tableauLogo} alt="Tableau" className="w-10 h-10 mr-4" />
              <span className="text-white text-xl font-normal">Tableau</span>
            </div>
            <div className="bg-[#181818] rounded-md flex items-center px-6 py-5 min-h-[70px]">
              <img src={powerbiLogo} alt="Power BI" className="w-10 h-10 mr-4" />
              <span className="text-yellow-400 text-xl font-normal">Power BI</span>
            </div>
            <div className="bg-[#181818] rounded-md flex items-center px-3 py-5 min-h-[70px]">
              <img src={qulik} alt="Datapad" className="w-18 h-10 mr-4" />
              <span className="text-white text-xl font-normal">Qulik</span>
            </div>
            <div className="bg-[#181818] rounded-md flex items-center px-6 py-5 min-h-[70px]">
              <img src={datastudioLogo} alt="Data Studio" className="w-10 h-10 mr-4" />
              <span className="text-blue-400 text-xl font-normal">Data Studio</span>
            </div>
          </div>
        </div>

        {/* Dashboard Development Principles */}
        <div className="mt-20 flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="md:w-1/3 flex items-start">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Dashboard<br />Development<br />Principles</h2>
          </div>
          <div className="md:w-2/3 flex items-center">
            <p className="text-white text-base md:text-lg font-normal">
              The main principles of effective dashboard design are usability, readability, and efficiency. In other words, the purpose of a dashboard is to assist in delivering complex information in a quick and user-friendly manner.
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Principle Card 1 */}
            <div className="bg-gradient-to-br from-[#232323] to-[#181818] rounded-2xl p-7 flex flex-col shadow-xl border border-transparent hover:border-yellow-400 transition-colors group">
              <div className="flex items-center mb-3">
                <img src={theNeed} alt="The Need" className="w-10 h-10 mr-4" />
                <span className="font-bold text-xl text-white group-hover:text-yellow-400 transition-colors">THE NEED</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">We employ a Lean UX approach, designing dashboards based on user and business objectives and the different ways we can be successful.</p>
            </div>
            {/* Principle Card 2 */}
            <div className="bg-gradient-to-br from-[#232323] to-[#181818] rounded-2xl p-7 flex flex-col shadow-xl border border-transparent hover:border-yellow-400 transition-colors group">
              <div className="flex items-center mb-3">
                <img src={theClarity} alt="The Clarity" className="w-10 h-10 mr-4" />
                <span className="font-bold text-xl text-white group-hover:text-yellow-400 transition-colors">THE CLARITY</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">The expectation for dashboards is like mobile apps: there is no tolerance for a non-intuitive experience that requires lengthy training.</p>
            </div>
            {/* Principle Card 3 */}
            <div className="bg-gradient-to-br from-[#232323] to-[#181818] rounded-2xl p-7 flex flex-col shadow-xl border border-transparent hover:border-yellow-400 transition-colors group">
              <div className="flex items-center mb-3">
                <img src={thePurpose} alt="The Purpose" className="w-10 h-10 mr-4" />
                <span className="font-bold text-xl text-white group-hover:text-yellow-400 transition-colors">THE PURPOSE</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">The tools and technologies we use depend entirely on the target personas and business objectives for each new dashboard we design.</p>
            </div>
            {/* Principle Card 4 */}
            <div className="bg-gradient-to-br from-[#232323] to-[#181818] rounded-2xl p-7 flex flex-col shadow-xl border border-transparent hover:border-yellow-400 transition-colors group">
              <div className="flex items-center mb-3">
                <img src={theResult} alt="The Result" className="w-10 h-10 mr-4" />
                <span className="font-bold text-xl text-white group-hover:text-yellow-400 transition-colors">THE RESULT</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">A successful result is a dashboard that becomes the go-to tool for an organization to understand its success, challenges, and unique insights.</p>
            </div>
        </div>
      </div> {/* End of main content container */}

      {/* Modal - Stays outside the main container to cover the full screen */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#232323] rounded-2xl p-4 shadow-2xl">
                <img src={modalData.src} alt={modalData.title} className="w-full h-auto object-contain rounded-lg max-h-[calc(90vh-80px)]" />
                <div className="flex justify-between items-center mt-4">
                  <h3 className="text-xl font-bold text-yellow-400">{modalData.title}</h3>
                  <button onClick={closeModal} className="text-white text-2xl bg-black/50 rounded-full p-1 hover:bg-black/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardPage;