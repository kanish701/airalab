import aiChip from '../../../assets/kid.png';
import jupiterNotebook from '../../../assets/jupyter logo.png';
import kaggleLogo from '../../../assets/kaggle logo.png';
import githubLogo from '../../../assets/github logo.png';
import img1 from '../../../assets/logo1.png';
import sckitLogo from '../../../assets/scikit learn logo.png';
import tensorLogo from '../../../assets/tensorflow logo.png';

const learnItems = [
  {
    title: 'Introduction to',
    subtitle: 'AI & ML',
    desc: 'Explore the fundamentals of artificial intelligence, its different types (narrow vs. general AI and machine learning), and how AI is applied across industries like healthcare, finance, and education.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h.01M7 17h.01M17 7h.01M17 17h.01" /></svg>
    )
  },
  {
    title: 'Python',
    subtitle: 'for AI',
    desc: 'Start with Python basics and gradually move to essential libraries like NumPy for numerical operations and Pandas for handling data. You’ll also practice coding in Jupyter Notebooks and Google Colab, making it easy to learn and experiment.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 8h8v8H8z" /></svg>
    )
  },
  {
    title: 'Data',
    subtitle: 'Preparation',
    desc: 'Learn how to collect, raw datasets, clean them to remove errors or missing values, and use visualization tools such as Matplotlib and Seaborn to identify patterns and insights.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h10v10H7z" /></svg>
    )
  },
  {
    title: 'Machine Learning',
    subtitle: 'Essentials',
    desc: 'Understand the core ML algorithms and build simple models with Scikit-learn. You’ll cover regression, classification, clustering and more.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
    )
  },
  {
    title: 'Mini',
    subtitle: 'Projects',
    desc: 'Apply your learning with beginner-friendly projects, like spam email detection, house price prediction using regression, and building a basic chatbot to understand real-world AI workflows.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2" /></svg>
    )
  },
  {
    title: 'Career',
    subtitle: 'Preparation',
    desc: 'Build a solid foundation for your AI career by creating a polished resume, setting up a GitHub portfolio with your projects, and receiving guidance for internships, interviews, and job opportunities in AI-related fields.',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
    )
  }
];

const AIFreshersCourse = () => {
  return (
    <div className="bg-[#181818] min-h-screen text-white pb-16 pt-16">
      {/* Breadcrumb */}
      <div className="text-gray-400 text-xs pt-8 pl-6">Home | Capabilities | AI Freshers Course</div>

      {/* Header Row */}
      <div className="bg-[#181818] flex items-center justify-center p-4 md:p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 max-w-7xl w-full">

          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-4 lg:mb-4">
              AI Freshers
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-4 lg:mb-6">
              Kickstart Your Career in Artificial Intelligence
            </h2>
            <p className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed">
              The AI Freshers Program is tailored for college students, graduates, and career changers who are new to artificial intelligence. This course covers fundamental concepts, practical exercises, and real-world projects that help learners build a strong base in AI and become employable in today’s data-driven world.
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

      {/* Learning Outcomes & Tools Section */}
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
                      Gain hands-on<br />coding skills in<br />Python & AI libraries
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">02.</span>
                  <div className="flex-1 pt-1 md:pt-2">
                    <span className="text-lg md:text-xl lg:text-2xl text-white leading-tight">
                      Understand basic<br />AI & ML workflows
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">03.</span>
                  <div className="flex-1 pt-1 md:pt-2">
                    <span className="text-lg md:text-xl lg:text-2xl text-white leading-tight">
                      Build mini projects to<br />showcase in a<br />GitHub portfolio
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
                      Be prepared for<br />advanced AI<br />specializations
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">05.</span>
                  <div className="flex-1 pt-1 md:pt-2">
                    <span className="text-lg md:text-xl lg:text-2xl text-white leading-tight">
                      Increase<br />employability in<br />AI-driven industries
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
                  <img src={tensorLogo} alt="TensorFlow Logo" className="w-24 h-24" />
                </div>
                <div className="flex justify-center">
                  <img src={img1} alt="Python Logo" className="w-20 h-20" />
                </div>
                <div className="flex justify-center">
                  <img src={githubLogo} alt="GitHub Logo" className="w-full h-16" />
                </div>

                {/* Second column */}
                <div className="flex justify-center">
                  <img src={sckitLogo} alt="Scikit-learn Logo" className="w-full h-20" />
                </div>
                <div className="flex justify-center">
                  <img src={kaggleLogo} alt="Kaggle Logo" className="w-full h-20" />
                </div>
                <div className="flex justify-center">
                  <img src={jupiterNotebook} alt="Jupyter Notebook Logo" className="w-24 h-22" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h3 className="text-base md:text-lg font-semibold text-white mb-4 text-center">Start building your future with us?</h3>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded shadow transition-all text-sm">Click Here Now</button>
      </div>
    </div>
  );
};

export default AIFreshersCourse;