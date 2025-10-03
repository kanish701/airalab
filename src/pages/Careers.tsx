import React, { useState } from 'react';

// The modal component for the application form
type ApplicationModalProps = {
  jobTitle: string;
  onClose: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const ApplicationModal: React.FC<ApplicationModalProps> = ({ jobTitle, onClose, onSubmit }) => {
  return (
    // Modal backdrop
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      {/* Modal content */}
      <div className="bg-[#232323] shadow-xl p-6 md:p-8 w-full max-w-lg border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-2">Apply for Position</h2>
        <p className="text-gray-400 text-sm mb-6">Please fill out the form below. All fields are required.</p>
        
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-6">
            {/* Applying For (Read-only) */}
            <div>
              <label htmlFor="applyingFor" className="block text-sm font-medium text-gray-300 mb-1">Applying For</label>
              <input
                type="text"
                id="applyingFor"
                name="applyingFor"
                className="w-full bg-[#181818] border-gray-600 rounded-md p-2 text-gray-400 text-sm"
                defaultValue={jobTitle}
                readOnly
              />
            </div>
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-[#181818] border-gray-600 rounded-md p-2 text-white text-sm focus:ring-gray-500 focus:border-gray-500"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#181818] border-gray-600 rounded-md p-2 text-white text-sm focus:ring-gray-500 focus:border-gray-500"
                required
              />
            </div>
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-[#161515] border-gray-600 rounded-md p-2 text-white text-sm focus:ring-gray-500 focus:border-gray-500"
                required
              />
            </div>
             {/* Resume Upload */}
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-1">Resume/CV</label>
              <input
                type="file"
                id="resume"
                name="resume"
                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600"
                accept=".pdf,.doc,.docx"
                required
              />
               <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX files only.</p>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-600 transition shadow-sm"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const jobOpenings = [
  {
    title: 'AI Research Engineer',
    location: 'Coimbatore, India',
    type: 'Full Time',
    description: 'Work on cutting-edge AI research and develop innovative solutions for real-world problems.'
  },
  {
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full Time',
    description: 'Build beautiful and scalable web interfaces for AI-powered applications.'
  },
  {
    title: 'AI Trainer',
    location: 'Coimbatore, India',
    type: 'Part Time',
    description: 'Teach and mentor students in AI, ML, and prompt engineering.'
  }
];

type Job = {
  title: string;
  location: string;
  type: string;
  description: string;
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
    const body = `A new application has been submitted through the website.\n\n--- Candidate Details ---\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nApplying for: ${position}\n---\n\nPlease find the candidate's resume attached.\n\nBest regards,\nAIra Labs Website`;
    
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-[#161515] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">Careers</h1>
        <p className="text-gray-400 text-base mb-10 text-center max-w-2xl mx-auto">
          Join our passionate team and help shape the future of AI. Explore our current openings and become part of our mission to make AI accessible and impactful for everyone.
        </p>
        <div className="flex flex-col gap-6">
          {jobOpenings.map((job, idx) => (
            <div key={idx} className="bg-[#232323] shadow-md p-6 flex flex-col gap-2 border-gray-600">
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between mb-2">
                <h2 className="text-xl font-semibold text-white">{job.title}</h2>
                {/* CHANGED: Text color for the job type badge is now white */}
                <span className="text-xs font-medium px-3 py-1 rounded-full text-white">{job.type}</span>
              </div>
              <div className="text-gray-400 text-xs mb-1">{job.location}</div>
              <div className="text-gray-300 text-sm mb-2">{job.description}</div>
              {/* CHANGED: Text color for the "Apply Now" button is now white */}
              <button
                onClick={() => handleApplyClick(job)}
                className="self-end text-white px-4 py-1.5 rounded-md font-medium hover:bg-white-800 transition"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {selectedJob && (
        <ApplicationModal
          jobTitle={selectedJob.title}
          onClose={handleCloseModal}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default Careers;