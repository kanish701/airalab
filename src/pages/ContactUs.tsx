import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Phone, Mail, MapPin, MessageCircle, Send, ArrowRight, Bell 
} from 'lucide-react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        inquiry: '',
        message: '',
        newsletter: '',
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
            setSending(false);
            setSent(true);
            setFormData({ ...formData, message: '' });
        }, 1200);
    };

    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            info: "+91 95855 21000",
            sub: "Mon-Sat, 9 AM - 7 PM IST",
            action: "Call Now",
            link: "tel:+919585521000",
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            info: "+91 95855 21666",
            sub: "Instant responses",
            action: "Chat Now",
            link: "https://wa.me/919585521666",
            color: "text-green-400",
            bg: "bg-green-400/10"
        },
        {
            icon: Mail,
            title: "Email Us",
            info: "hello@aiyutham.com", // Fixed email domain assumption
            sub: "Response within 24 hours",
            action: "Send Email",
            link: "mailto:hello@aiyutham.com",
            color: "text-yellow-400",
            bg: "bg-yellow-400/10"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            info: "Coimbatore, India",
            sub: "AIyutham Innovation Center",
            action: "Get Directions",
            link: "#",
            color: "text-yellow-400",
            bg: "bg-yellow-400/10"
        }
    ];

    return (
        <div className="relative bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20 overflow-hidden font-sans">
            
            {/* --- BACKGROUND ELEMENTS --- */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                
                {/* --- HEADER SECTION --- */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    
                    {/* Left: Text */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 uppercase tracking-wider font-mono">
                            <span>Home</span>
                            <span className="text-gray-700">/</span>
                            <span>Contact</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                            Let’s Start a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                                Conversation.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6">
                            Whether you have a question about our training, need a custom AI solution, or just want to say hello, we are ready to listen.
                        </p>
                    </motion.div>

                    {/* Right: Contact Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {contactMethods.map((method, idx) => (
                            <motion.a 
                                key={idx}
                                href={method.link}
                                target={method.title === "Visit Us" || method.title === "WhatsApp" ? "_blank" : "_self"}
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-[#161515] border border-white/10 p-6 rounded-2xl hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`w-10 h-10 rounded-lg ${method.bg} ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <method.icon size={20} />
                                </div>
                                <h3 className="font-bold text-lg text-white mb-1">{method.title}</h3>
                                <p className="text-white/90 font-medium mb-1">{method.info}</p>
                                <p className="text-xs text-gray-500 mb-4">{method.sub}</p>
                                <div className={`text-xs font-bold uppercase tracking-wider ${method.color} flex items-center gap-2`}>
                                    {method.action} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* --- FORM SECTION --- */}
                <div className="grid lg:grid-cols-12 gap-12">
                    
                    {/* Form Container */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 bg-[#161515] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
                        
                        <h2 className="text-3xl font-bold text-white mb-2 relative z-10">Send a Message</h2>
                        <p className="text-gray-400 mb-10 relative z-10">
                            Fill out the form below and our team will get back to you within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        placeholder="John Doe"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all placeholder:text-gray-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        placeholder="john@example.com"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all placeholder:text-gray-600"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="mobile" 
                                        value={formData.mobile} 
                                        onChange={handleChange} 
                                        placeholder="+91 98765 43210"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all placeholder:text-gray-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Inquiry Type</label>
                                    <select 
                                        name="inquiry" 
                                        value={formData.inquiry} 
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-[#161515]">Select a Topic</option>
                                        <option value="General" className="bg-[#161515]">General Inquiry</option>
                                        <option value="Training" className="bg-[#161515]">Training Programs</option>
                                        <option value="Development" className="bg-[#161515]">Software Development</option>
                                        <option value="Partnership" className="bg-[#161515]">Partnership</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                                <textarea 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    rows={4} 
                                    placeholder="Tell us more about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all placeholder:text-gray-600 resize-none"
                                />
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <p className="text-xs text-gray-500 hidden sm:block">
                                    Your data is secure. We never spam.
                                </p>
                                <button 
                                    type="submit" 
                                    disabled={sending}
                                    className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {sending ? 'Sending...' : sent ? 'Message Sent!' : 'Send Message'} 
                                    {!sending && !sent && <Send size={18} />}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Newsletter Sidebar */}
                    <div className="lg:col-span-4 flex flex-col justify-center">
                        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/20 rounded-3xl p-8 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-20">
                                <Bell size={80} className="text-yellow-500" />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Stay Updated</h3>
                            <p className="text-gray-400 text-sm mb-8 relative z-10">
                                Join 5,000+ subscribers getting the latest AI insights, course updates, and exclusive offers directly to their inbox.
                            </p>

                            <form onSubmit={(e) => { e.preventDefault(); setFormData(f => ({ ...f, newsletter: '' })); }} className="relative z-10 space-y-3">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-all text-sm placeholder:text-gray-500"
                                    required 
                                />
                                <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;