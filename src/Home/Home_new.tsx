import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
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
      link: 'https://github.com/kanojsairam/metro-minds',
      tech: ['C', 'React.js', 'Node.js', 'MongoDB', 'PyTorch', 'IoT']
    },
    {
      name: 'Agrisense',
      description: 'Smart Farming & Crop Optimization system with sensor-based soil analysis and ML-powered crop recommendations',
      link: 'https://github.com/kanojsairam/agrisense',
      tech: ['React.js', 'Flask', 'Convex', 'Gemini AI', 'Clerk', 'IoT']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Kanojsairam S A
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Electronics & Communication Engineering Student | MERN Stack Developer | IoT Enthusiast | AI/ML Researcher
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
            <Link
              to="/about"
              className="border border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/kanojsairam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kanoj-sairam/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kanojsairam.sa2022ece@sece.ac.in" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-purple-400" size={32} />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Python', 'Java', 'C', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'IoT', 'Machine Learning', 'Flask', 'Express.js', 'AWS'].map((skill) => (
              <div
                key={skill}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-purple-500 transition-all duration-300"
              >
                <span className="text-white font-semibold">{skill}</span>
              </div>
            ))}
          </div>
          
          <Link
            to="/about"
            className="inline-block mt-8 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold"
          >
            View All Skills →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
