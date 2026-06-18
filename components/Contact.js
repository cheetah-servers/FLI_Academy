function Contact() {
    try {
        return (
            <section id="contact" className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 md:px-12 lg:px-24 bg-light flex items-center" data-name="Contact" data-file="components/Contact.js">
                <div className="max-w-7xl mx-auto w-full bg-white rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] border border-border/50 overflow-hidden">
                    <div className="grid lg:grid-cols-5 items-stretch">
                        
                        {/* Contact Info */}
                        <div className="lg:col-span-2 bg-premium-black p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-2xl sm:blur-3xl"></div>
                            
                            <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-2 sm:mb-3 relative z-10">
                                Connect With Us
                            </h3>
                            <p className="text-white/60 font-light mb-6 lg:mb-8 relative z-10 text-xs sm:text-sm">
                                Reach out to our expert counselors for a personalized assessment of your goals.
                            </p>

                            <div className="space-y-5 relative z-10">
                                <div className="flex items-start gap-3 sm:gap-4 group">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <i data-lucide="map-pin" className="text-base sm:text-lg text-white group-hover:text-premium-black transition-colors"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-0.5 text-xs sm:text-sm">Address</h4>
                                        <p className="text-white/60 text-[11px] sm:text-xs leading-relaxed">40-180, plot no.204, Jawaharnagar colony,<br/>ECIL extension, Hyderabad 500040</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 sm:gap-4 group">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <i data-lucide="phone" className="text-base sm:text-lg text-white group-hover:text-premium-black transition-colors"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-0.5 text-xs sm:text-sm">Phone</h4>
                                        <p className="text-white/60 text-[11px] sm:text-xs">+91 9177777604,<br/>+91 9490937410</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 sm:gap-4 group">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <i data-lucide="mail" className="text-base sm:text-lg text-white group-hover:text-premium-black transition-colors"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-0.5 text-xs sm:text-sm">Email</h4>
                                        <p className="text-white/60 text-[11px] sm:text-xs">shraddhasri9@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 bg-white">
                            <div className="mb-4 sm:mb-6">
                                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-premium-black mb-1 sm:mb-2">Request a Callback</h3>
                                <p className="text-muted text-xs sm:text-sm">Fill out the form below and our admissions team will contact you within 24 hours.</p>
                            </div>
                            <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-medium text-premium-dark">First Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                                                <i data-lucide="user" className="text-muted text-xs sm:text-sm"></i>
                                            </div>
                                            <input type="text" className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-xl border border-gray-200 bg-light hover:bg-white focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm text-xs sm:text-sm" placeholder="John" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-medium text-premium-dark">Last Name</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                                                <i data-lucide="user" className="text-muted text-xs sm:text-sm"></i>
                                            </div>
                                            <input type="text" className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-xl border border-gray-200 bg-light hover:bg-white focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm text-xs sm:text-sm" placeholder="Doe" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-medium text-premium-dark">Email Address</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                                                <i data-lucide="mail" className="text-muted text-xs sm:text-sm"></i>
                                            </div>
                                            <input type="email" className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-xl border border-gray-200 bg-light hover:bg-white focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm text-xs sm:text-sm" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-medium text-premium-dark">Target Program</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                                                <i data-lucide="book" className="text-muted text-xs sm:text-sm"></i>
                                            </div>
                                            <select className="w-full pl-9 sm:pl-11 pr-8 sm:pr-10 py-2 sm:py-2.5 rounded-xl border border-gray-200 bg-light hover:bg-white focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none shadow-sm font-medium text-premium-dark cursor-pointer text-xs sm:text-sm">
                                                <option>IELTS Academic</option>
                                                <option>IELTS General</option>
                                                <option>PTE Coaching</option>
                                                <option>TOEFL Preparation</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center pointer-events-none">
                                                <i data-lucide="chevron-down" className="text-muted text-xs sm:text-sm"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-xs font-medium text-premium-dark">Your Message</label>
                                    <textarea rows="3" className="w-full p-3 rounded-xl border border-gray-200 bg-light hover:bg-white focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none shadow-sm text-xs sm:text-sm" placeholder="Tell us about your target score and timeline..."></textarea>
                                </div>
                                <button className="btn-primary w-full shadow-md mt-2 text-xs sm:text-sm py-2.5 sm:py-3">
                                    Submit Request <i data-lucide="send" className="w-4 h-4"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        return null;
    }
}