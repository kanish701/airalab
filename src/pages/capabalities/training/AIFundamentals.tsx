import aiChip from '../../../assets/AIchip.png';
import jupiterNotebook from '../../../assets/jupyter logo.png'
import kaggleLogo from '../../../assets/kaggle logo.png'
import githubLogo from '../../../assets/github logo.png'
import img1 from '../../../assets/logo1.png'
import sckitLogo from '../../../assets/scikit learn logo.png'
import tensorLogo from '../../../assets/tensorflow logo.png'



const learnItems = [
  {
    title: 'Core',
    subtitle: 'Concepts',
    desc: 'Understand the foundations of artificial intelligence, including its history, key milestones, and how AI is shaping industries today and in the future.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h.01M7 17h.01M17 7h.01M17 17h.01" /></svg>
    )
  },
  {
    title: 'Machine Learning',
    subtitle: 'Basics',
    desc: 'Learn different types of machine learning (supervised, unsupervised, reinforcement), how models are trained, and where they are applied in real life.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
    )
  },
  {
    title: 'Neural',
    subtitle: 'Networks',
    desc: 'Get introduced to the building blocks of deep learning, including perceptrons, activation functions, and simple neural network structures.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2" /></svg>
    )
  },
  {
    title: 'Data',
    subtitle: 'Handling',
    desc: 'Explore how to collect, clean, preprocess, and visualize data using tools like Pandas and Matplotlib, preparing it for AI and ML models.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h10v10H7z" /></svg>
    )
  },
  {
    title: 'AI Tools &',
    subtitle: 'Frameworks',
    desc: 'Gain hands-on experience with Python, Jupyter Notebooks, and beginner-friendly frameworks like Scikit-learn, TensorFlow, and PyTorch',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 8h8v8H8z" /></svg>
    )
  },
  {
    title: 'Ethics in',
    subtitle: ' Artificial Intelligence',
    desc: 'Discover the importance of responsible AI, including fairness, bias, transparency, and the societal impact of intelligent systems.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
    )
  }
];

const AIFundamentals = () => {
  return (
    <div className="bg-[#181818] min-h-screen text-white pb-16 pt-16">
      {/* Breadcrumb */}
      <div className="text-gray-400 text-xs pt-8 pl-6">Home | Capabilities | Training</div>

      {/* Header Row */}
      <div className="bg-[#181818] flex items-center justify-center p-4 md:p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 max-w-7xl w-full">

          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-4 lg:mb-4">
              AI Foundation
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-4 lg:mb-6">
              Build Your Foundation in Artificial Intelligence
            </h2>
            <p className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed">
              AI Fundamentals program is designed for students, beginners, and working professionals who want to gain a strong foundation in artificial intelligence. Whether you're exploring AI for the first time or looking to upskill, this course will equip you with the essential knowledge and practical skills to move forward with confidence.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <img src={aiChip} alt="AI Chip" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>

        </div>
      </div>

      {/* What You'll Learn */}
      <div className="p-14 mt-8">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6 ">What You’ll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {learnItems.map((item, idx) => (
            <div key={idx} className="bg-[#232323] p-4 flex flex-col h-full min-h-[120px] shadow border border-[#232323] hover:border-yellow-400 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="sm:text-md md:text-2xl font-bold text-white">{item.title}</h3>
                  <h3 className="sm:text-md md:text-2xl font-bold text-white">{item.subtitle}</h3>

                </div>
                <span className="mr-2">{item.icon}</span>
              </div>
              <p className="text-gray-300 text-md p-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>




      {/* Learning Outcomes & Tools Section -----------------------------> Modify  */}
      <div className="flex flex-col gap-18 px-6 mt-10">
        {/* Learning Outcomes */}
        <div className="bg-[#181818] min-h-screen flex items-center justify-center p-4 md:p-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 max-w-7xl w-full">

            {/* Left side - Title and description */}
            <div className="flex-1 flex flex-col justify-center lg:justify-start text-center lg:text-left lg:max-w-sm">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-400 font-light leading-tight mb-6 lg:mb-8">
                Learning<br />Outcomes
              </h2>
              <p className="text-gray-500 text-base md:text-lg">
                By the end of this course, you'll<br />be able to
              </p>
            </div>

            {/* Right side - Learning outcomes in two columns */}
            <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">

              {/* First column */}
              <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 flex-1">
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">01.</span>
                  <div className="flex-1 pt-1 md:pt-2">
                    <span className="text-lg md:text-xl lg:text-2xl text-white leading-tight">
                      Understand AI<br />concepts and<br />workflows.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">02.</span>
                  <div className="flex-1 pt-1 md:pt-2">
                    <span className="text-lg md:text-xl lg:text-2xl text-white leading-tight">
                      Build simple<br />machine<br />learning models.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">03.</span>
                  <div className="flex-1 pt-1 md:pt-2">
                    <span className="text-lg md:text-xl lg:text-2xl text-white leading-tight">
                      Analyze datasets<br />and extract<br />insights.
                    </span>
                  </div>
                </div>
              </div>

              {/* Second column */}
              <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 flex-1 ">
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">04.</span>
                  <div className="flex-1 pt-1 md:pt-2">
                    <span className="text-lg md:text-xl lg:text-2xl text-white leading-tight">
                      Apply AI thinking<br />to real-world<br />problems
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">05.</span>
                  <div className="flex-1 pt-1 md:pt-2">
                    <span className="text-lg md:text-xl lg:text-2xl text-white leading-tight">
                      Be prepared for<br />advanced AI<br />courses and<br />projects.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#181818] flex items-center justify-center p-4 mt-16 md:p-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl w-full">

            {/* Left side - Title */}
            <div className="flex-1 flex flex-col justify-center text-center lg:text-right">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight">
                Supporting<br />Tools for AI<br />Foundations
              </h2>
            </div>

            {/* Vertical divider line */}
            <div className="hidden lg:block w-1 h-80 bg-white/80"></div>

            {/* Right side - Tool logos in 2x3 grid */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <div className="grid grid-cols-2 gap-x-16 gap-y-12 items-center">

                {/* First column */}
                <div className="flex justify-center">
                  <img src={tensorLogo} alt="Scikit-learn" className="w-24 h-24" />
                </div>

                <div className="flex justify-center">

                  <img src={img1} alt="GitHub" className="w-20 h-20" />

                </div>

                <div className="flex justify-center">
                  <img src={githubLogo} alt="Scikit-learn" className="w-full h-16" />
                </div>



                {/* Second column */}
                <div className="flex justify-center">
                  <img src={sckitLogo} alt="Jupyter" className="w-full h-20" />
                </div>

                <div className="flex justify-center">
                  <img src={kaggleLogo} alt="Jupyter" className="w-full h-20" />
                </div>
                <div className="flex justify-center">
                  <img src={jupiterNotebook} alt="TensorFlow" className="w-24 h-22" />
                </div>


            


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h3 className="text-base md:text-lg font-semibold text-white mb-4 text-center">Start building your future with us ?</h3>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded shadow transition-all text-sm">Click Here Now</button>
      </div>
    </div>
  );
};

export default AIFundamentals;
