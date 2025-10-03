import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

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
		console.log(" Form Data : ", formData)
		e.preventDefault();
		setSending(true);
		setTimeout(() => {
			setSending(false);
			setSent(true);
			setFormData({ ...formData, message: '' });
		}, 1200);
	};

	return (
		<div className="min-h-screen bg-[#161515] text-white py-10 px-2 md:px-0 pt-16">
			<div className="max-w-6xl mx-auto">
				{/* Breadcrumb */}
				<div className="text-gray-400 text-xs mb-2">Home / Company / Contact us</div>
					<div className="grid md:grid-cols-2 gap-8 mb-10 items-center">
						{/* Left: Heading */}
						<div className="flex items-center h-full min-h-[260px]">
							<h1 className="text-5xl font-bold text-white leading-tight">Multiple<br />Ways<br />to Connect</h1>
						</div>
						{/* Right: 2x2 grid of contact cards */}
						<div className="grid grid-cols-2 gap-6">
							{/* Call Us */}
							<div className="bg-[#232323] rounded-xl p-6 flex flex-col gap-2 shadow border border-white/10">
								<div className="font-bold text-xl mb-2 text-white">Call Us</div>
								<div className="text-gray-300 text-sm mb-2">Speak directly with our team.<br />Mon-Sat, 9 AM - 7 PM IST<br />Ph.no: +91 9626701000</div>
								<a href="tel:+919626701000" className="text-white text-sm font-semibold hover:underline">Call Now</a>
							</div>
							{/* WhatsApp */}
							<div className="bg-[#232323] rounded-xl p-6 flex flex-col gap-2 shadow border border-white/10">
								<div className="font-bold text-xl mb-2 text-white">WhatsApp</div>
								<div className="text-gray-300 text-sm mb-2">Quick responses on WhatsApp.<br />Ph.no: +91 9626701000<br />Instant messaging available</div>
								<a href="https://wa.me/919626701000" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-semibold hover:underline">Chat Now</a>
							</div>
							{/* Email Us */}
							<div className="bg-[#232323] rounded-xl p-6 flex flex-col gap-2 shadow border border-white/10">
								<div className="font-bold text-xl mb-2 text-white">Email Us</div>
								<div className="text-gray-300 text-sm mb-2">Detailed inquiries welcome<br />hello@alralabs.co.in<br />Response within 24 hours</div>
								<a href="mailto:hello@alralabs.co.in" className="text-white text-sm font-semibold hover:underline">Send Mail</a>
							</div>
							{/* Visit Us */}
							<div className="bg-[#232323] rounded-xl p-6 flex flex-col gap-2 shadow border border-white/10">
								<div className="font-bold text-xl mb-2 text-white">Visit Us</div>
								<div className="text-gray-300 text-sm mb-2">Meet us at our Coimbatore office<br />AI Labs Innovation Center<br />Mon-Sat, 9 AM - 7 PM IST</div>
								<a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-semibold hover:underline">Get Directions</a>
							</div>
						</div>
					</div>
				{/* Get in Touch */}
								<div className="text-center mt-12 mb-6">
									<h2 className="text-4xl font-bold text-white mb-2">Get in Touch</h2>
									<div className="text-white text-base font-medium mb-2">Choose the form that best matches your inquiry type for a more personalized response.</div>
								</div>
								<form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-[#1a1919] rounded-lg p-12 shadow border border-white/10 mb-10">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
										<div>
											<label htmlFor="name" className="block text-base font-semibold mb-2 text-white">
												Full Name <span className="text-red-500">*</span>
											</label>
											<input
												id="name"
												type="text"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												placeholder="Enter your full name"
												className="w-full bg-transparent border border-gray-400 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-400"
											/>
										</div>
										<div>
											<label htmlFor="email" className="block text-base font-semibold mb-2 text-white">
												Email Address <span className="text-red-500">*</span>
											</label>
											<input
												id="email"
												type="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												placeholder="Enter your email address"
												className="w-full bg-transparent border border-gray-400 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-400"
											/>
										</div>
										<div>
											<label htmlFor="mobile" className="block text-base font-semibold mb-2 text-white">
												Mobile No. <span className="text-red-500">*</span>
											</label>
											<input
												id="mobile"
												type="tel"
												name="mobile"
												value={formData.mobile}
												onChange={handleChange}
												required
												placeholder="Enter your mobile number"
												className="w-full bg-transparent border border-gray-400 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-400"
											/>
										</div>
										<div>
											<label htmlFor="inquiry" className="block text-base font-semibold mb-2 text-white">
												Type of Inquiry <span className="text-red-500">*</span>
											</label>
											<select
												id="inquiry"
												name="inquiry"
												value={formData.inquiry}
												onChange={handleChange}
												required
												className="w-full bg-transparent border border-gray-400 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-400"
											>
												<option value="">Select inquiry type</option>
												<option value="General">General</option>
												<option value="Training">Training</option>
												<option value="Development">Development</option>
												<option value="Partnership">Partnership</option>
												<option value="Other">Other</option>
											</select>
										</div>
									</div>
									<div className="mb-6">
										<label className="block text-base font-semibold mb-2 text-white">Message</label>
										<textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-transparent border border-gray-400 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-400" placeholder="Tell more about your requirements..." />
									</div>
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
										<div className="text-xs text-white text-left">Your information is secure and will never be shared.</div>
										<button type="submit" disabled={sending} className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-8 py-2 rounded-md flex items-center gap-2 transition disabled:opacity-60 disabled:cursor-not-allowed">
											{sending ? 'Sending...' : sent ? 'Sent!' : 'Send Message'} <Send className="w-5 h-5" />
										</button>
									</div>
								</form>
				{/* Newsletter */}
				<div className="max-w-3xl mx-auto bg-transparent border border-white/20 rounded-xl p-6 mb-10">
					<div className="text-lg font-semibold mb-2 text-white">Stay Updated</div>
					<div className="text-gray-300 mb-3 text-sm">Subscribe to our newsletter for the latest AI insights, course updates, and exclusive offers</div>
					<form onSubmit={e => { e.preventDefault(); setFormData(f => ({ ...f, newsletter: '' })); }} className="flex flex-col sm:flex-row gap-3">
						<input type="email" name="newsletter" value={formData.newsletter} onChange={handleChange} placeholder="Enter your mail" className="flex-1 bg-black/30 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-yellow-400" required />
						<button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-lg transition">Subscribe</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
