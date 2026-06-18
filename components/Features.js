const CountUp = ({ end, duration = 1500 }) => {
    const [count, setCount] = React.useState(0);
    const match = end.match(/^([^0-9]*)([0-9,]+)([^0-9]*)$/);

    React.useEffect(() => {
        if (!match) {
            setCount(end);
            return;
        }

        const prefix = match[1];
        const numStr = match[2].replace(/,/g, '');
        const suffix = match[3];
        const endNum = parseInt(numStr, 10);

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentCount = Math.floor(progress * endNum);

            const formatted = match[2].includes(',')
                ? currentCount.toLocaleString()
                : currentCount.toString();

            setCount(`${prefix}${formatted}${suffix}`);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return <span>{count}</span>;
};

function Features() {
    const featuresList = [
        {
            icon: 'icon-award',
            title: 'Certified Mentors',
            desc: 'Train under elite professionals with proven track records in global standardized tests.',
            image: 'assets/certified-mentors.png',
            noOverlay: true
        },
        {
            icon: 'icon-laptop',
            title: 'Daily Assessments',
            desc: 'Experience real-exam conditions with our rigorous daily mock test infrastructure.',
            image: 'assets/daily-assignments.png',
            noOverlay: true
        },
        {
            icon: 'icon-mic',
            title: 'Speaking Labs',
            desc: 'Exclusive 1-on-1 speaking sessions tailored to perfect your pronunciation and fluency.',
            image: 'assets/speaking-labs.png',
            noOverlay: true
        },
        {
            icon: 'icon-chart-line',
            title: 'Deep Analytics',
            desc: 'Granular performance tracking to identify and eliminate your specific weak points.',
            image: 'assets/deep-analytics.png',
            noOverlay: true
        },
        {
            icon: 'icon-clock',
            title: 'Adaptive Scheduling',
            desc: 'Premium flexibility with batch timings designed around your professional commitments.',
            image: 'assets/adaptive-scheduling.png',
            noOverlay: true
        },
        {
            icon: 'icon-layers',
            title: 'Hybrid Learning',
            desc: 'Flawless transition between our luxury physical centers and premium digital platform.',
            image: 'assets/hybrid-learning.png',
            noOverlay: true
        }
    ];

    try {
        return (
            <section id="about" className="pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-28 md:pb-14 lg:pt-32 lg:pb-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-light relative min-h-[50vh] flex flex-col items-center" data-name="Features" data-file="components/Features.js">
                {/* ── Stats Ribbon ── */}
                <div className="relative lg:absolute lg:top-0 lg:left-1/2 w-full max-w-6xl px-4 sm:px-6 z-20 mb-10 lg:mb-0 -mt-16 sm:-mt-20 lg:mt-0 transform-none lg:-translate-x-1/2 lg:-translate-y-1/2" data-name="StatsRibbon">
                    <div className="bg-primary text-premium-black rounded-2xl md:rounded-3xl shadow-xl shadow-primary/20 border border-primary/30 p-4 sm:p-6 lg:p-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center lg:divide-x lg:divide-premium-black/10">
                            <div className="flex flex-col items-center justify-center p-2">
                                <span className="text-xl sm:text-2xl md:text-3xl font-semibold font-heading mb-1 text-premium-black">
                                    <CountUp end="15,000+" />
                                </span>
                                <span className="text-[10px] sm:text-xs font-medium text-premium-black/80">Test Takers Trained</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2">
                                <span className="text-xl sm:text-2xl md:text-3xl font-semibold font-heading mb-1 text-premium-black">
                                    <CountUp end="11+" />
                                </span>
                                <span className="text-[10px] sm:text-xs font-medium text-premium-black/80">Years Experience</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2">
                                <span className="text-xl sm:text-2xl md:text-3xl font-semibold font-heading mb-1 text-premium-black">
                                    <CountUp end="Band 8+" />
                                </span>
                                <span className="text-[10px] sm:text-xs font-medium text-premium-black/80">Focused Prep</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2">
                                <span className="text-xl sm:text-2xl md:text-3xl font-semibold font-heading mb-1 text-premium-black">
                                    <CountUp end="6-Week" />
                                </span>
                                <span className="text-[10px] sm:text-xs font-medium text-premium-black/80">Score Improvement Plan</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Sticky Left Column */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32 mb-12 lg:mb-0">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
                                <i data-lucide="graduation-cap" className="text-xs"></i>
                                <span className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase">The FLI Advantage</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-premium-black mb-4 leading-[1.2] text-left">
                                Designed for Excellence
                            </h3>
                            <p className="text-sm sm:text-base text-muted font-light mb-6 leading-relaxed">
                                We don't just teach; we engineer your success through modern methodologies, premium infrastructure, and hyper-personalized learning paths designed for high achievers.
                            </p>

                            <a href="#courses" className="inline-flex items-center justify-center gap-2 bg-premium-black text-white hover:bg-primary hover:text-premium-black px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                                Explore Our Approach
                                <i data-lucide="arrow-right" className="w-4 h-4"></i>
                            </a>
                        </div>

                        {/* Scrolling Right Column */}
                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
                            {featuresList.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-border hover:border-primary/40 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(245,196,0,0.15)] transition-all duration-300 group ${idx % 2 !== 0 ? 'sm:mt-12' : ''}`}
                                >
                                    <div className="relative mb-6 sm:mb-8 rounded-2xl overflow-hidden aspect-[4/3]">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {!feature.noOverlay && <div className="absolute inset-0 bg-gradient-to-t from-premium-black/50 to-transparent"></div>}
                                        <div className="absolute bottom-4 left-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                                <i data-lucide={feature.icon.replace('icon-', '')} className="text-lg sm:text-xl text-premium-dark"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="text-lg sm:text-xl font-semibold font-heading text-premium-black mb-2 sm:mb-3">
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