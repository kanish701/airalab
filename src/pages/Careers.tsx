import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Briefcase, MapPin, Clock, ArrowRight, X, Upload 
} from 'lucide-react';

// --- TYPES ---
type Job = {
  title: string;
  location: string;
  type: string;
  description: string;
};

// --- DATA ---
const jobOpenings = [
  {
    title: 'AI Research Engineer',
    location: 'Coimbatore, India',
    type: 'Full Time',
    description: 'Work on cutting-edge AI research and develop innovative solutions for real-world problems. Experience with PyTorch/TensorFlow required.'
  },
  {
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full Time',
    description: 'Build beautiful and scalable web interfaces for AI-powered applications using React, TypeScript, and Tailwind CSS.'
  },
  {
    title: 'AI Trainer',
    location: 'Coimbatore, India',
    type: 'Part Time',
    description: 'Teach and mentor students in AI, ML, and prompt engineering. Passion for education and deep technical knowledge required.'
  }
];

// --- COMPONENTS ---

// The modal component for the application form
const ApplicationModal: React.FC<{
  jobTitle: string;
  onClose: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}> = ({ jobTitle, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
            <div>
                <h2 className="text-xl font-bold text-white">Apply for Position</h2>
                <p className="text-sm text-gray-400 mt-1">Role: <span className="text-yellow-400">{jobTitle}</span></p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} className="text-gray-400" />
            </button>
        </div>
        
        {/* Form */}
        <div className="p-6 md:p-8">
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="applyingFor" value={jobTitle} />
                
                <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white text-sm focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 outline-none transition-all"
                        placeholder="John Doe"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white text-sm focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 outline-none transition-all"
                        placeholder="john@example.com"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white text-sm focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 outline-none transition-all"
                        placeholder="+91 98765 43210"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Resume/CV</label>
                    <div className="relative group">
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            accept=".pdf,.doc,.docx"
                            required
                        />
                        <div className="w-full bg-black/30 border border-dashed border-white/20 rounded-lg p-4 flex flex-col items-center justify-center text-center group-hover:border-yellow-500/50 transition-colors">
                            <Upload size={24} className="text-gray-500 mb-2 group-hover:text-yellow-400 transition-colors" />
                            <span className="text-sm text-gray-300">Click to upload or drag and drop</span>
                            <span className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 mt-4 pt-4 border-t border-white/5">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-4 py-3 rounded-lg text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex-1 bg-yellow-400 text-black px-4 py-3 rounded-lg text-sm font-bold hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-500/20"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
      </motion.div>
    </div>
  );
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleApplyClick = (job: Job) => setSelectedJob(job);
  const handleCloseModal = () => setSelectedJob(null);
  
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const position = formData.get('applyingFor');

    const recipient = 'kanish.d@signatureventures.co.in';
    const subject = `Job Application: ${position} - ${name}`;
    const body = `A new application has been submitted through the website.\n\n--- Candidate Details ---\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nApplying for: ${position}\n---\n\nPlease find the candidate's resume attached.\n\nBest regards,\nAIyutham Website`;
    
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    handleCloseModal();
  };

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen text-white pt-32 pb-24 overflow-hidden font-sans">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-yellow-500/30 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold tracking-widest uppercase">
                <Briefcase size={12} /> We are hiring
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Revolution</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Join our passionate team and help shape the future of AI. We are looking for builders, dreamers, and innovators.
            </p>
        </motion.div>

        {/* Job List */}
        <div className="flex flex-col gap-6">
          {jobOpenings.map((job, idx) => (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#161515] border border-white/10 p-6 md:p-8 rounded-2xl hover:border-yellow-500/30 hover:bg-white/5 transition-all duration-300"
            >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                {job.title}
                            </h2>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-gray-300 border border-white/5">
                                {job.type}
                            </span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                            <span className="flex items-center gap-1"><Clock size={14} /> Posted 2 days ago</span>
                        </div>

                        <p className="text-gray-400 leading-relaxed max-w-2xl">
                            {job.description}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center">
                        <button
                            onClick={() => handleApplyClick(job)}
                            className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg group-hover:shadow-yellow-500/20 whitespace-nowrap"
                        >
                            Apply Now <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      <AnimatePresence>
        {selectedJob && (
            <ApplicationModal
            jobTitle={selectedJob.title}
            onClose={handleCloseModal}
            onSubmit={handleFormSubmit}
            />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;