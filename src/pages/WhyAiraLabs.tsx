import { Lightbulb, Award, ShieldCheck, Users, BookOpen } from 'lucide-react';

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Driving creative AI solutions that solve real problems.',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'Delivering high-quality training and products with measurable impact.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'Building trust through transparency and ethical AI practices.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'Partnering with clients, students, and industries for shared success.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'Staying ahead in the fast-evolving AI landscape.',
  },
];

const WhyAiraLabs = () => (
  // CHANGED: Increased top padding from py-12 to pt-32 to create space for a header
  <div className="min-h-screen bg-[#161515] text-white pt-32 pb-12 px-4">
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-gray-400 text-xs mb-2">Home / Company / Contact us</div>
      <div className="flex flex-col md:flex-row md:items-start md:gap-8 mb-4">
        {/* CHANGED: Removed gradient text and used a solid white color */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 md:mb-0 whitespace-nowrap">Why AIra Labs?</h1>
        <div className="text-gray-200 text-base md:text-lg md:mt-1">
          Choosing the right AI partner can define the success of your digital transformation. At AI Labs, we go beyond being just a training and solutions provider — we are your innovation partner. Here’s why businesses, students, and professionals trust us:
        </div>
      </div>
      {/* Mission & Vision */}
      <div className="bg-gradient-to-r from-[#232323] to-[#232323]/80 mt-6 mb-10 flex flex-col md:flex-row gap-6 p-6 shadow-lg border border-white/10">
        <div className="flex-1 flex flex-col gap-2">
          <div className="font-semibold text-yellow-400 text-lg mb-1 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-400" /> Our Mission:
          </div>
          <div className="text-gray-200 text-base">Making technology available, affordable, and accessible for all to create meaningful impact.</div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="font-semibold text-blue-400 text-lg mb-1 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-400" /> Our Vision:
          </div>
          <div className="text-gray-200 text-base">To lead a future where innovation is endless nurturing a culture of continuous learning, adaptability, and discovery that drives breakthroughs, shaping how we live, work, and connect.</div>
        </div>
      </div>
      {/* Core Values */}
      <div className="mt-8">
        <div className="text-gray-300 text-3xl font-bold mb-6 tracking-tight">Core Values</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {coreValues.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={`rounded-2xl p-6 bg-[#232323]/90 shadow-lg border border-white/10 flex flex-col items-start gap-2 hover:scale-[1.03] transition-transform group`}>
              {/* CHANGED: Replaced the gradient background with a subtle, consistent background color */}
              <div className={`bg-white/5 p-2 mb-2 shadow group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-lg font-bold text-white mb-1">{title}</div>
              <div className="text-gray-300 text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default WhyAiraLabs;