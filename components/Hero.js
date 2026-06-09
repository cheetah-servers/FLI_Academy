function Hero() {
    try {
        return (
            <section id="home" className="relative bg-premium-black pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 overflow-hidden min-h-[80vh] sm:min-h-[75vh] md:min-h-[70vh] flex items-center" data-name="Hero" data-file="components/Hero.js">
                {/* Grid Background */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundSize: '40px 40px',
                        backgroundImage: 'linear-gradient(to_right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to_bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
                    }}
                />
                
                {/* Radial gradient for faded look */}
                <div className="absolute inset-0 bg-premium-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
                
                {/* Blue Glow Accent */}
                <div className="absolute top-1/4 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-primary/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] pointer-events-none"></div>
                
                {/* Yellow Glow Accent */}
                <div className="absolute bottom-1/4 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-yellow-400/10 rounded-full blur-[40px] sm:blur-[60px] md:blur-[80px] pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-7 max-w-3xl mx-auto lg:mx-0 order-1 lg:order-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6 md:mb-8 backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                <span className="text-[9px] sm:text-[10px] font-semibold text-white/90 uppercase tracking-wider">A Division of The Polyglot Academy</span>
                            </div>
                            
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6 md:mb-8">
                                Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Global</span> Journey.
                            </h1>
                            
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                                Prepare for IELTS, PTE, TOEFL, and Duolingo with elite mentorship, daily mock tests, and hyper-personalized guidance for international success.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center lg:justify-start">
                                <a href="#courses" className="btn-primary text-xs sm:text-sm md:text-base py-2.5 sm:py-3 px-5 sm:px-6 md:px-8 text-center">
                                    Start Your Journey
                                    <i data-lucide="arrow-right"></i>
                                </a>
                                <a href="#contact" className="btn-outline text-xs sm:text-sm md:text-base py-2.5 sm:py-3 px-5 sm:px-6 md:px-8 text-center">
                                    Book Free Demo
                                </a>
                            </div>

                            <div className="mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 text-white/60 text-[10px] sm:text-xs font-medium">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <i data-lucide="award" className="text-primary text-[10px] sm:text-xs"></i>
                                    </div>
                                    <span className="tracking-wide">Expert Mentors</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <i data-lucide="target" className="text-primary text-[10px] sm:text-xs"></i>
                                    </div>
                                    <span className="tracking-wide">Band 8+ Focus</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <i data-lucide="globe" className="text-primary text-[10px] sm:text-xs"></i>
                                    </div>
                                    <span className="tracking-wide">Global Standards</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Image Container */}
                        <div className="lg:col-span-5 relative hidden lg:block order-2 lg:order-2">
                            <div className="relative rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden aspect-[4/5] border-4 border-white/5 shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-transparent to-transparent z-10"></div>
                                <img 
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Premium Education"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
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