function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Courses', href: '#courses' },
        { name: 'Results', href: '#results' },
        { name: 'Contact', href: '#contact' },
    ];

    try {
        return (
            <nav 
                className={`fixed w-full z-50 transition-all duration-300 ${
                    scrolled ? 'bg-premium-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
                data-name="Navbar" 
                data-file="components/Navbar.js"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img 
                            src="https://app.trickle.so/storage/public/images/usr_1f04cef398000001/6e80d59b-b04a-4b53-b633-134f4ee9fd5e.png?w=1080&h=272" 
                            alt="THE FLI Logo" 
                            className="h-5 sm:h-6 md:h-8 object-contain max-w-[150px] sm:max-w-[200px]" 
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" className="btn-primary py-2 px-4 sm:py-2.5 sm:px-5 text-xs sm:text-sm">
                            Book Free Demo
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="lg:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <i data-lucide={mobileMenuOpen ? 'x' : 'menu'} className="text-xl sm:text-2xl"></i>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-premium-black border-t border-white/10 shadow-xl">
                        <div className="flex flex-col px-4 sm:px-6 py-6 gap-2">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/80 hover:text-primary py-3 px-2 text-base sm:text-lg font-medium border-b border-white/5 hover:bg-white/5 rounded-lg transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#contact" className="btn-primary mt-4 w-full text-center py-3" onClick={() => setMobileMenuOpen(false)}>
                                Book Free Demo
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        return null;
    }
}