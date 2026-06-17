const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  function cn(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((student, idx) => (
          <li
            key={`${student.name}-${idx}`}
            className="relative w-[280px] sm:w-[300px] md:w-[350px] lg:w-[400px] shrink-0 bg-light rounded-[1.5rem] p-5 sm:p-6 lg:p-7 border border-border hover:border-primary/40 hover:bg-white hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>
            
            {/* Quote decoration */}
            <div className="absolute top-2 right-4 text-primary/45 text-6xl font-serif select-none pointer-events-none">“</div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-premium-black text-primary text-xs sm:text-sm font-semibold mb-4">
                        <span className="font-bold">{student.score}</span>
                        <span className="text-[10px] sm:text-xs font-normal opacity-80">Score</span>
                    </div>
                    <p className="text-xs sm:text-sm text-premium-black leading-relaxed font-normal mb-6 italic">
                        "{student.quote}"
                    </p>
                </div>
                
                <div className="border-t border-border pt-3">
                    <h4 className="font-semibold text-premium-black text-sm sm:text-base">{student.name}</h4>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Results() {


    const testimonials = [
        {
            name: 'Sarah Jenkins',
            score: '8.5',
            test: 'IELTS Academic',
            dest: 'Oxford University, UK',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            quote: "The personalized coaching completely revolutionized my preparation. The rigorous mock test environment gave me the exact edge I needed to hit Band 8.5 effortlessly."
        },
        { 
            name: 'Raj Patel', 
            score: '8.0', 
            test: 'IELTS General', 
            dest: 'Express Entry, Canada', 
            img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            quote: "Exceptional mentors who know the exam inside out. They transformed my writing skills completely in just 4 weeks. Highly recommended for busy professionals."
        },
        { 
            name: 'Elena Rossi', 
            score: '9.0', 
            test: 'IELTS Academic', 
            dest: 'Monash University, AUS', 
            img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            quote: "The adaptive scheduling and specialized template mastery were absolutely perfect for my professional life. Achieved my target score with confidence."
        }
    ];

    try {
        return (
            <section id="results" className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden flex items-center" data-name="Results" data-file="components/Results.js">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-[600px] lg:h-[600px] bg-primary/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-[400px] lg:h-[400px] bg-light rounded-full blur-[60px] sm:blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    {/* Header Content */}
                    <div className="max-w-3xl mx-auto text-center mb-8">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-premium-black mb-3 leading-tight">
                            Excellence <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">Delivered.</span>
                        </h3>
                        <p className="text-sm sm:text-base text-muted font-light leading-relaxed mb-4">
                            Our data-driven approach consistently produces top-percentile scores, opening doors to global institutions.
                        </p>
                        <button className="btn-primary py-2 sm:py-2.5 px-4 sm:px-6 text-xs sm:text-sm">
                            Join Our Alumni
                            <i data-lucide="arrow-right"></i>
                        </button>
                    </div>

                    {/* Infinite Moving Testimonial Cards */}
                    <div className="mt-12 sm:mt-16">
                        <InfiniteMovingCards items={testimonials} speed="normal" />
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Results component error:', error);
        return null;
    }
}