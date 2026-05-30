const { AnimatePresence, motion } = window.Motion;

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-6 sm:py-8 gap-2 sm:gap-3', className)}>
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary to-yellow-500 block rounded-[2rem] shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }}
                exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' } }}
              />
            )}
          </AnimatePresence>
          <Card hovered={hoveredIndex === idx}>
            <div className="flex items-center justify-between mb-8">
              <div
                className={cn(
                  'w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500',
                  hoveredIndex === idx ? 'bg-premium-black text-primary' : 'bg-primary/20 text-primary border border-primary/20'
                )}
              >
                <i data-lucide={item.icon.replace('icon-', '')} className="text-2xl"></i>
              </div>
              <div
                className={cn(
                  'text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full transition-colors duration-500',
                  hoveredIndex === idx
                    ? 'bg-premium-black/10 text-premium-black border border-premium-black/20'
                    : 'bg-white/5 border border-white/10 text-white/60'
                )}
              >
                {item.target}
              </div>
            </div>
            <CardTitle hovered={hoveredIndex === idx}>{item.title}</CardTitle>
            <CardDescription hovered={hoveredIndex === idx}>{item.desc}</CardDescription>
            <div className="mt-8 space-y-3">
              {item.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3 text-sm">
                  <div
                    className={cn(
                      'w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-500',
                      hoveredIndex === idx ? 'bg-premium-black/15' : 'bg-white/10'
                    )}
                  >
                    <i data-lucide="check" className={cn('text-[10px]', hoveredIndex === idx ? 'text-premium-black' : 'text-primary')}></i>
                  </div>
                  <span
                    className={cn(
                      'transition-colors duration-500 font-medium',
                      hoveredIndex === idx ? 'text-premium-black' : 'text-white/80'
                    )}
                  >
                    {feat}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className={cn(
                'mt-8 inline-flex items-center gap-2 text-sm font-bold transition-colors duration-500',
                hoveredIndex === idx ? 'text-premium-black' : 'text-primary group-hover:text-primary/80'
              )}
            >
              Enroll Now <i data-lucide="arrow-right"></i>
            </a>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({ className, children, hovered }) => {
  return (
    <div
      className={cn(
        'rounded-[1.75rem] h-full w-full p-2 overflow-hidden relative z-20 transition-all duration-500',
        hovered ? 'bg-transparent border-transparent' : 'bg-premium-black border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]',
        className
      )}
    >
      <div className="relative z-50"><div className="p-4 md:p-6">{children}</div></div>
    </div>
  );
};

const CardTitle = ({ className, children, hovered }) => {
  return (
    <h4
      className={cn(
        'font-bold font-heading text-2xl tracking-wide transition-colors duration-500',
        hovered ? 'text-premium-black' : 'text-white',
        className
      )}
    >
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children, hovered }) => {
  return (
    <p
      className={cn(
        'mt-4 tracking-wide leading-relaxed text-sm transition-colors duration-500 line-clamp-3',
        hovered ? 'text-premium-black/80 font-medium' : 'text-white/60 font-light',
        className
      )}
    >
      {children}
    </p>
  );
};

function Courses() {
  const courses = [
    {
      title: 'IELTS Academic',
      desc: 'For university admissions. Master academic writing with Band 8+ strategies.',
      target: 'Study Abroad',
      icon: 'icon-book-open',
      features: ['8+ Strategies', 'Daily Essays'],
    },
    {
      title: 'IELTS General',
      desc: 'For global migration. Focus on real-world context and fluency drills.',
      target: 'Immigration',
      icon: 'icon-globe',
      features: ['Letter Writing', 'Fluency Drills'],
    },
    {
      title: 'PTE Academic',
      desc: 'Intensive computer‑based coaching, mastering AI scoring and templates.',
      target: 'Study / Migrate',
      icon: 'icon-monitor',
      features: ['AI Scoring', 'Template Mastery'],
    },
    {
      title: 'TOEFL Prep',
      desc: 'Strategies tailored for North American admissions and integrated tasks.',
      target: 'US / Canada',
      icon: 'icon-award',
      features: ['Integrated Writing', 'Campus Context'],
    },
  ];

  try {
    return (
      <section
        id="courses"
        className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden min-h-screen flex flex-col justify-center"
        style={{ backgroundColor: '#111111' }}
        data-name="Courses"
        data-file="components/Courses.js"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://app.trickle.so/storage/public/images/usr_1f04cef398000001/62bc7012-e07b-4752-ad22-5aa0103b7ecc.png')" }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-black/20 to-premium-black/60 pointer-events-none"></div>
        
        {/* Yellow Accent Circle */}
        <div className="absolute top-10 right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/20 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none"></div>
        
        {/* Theme Gradients */}
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] bg-primary/5 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />
        
        {/* Heading Section */}
        <div className="max-w-7xl mx-auto relative z-10 w-full mb-8 sm:mb-10 md:mb-12">
          <div className="text-center max-w-3xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/10 text-primary mb-4 sm:mb-6">
              <i data-lucide="sparkles" className="text-sm"></i>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Premium Curriculums</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight">
              Choose Your Pathway
            </h2>
            <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed">
              Select your targeted program and let our experts guide you to your desired score with mathematical precision and personalized coaching.
            </p>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <HoverEffect items={courses} />
        </div>
      </section>
    );
  } catch (error) {
    console.error('Courses component error:', error);
    return null;
  }
}
