import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, Plus } from 'lucide-react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiry: '',
        message: '',
    });
    const [activeField, setActiveField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-[#050505] min-h-screen text-white pt-24 pb-12 font-sans selection:bg-white selection:text-black">
            
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                
                {/* --- HEADER --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-24 border-b border-neutral-800 pb-12"
                >
                    <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-white/90">
                        CONTACT<span className="text-yellow-500">.</span>
                    </h1>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* --- LEFT COLUMN (Sticky Info) --- */}
                    <div className="lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-32 space-y-16">
                            
                            <motion.div 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ delay: 0.2 }}
                            >
                                <p className="text-lg text-neutral-400 max-w-xs leading-relaxed mb-8">
                                    We help ambitious companies build the future of AI. Reach out to start a project or join our training programs.
                                </p>
                                <div className="h-px w-12 bg-yellow-500 mb-8"></div>
                            </motion.div>

                            <div className="space-y-10">
                                {/* Contact Item 01 */}
                                <div className="group cursor-pointer">
                                    <h3 className="text-xs font-mono text-neutral-500 mb-2 flex items-center gap-2">
                                        <span className="text-yellow-500">01</span> EMAIL
                                    </h3>
                                    <a href="mailto:info@aiyutham.com" className="text-2xl font-light hover:text-neutral-300 transition-colors flex items-center gap-2">
                                        Info@aiyutham.com <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </div>

                                {/* Contact Item 02 */}
                                <div className="group cursor-pointer">
                                    <h3 className="text-xs font-mono text-neutral-500 mb-2 flex items-center gap-2">
                                        <span className="text-yellow-500">02</span> PHONE
                                    </h3>
                                    <a href="tel:+919585512666" className="text-2xl font-light hover:text-neutral-300 transition-colors flex items-center gap-2">
                                        +91 9585512666 <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </div>

                                {/* Contact Item 03 */}
                                <div className="group cursor-pointer">
                                    <h3 className="text-xs font-mono text-neutral-500 mb-2 flex items-center gap-2">
                                        <span className="text-yellow-500">03</span> OFFICE
                                    </h3>
                                    <p className="text-2xl font-light text-neutral-200">
                                        Coimbatore, TN<br />
                                        India
                                    </p>
                                </div>
                            </div>

                            {/* Newsletter Mini */}
                            <div className="pt-12 mt-12 border-t border-neutral-900">
                                <h4 className="text-sm font-bold mb-4">Stay in the loop</h4>
                                <div className="flex gap-4">
                                    <input 
                                        type="email" 
                                        placeholder="Email address" 
                                        className="bg-transparent border-b border-neutral-700 w-full py-2 outline-none text-sm focus:border-white transition-colors placeholder:text-neutral-600"
                                    />
                                    <button className="text-sm font-bold hover:text-yellow-500 transition-colors">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN (The Form) --- */}
                    <div className="lg:col-span-7 pt-4 lg:pt-0">
                        <form className="space-y-12">
                            
                            {/* Input Group */}
                            <div className="space-y-12">
                                {['name', 'email'].map((field) => (
                                    <div key={field} className="relative">
                                        <label 
                                            htmlFor={field} 
                                            className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                                                activeField === field || formData[field as keyof typeof formData] 
                                                ? '-top-6 text-xs text-yellow-500' 
                                                : 'top-2 text-2xl text-neutral-500 font-light'
                                            }`}
                                        >
                                            {field === 'name' ? 'What is your name?' : 'Your email address?'}
                                        </label>
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            id={field}
                                            name={field}
                                            value={formData[field as keyof typeof formData]}
                                            onChange={handleChange}
                                            onFocus={() => setActiveField(field)}
                                            onBlur={() => setActiveField(null)}
                                            className="w-full bg-transparent border-b border-neutral-800 py-4 text-2xl text-white outline-none focus:border-white transition-colors"
                                        />
                                    </div>
                                ))}

                                {/* Custom Select UI */}
                                <div className="space-y-4">
                                    <span className="text-xs font-mono text-neutral-500 uppercase">I am interested in</span>
                                    <div className="flex flex-wrap gap-3">
                                        {['Training', 'Software Development', 'Partnership', 'General'].map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, inquiry: option })}
                                                className={`px-6 py-3 rounded-full border text-sm transition-all duration-300 ${
                                                    formData.inquiry === option 
                                                    ? 'bg-white text-black border-white' 
                                                    : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600'
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative pt-8">
                                    <label 
                                        htmlFor="message" 
                                        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                                            activeField === 'message' || formData.message 
                                            ? '-top-0 text-xs text-yellow-500' 
                                            : 'top-8 text-2xl text-neutral-500 font-light'
                                        }`}
                                    >
                                        Tell us about your project
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setActiveField('message')}
                                        onBlur={() => setActiveField(null)}
                                        className="w-full bg-transparent border-b border-neutral-800 py-4 text-2xl text-white outline-none focus:border-white transition-colors resize-none"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-8 flex justify-end">
                                <button 
                                    type="submit" 
                                    className="group relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-neutral-900 overflow-hidden transition-all duration-300 hover:w-48 hover:bg-yellow-500"
                                >
                                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity">
                                        <Plus className="text-white" size={24} />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-2">
                                        <span className="font-bold text-black whitespace-nowrap">SEND MESSAGE</span>
                                        <Send className="text-black" size={16} />
                                    </div>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;