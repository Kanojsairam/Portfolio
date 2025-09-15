import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download, Briefcase } from 'lucide-react';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const projects = [
    {
      name: 'BioSync360',
      description: 'AI-Powered Telemedicine platform for remote healthcare access with real-time health monitoring and predictive diagnostics',
      link: 'https://github.com/kanojsairam/biosync360',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'IoT']
    },
    {
      name: 'Metro Minds',
      description: 'Urban Management System with IoT-powered city infrastructure monitoring for flood detection and disaster management',
      link: 'https://metro-minds.vercel.app/',
      tech: ['C', 'React.js', 'Node.js', 'MongoDB', 'PyTorch', 'IoT']
    },
    {
      name: 'Agrisense',
      description: 'Smart Farming & Crop Optimization system with sensor-based soil analysis and ML-powered crop recommendations',
      link: 'https://agrisense-world.vercel.app/',
      tech: ['React.js', 'Flask', 'Convex', 'Gemini AI', 'Clerk', 'IoT']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="mb-8">
            <p className="text-indigo-600 font-semibold text-lg mb-4 tracking-wide">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Kanojsairam S A
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Electronics & Communication Engineering Student specializing in MERN Stack Development, IoT Solutions, and AI/ML Research
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="group border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              View My Work
            </button>
            <a
              href="/22EC054 (1).pdf"
              download="Kanojsairam_S_A_Resume.pdf"
              className="group border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com/kanojsairam" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-gray-700 group-hover:text-indigo-600" />
            </a>
            <a href="https://www.linkedin.com/in/kanoj-sairam/" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-indigo-600" />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="group p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-indigo-600" />
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
          >
            <ArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions combining cutting-edge technology with real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.name} className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-300"
                >
                  View Project
                  <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Full-stack development, IoT solutions, and cutting-edge technology integration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Frontend Development</h3>
              <p className="text-gray-600">React.js, TypeScript, Tailwind CSS</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Backend Development</h3>
              <p className="text-gray-600">Node.js, Python, Express.js, MongoDB</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">IoT & Hardware</h3>
              <p className="text-gray-600">Arduino, Sensors, AI/ML Integration</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection('about')}
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              <ArrowDown className="w-5 h-5" />
              Learn More About Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
