function Hero() {
    try {
        return (
            <section id="home" className="relative bg-premium-black pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-screen flex items-center" data-name="Hero" data-file="components/Hero.js">
                {/* ── Subtle Backgrounds ── */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }} />
                
                {/* Single Soft Primary Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        
                        {/* ── Left Content (Text) ── */}
                        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-[10px] sm:text-xs font-semibold text-white/90 uppercase tracking-wider">A Division of The Polyglot Academy</span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] sm:leading-[1.15] mb-6 tracking-tight">
                                Master Your <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Global</span> Journey.
                            </h1>
                            
                            <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-10 leading-relaxed font-light max-w-2xl">
                                Prepare for IELTS, PTE, TOEFL, and Duolingo with elite mentorship, daily mock tests, and hyper-personalized guidance for international success.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <a href="#courses" className="btn-primary text-sm sm:text-base py-3 sm:py-4 px-8 text-center justify-center">
                                    Start Your Journey
                                    <i data-lucide="arrow-right" className="w-5 h-5"></i>
                                </a>
                                <a href="#contact" className="btn-outline text-sm sm:text-base py-3 sm:py-4 px-8 text-center justify-center">
                                    Book Free Demo
                                </a>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 w-full max-w-2xl">
                                {[
                                    { icon: 'award', text: 'Expert Mentors' },
                                    { icon: 'target', text: 'Band 8+ Focus' },
                                    { icon: 'globe', text: 'Global Standards' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <i data-lucide={item.icon} className="text-primary w-4 h-4"></i>
                                        </div>
                                        <span className="text-white/80 text-sm font-medium tracking-wide">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Right Content (Image) ── */}
                        <div className="lg:col-span-6 xl:col-span-5 relative order-1 lg:order-2 flex justify-center w-full mb-8 lg:mb-0">
                            <div className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[450px]">
                                {/* Subtle glow behind image just to lift it */}
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] transform scale-90"></div>
                                
                                <img
                                    src="assets/hero-image.png"
                                    alt="FLI Student"
                                    className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                                    style={{
                                        mixBlendMode: 'lighten',
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        return null;
    }
}