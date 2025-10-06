import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// It is a best practice in React to manage repeated elements with a data array.
// This makes the code cleaner and easier to update.
const serviceCards = [
    {
        bgImage: '/dist/assets/abstract-3d--Bs_N9OVD.jpg',
        title: 'Build a scalable product with AI',
        description: 'Easily scale your resources up and down based on business needs without hardware limitations.',
        gridSpan: 'lg:col-span-3' // On large screens, this card will span 3 of 6 grid columns.
    },
    {
        bgImage: '/dist/assets/wave-function-img.jpeg',
        title: 'Automate Workflows with AI',
        description: 'Streamline your operations by automating repetitive tasks, freeing up your team for more strategic work.',
        gridSpan: 'lg:col-span-3'
    },
    {
        bgImage: '/dist/assets/wave-particles-big-Bylh26N0.webp',
        title: 'Data-driven Insights',
        description: 'Turn complex data into actionable insights with AI-powered analytics and real-time dashboards.',
        gridSpan: 'lg:col-span-2' // On large screens, this card spans 2 of 6 grid columns.
    },
    {
        bgImage: '/dist/assets/illustration001-BhbiebjC.png',
        title: 'Personalized Experiences',
        description: 'Deliver tailored solutions to every customer using AI-driven recommendations and adaptive systems.',
        gridSpan: 'lg:col-span-2'
    },
    {
        bgImage: '/dist/assets/wave-particles-big-Bylh26N0.webp',
        title: 'Future-Ready Infrastructure',
        description: 'Scale seamlessly and innovate faster with cloud-native AI solutions built for growth.',
        gridSpan: 'lg:col-span-2'
    }
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#161515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
            Driven by Intelligence,<br />Focused on Results
          </h2>
        </motion.div>

        {/* --- RESPONSIVE CARD GRID --- */}
        {/* This grid is 1 column on mobile and 6 columns on large screens. */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden aspect-video ${card.gridSpan}`}
            >
              {/* Background Image */}
              <div
                style={{ backgroundImage: `url(${card.bgImage})` }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- MIDDLE SECTION --- */}
        <div className="text-center my-16 md:my-24 py-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Serving industries that demand speed and scale.
          </h3>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            We specialize in industries where high performance and reliability matter most.
          </p>
        </div>

        {/* --- BOTTOM GRID SECTION --- */}
        {/* This grid adapts from 2 to 3 columns and text size is responsive. */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center">
          <Link to="/capabilities/ai-fundamentals" className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold hover:text-yellow-400 transition-colors">
            Development
          </Link>
          <Link to="/capabilities/ai-freshers-course" className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold hover:text-yellow-400 transition-colors">
            SaaS
          </Link>
          <Link to="/capabilities/ai-bootcamps" className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold hover:text-yellow-400 transition-colors">
            Dashboards
          </Link>
          <Link to="/capabilities/prompt-engineering" className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold hover:text-yellow-400 transition-colors">
            Predictive Analysis
          </Link>
          <Link to="/capabilities/ai-agents" className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold hover:text-yellow-400 transition-colors">
            AI Agents
          </Link>
          <Link to="/capabilities/custom-solutions" className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold hover:text-yellow-400 transition-colors">
            Custom Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
