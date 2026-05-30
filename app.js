class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-light">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-border">
            <div className="icon-circle-alert text-4xl text-red-500 mb-4 mx-auto"></div>
            <h1 className="text-2xl font-heading font-bold text-premium-black mb-2">Something went wrong</h1>
            <p className="text-muted mb-6">We're sorry, but something unexpected happened loading the app.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen flex flex-col" data-name="app" data-file="app.js">
        <Navbar />
        <main className="flex-grow">
            <Hero />
            <Features />
            <Courses />
            <Results />
            <CTA />
            <Contact />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);