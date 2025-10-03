import DemoImage from '../assets/Dummmy-2.png';

export default function IndustrySection() {
  const features = [
    {
      image: DemoImage,
      title: "Training",
      color: "#FFD700",
      // gradient: "#FFD700",
      // bgGradient: "from-[#FFD700]/10 to-[#FFD700]/5",
      borderColor: "border-[#FFD700]/30",
      description:
        "Hands-on AI training programs designed to bridge the gap between theory and industry practice."
    },
    {
      image: DemoImage,
      title: "Development",
      color: "#FFD700",
      // gradient: "#FFD700",
      // bgGradient: "from-[#FFD700]/10 to-[#FFD700]/5",
      borderColor: "border-[#FFD700]/30",
      description:
        "Modern builds that are fast, scalable, and future-proof using cutting-edge technologies."
    },
    {
      image: DemoImage,
      title: "Dashboard Designing",
      color: "#FFD700",
      // gradient: "#FFD700",
      // bgGradient: "from-[#FFD700]/10 to-[#FFD700]/5",
      borderColor: "border-[#FFD700]/30",
      description:
        "Engaging dashboards with intuitive data visualizations and seamless user experiences."
    }
  ];

  return (
    <section className="px-8 lg:px-16 py-24 lg:py-32 bg-[#161515] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-m lg:text-5xl font-bold mb-2 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent font-[Inter]">
              Websites aren’t just part of
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFD700] to-[#FFD700] bg-clip-text text-transparent">
              what we do. They’re everything we do
            </span>
          </h2>
          <p className="text-gray-400 text-xl lg:text-xl max-w-4xl mx-auto leading-relaxed">
            From design to development, optimization to maintenance - we provide
            end-to-end web solutions that drive results and accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-[#161515] backdrop-blur-sm p-2 md:p-3 border border-gray-700/30 
              hover:${feature.borderColor} transition-all duration-500 hover:-translate-y-4 
              hover:shadow-2xl cursor-pointer [animation-delay:${index * 0.1}s]`}
            >
              {/* Hover glow effect */}
              {/* <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
              ></div> */}

              {/* Top accent line */}
              <div
                className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Image rendering */}
                <div className="mb-2 w-full h-auto  overflow-hidden relative group-hover:scale-95 transition-transform duration-400">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Content */}
                <h3
                  className={`text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-[#FFD700] transition-colors duration-300`}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-snug mb-4 text-sm">
                  {feature.description}
                </p>

                {/* CTA Link */}
                <div
                  className={`flex items-center text-[#FFD700] font-medium text-xs group-hover:text-[#FFD700] transition-all duration-300 group-hover:gap-2`}
                >
                  Learn more
                  <svg
                    className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}