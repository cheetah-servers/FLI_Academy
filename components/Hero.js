function Hero() {
    try {
        return (
            <section id="home" className="relative bg-premium-black pt-20 pb-12 lg:pt-28 lg:pb-20 overflow-hidden min-h-[80vh] flex items-center" data-name="Hero" data-file="components/Hero.js">
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
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6 backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-[9px] sm:text-[11px] font-medium text-white/90">A Division of The Polyglot Academy</span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-white leading-[1.1] sm:leading-[1.15] mb-4 tracking-tight">
                                Master Your <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Global</span> Journey.
                            </h1>

                            <p className="text-xs sm:text-sm lg:text-base text-white/70 mb-6 leading-relaxed font-light max-w-xl">
                                Prepare for IELTS, PTE, TOEFL, CELPIP and Duolingo with elite mentorship, daily mock tests, and hyper-personalized guidance for international success.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
                                <a href="#courses" className="btn-primary text-xs sm:text-sm py-2.5 sm:py-3 px-6 text-center justify-center">
                                    Start Your Journey
                                    <i data-lucide="arrow-right" className="w-4 h-4"></i>
                                </a>
                                <a href="#contact" className="btn-outline text-xs sm:text-sm py-2.5 sm:py-3 px-6 text-center justify-center">
                                    Book Free Demo
                                </a>
                            </div>


                        </div>

                        {/* ── Right Content (Image) ── */}
                        <div className="lg:col-span-6 xl:col-span-5 relative order-1 lg:order-2 flex justify-center w-full mb-8 lg:mb-0">
                            <div className="relative w-full max-w-[220px] sm:max-w-[300px] lg:max-w-[380px]">
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