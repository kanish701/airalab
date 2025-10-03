import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// ...existing code...

const ServicesSection = () => {
  // ...existing code...

  return (
    <section className="py-20 bg-[#161515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 text-left">Driven by Intelligence,<br />We Focused on</h2>
        </motion.div>

        {/* Top Cards Section */}
        <div className="flex flex-col gap-6 mb-10">
          {/* Left: Top two cards, w-560 h-235 */}
          <div className="col-span-1 md:col-span-2 flex gap-6">
            <div className="bg-[url('/src/assets/abstract-3d-.jpg')] bg-cover bg-center p-6 flex flex-col justify-end 
                text-left text-white shadow-lg w-[560px] h-[235px] max-w-full">

              <h3 className="text-xl font-semibold mb-2">Build a scalable product with the help of AI</h3>
              <p className="text-gray-300 text-sm">Easily scalable your resource up and down based on the business needs without hardware limitations.</p>
            </div>
           <div className="bg-[url('/src/assets/illustration.jpg')] bg-cover bg-center p-6 flex flex-col justify-end 
                text-left text-white shadow-lg w-[560px] h-[235px] max-w-full">

              <h3 className="text-xl font-semibold mb-2">Automate Workflows with AI</h3>
              <p className="text-gray-300 text-sm">Easily scalable your resource up and down based on the business needs without hardware limitations.</p>
            </div>
          </div>
          {/* Right: Bottom three cards, 3rd/5th w-340 h-235, 4th w-520 h-235 */}
          <div className="flex gap-6">
           <div className="bg-[url('/src/assets/wave-particles-big.webp')] bg-cover bg-center p-6 flex flex-col justify-end 
                text-left text-white shadow-lg w-[340px] h-[235px] max-w-full">
              <h3 className="text-xl font-semibold mb-2">Build a scalable product with the help of AI</h3>
              <p className="text-gray-300 text-sm">Turn complex data into actionable insights with AI-powered analytics and real-life dashboards.</p>
            </div>
     <div className="bg-[url('/src/assets/illustration.jpg')] bg-cover bg-center p-6 flex flex-col justify-end 
                text-left text-white shadow-lg w-[520px] h-[235px] max-w-full">
              <h3 className="text-xl font-semibold mb-2">Personalized Experiences at Scale</h3>
              <p className="text-gray-300 text-sm">Deliver tailored solutions to every customer using AI-driven recommendations and adaptive systems.</p>
            </div>
        <div className="bg-[url('/src/assets/wave-particles-big.webp')] bg-cover bg-center p-6 flex flex-col justify-end 
                text-left text-white shadow-lg w-[340px] h-[235px] max-w-full">
              <h3 className="text-xl font-semibold mb-2">Future-Ready Infrastructure</h3>
              <p className="text-gray-300 text-sm">Scale seamlessly and innovate faster with cloud-native AI solutions built for growth.</p>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center my-20 pt-16">
          <h3 className="text-3xl font-semibold text-white mb-2">Serving industries that demand speed and scale.</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">We specialize in industries where high performance matters most.</p>
        </div>

        {/* Bottom Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 text-center">
          <Link
            to="/capabilities/ai-fundamentals"
            className="text-white text-5xl font-bold hover:text-yellow-400 transition-colors"
          >
            Development
          </Link>

          <Link
            to="/capabilities/ai-freshers-course"
            className="text-white text-5xl font-bold hover:text-yellow-400 transition-colors"
          >
            SaaS
          </Link>

          <Link
            to="/capabilities/ai-bootcamps"
            className="text-white text-5xl font-bold hover:text-yellow-400 transition-colors"
          >
            Dashboards
          </Link>

          <Link
            to="/capabilities/prompt-engineering"
            className="text-white text-5xl font-bold hover:text-yellow-400 transition-colors"
          >
            Predictive Analysis
          </Link>

          <Link
            to="/capabilities/ai-agents"
            className="text-white text-5xl font-bold hover:text-yellow-400 transition-colors"
          >
            AI Agents
          </Link>

          <Link
            to="/capabilities/custom-solutions"
            className="text-white text-5xl font-bold hover:text-yellow-400 transition-colors"
          >
            Custom Solutions
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;