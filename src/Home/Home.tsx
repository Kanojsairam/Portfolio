import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download, Briefcase } from 'lucide-react';
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
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Link>
            <Link
              to="/about"
              className="group border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              Learn More
            </Link>
            <a
              href="/22EC054 (1).pdf"
              download="Kanojsairam_S_A_Resume.pdf"
              className="group border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a href="https://github.com/kanojsairam" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-gray-700 group-hover:text-indigo-600" />
            </a>
            <a href="https://www.linkedin.com/in/kanoj-sairam/" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-indigo-600" />
            </a>
            <a href="mailto:kanojsairam.sa2022ece@sece.ac.in" className="group p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-indigo-600" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-indigo-600" size={32} />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions combining cutting-edge technology with real-world impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-purple-600 transition-colors duration-300 group"
                >
                  View Project 
                  <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core programming languages and proficiency levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Python', level: 95, color: 'from-green-500 to-emerald-600', icon: '🐍' },
              { name: 'C', level: 90, color: 'from-blue-500 to-indigo-600', icon: '⚡' },
              { name: 'Java', level: 88, color: 'from-orange-500 to-red-600', icon: '☕' },
              { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-600', icon: '🚀' }
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-900 font-bold text-xl">{skill.name}</span>
                  </div>
                  <span className="text-indigo-600 font-bold text-lg">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Skills
              <ArrowDown className="w-5 h-5 rotate-[-90deg]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
