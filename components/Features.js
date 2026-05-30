function Features() {
    const featuresList = [
        {
            icon: 'icon-award',
            title: 'Certified Mentors',
            desc: 'Train under elite professionals with proven track records in global standardized tests.'
        },
        {
            icon: 'icon-laptop',
            title: 'Daily Assessments',
            desc: 'Experience real-exam conditions with our rigorous daily mock test infrastructure.'
        },
        {
            icon: 'icon-mic',
            title: 'Speaking Labs',
            desc: 'Exclusive 1-on-1 speaking sessions tailored to perfect your pronunciation and fluency.'
        },
        {
            icon: 'icon-chart-line',
            title: 'Deep Analytics',
            desc: 'Granular performance tracking to identify and eliminate your specific weak points.'
        },
        {
            icon: 'icon-clock',
            title: 'Adaptive Scheduling',
            desc: 'Premium flexibility with batch timings designed around your professional commitments.'
        },
        {
            icon: 'icon-layers',
            title: 'Hybrid Learning',
            desc: 'Flawless transition between our luxury physical centers and premium digital platform.'
        }
    ];

    try {
        return (
            <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-light relative min-h-screen flex items-center" data-name="Features" data-file="components/Features.js">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Sticky Left Column */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32 mb-12 lg:mb-0">
                            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/10 text-primary mb-4 sm:mb-6">
                                <i data-lucide="sparkles" className="text-sm"></i>
                                <h2 className="text-xs sm:text-sm font-semibold tracking-wide">The FLI Advantage</h2>
                            </div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-premium-black mb-4 sm:mb-6 leading-tight">
                                Designed for <br/> Excellence
                            </h3>
                            <p className="text-base sm:text-lg text-muted font-light mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                                We don't just teach; we engineer your success through modern methodologies, premium infrastructure, and hyper-personalized learning paths designed for high achievers.
                            </p>
                            
                            <a href="#courses" className="inline-flex items-center gap-2 text-premium-black font-semibold hover:text-primary transition-colors group">
                                Explore our approach
                                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:translate-x-1 transition-transform border border-border">
                                    <i data-lucide="arrow-right" className="text-sm"></i>
                                </div>
                            </a>
                        </div>

                        {/* Scrolling Right Column */}
                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
                            {featuresList.map((feature, idx) => (
                                <div 
                                    key={idx} 
                                    className={`bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-300 hover:border-primary/40 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(245,196,0,0.15)] transition-all duration-300 group ${idx % 2 !== 0 ? 'sm:mt-12' : ''}`}
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-light flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 border border-border/50">
                                        <i data-lucide={feature.icon.replace('icon-', '')} className="text-xl sm:text-2xl text-premium-dark group-hover:text-primary transition-colors duration-300"></i>
                                    </div>
                                    
                                    <h4 className="text-lg sm:text-xl font-bold font-heading text-premium-black mb-2 sm:mb-3">
                                        {feature.title}
                                    </h4>
                                    
                                    <p className="text-muted leading-relaxed text-sm sm:text-[15px]">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        return null;
    }
}