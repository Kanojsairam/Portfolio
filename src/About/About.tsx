import { Code2, Database, Globe, Server, Smartphone, Brain } from 'lucide-react';

const About = () => {
  const skills = {
    'Programming Languages': {
      icon: <Code2 className="w-6 h-6" />,
      items: ['Python', 'C', 'Java', 'C++ (Familiar)', 'HTML', 'CSS', 'JavaScript']
    },
    'Frameworks & Libraries': {
      icon: <Globe className="w-6 h-6" />,
      items: ['Flask', 'Express.js', 'React.js', 'Chart.js', 'Node.js']
    },
    'Databases & Cloud': {
      icon: <Database className="w-6 h-6" />,
      items: ['SQL', 'MongoDB', 'Convex', 'AWS']
    },
    'Development Tools': {
      icon: <Server className="w-6 h-6" />,
      items: ['VS Code', 'GitHub', 'IntelliJ IDEA', 'Eclipse', 'Figma', 'Clerk']
    },
    'Core Concepts': {
      icon: <Brain className="w-6 h-6" />,
      items: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'IoT & Smart Sensing', 'Machine Learning']
    },
    'Specialized Tools': {
      icon: <Smartphone className="w-6 h-6" />,
      items: ['Cisco Packet Tracer', 'Gemini AI', 'PyTorch', 'IoT Sensors', 'Smart Sensing']
    }
  };

  const projects = [
    {
      name: 'BioSync360: AI-Powered Telemedicine',
      description: 'Developed an AI-driven telemedicine platform for remote healthcare access, enabling real-time health monitoring, predictive diagnostics, and secure doctor consultations. Integrated IoT-enabled smart sensing and AI-based analysis to enhance patient care and early disease detection. Designed a scalable and responsive system to ensure seamless performance and data security.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'IoT & Smart Sensing'],
      features: ['Real-time health monitoring', 'Predictive diagnostics', 'Secure doctor consultations', 'AI-based analysis', 'Early disease detection', 'IoT-enabled smart sensing'],
      link: 'https://github.com/kanojsairam/biosync360'
    },
    {
      name: 'Metro Minds: Urban Management System',
      description: 'Implemented an IoT-powered solution for city infrastructure monitoring, addressing flood detection, earthquake prediction, traffic control, waste management, and city sound monitoring. Applied ML models and predictive analytics for proactive disaster management.',
      technologies: ['C', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'PyTorch', 'IoT & Smart Sensing'],
      features: ['Flood detection system', 'Earthquake prediction', 'Traffic control management', 'Waste management monitoring', 'City sound monitoring', 'ML-based predictive analytics'],
      link: 'https://metro-minds.vercel.app/'
    },
    {
      name: 'Agrisense: Smart Farming & Crop Optimization',
      description: 'Designed a sensor-based system to analyze real-time soil data, enabling precise crop and fertilizer recommendations. Utilized Flask APIs, IoT sensors, and machine learning to enhance agricultural efficiency. Winner of 2nd place at Ninjacart Hackathon for Agritech Solutions.',
      technologies: ['React.js', 'Flask', 'Convex', 'Gemini AI', 'Clerk', 'IoT & Smart Sensing'],
      features: ['Real-time soil data analysis', 'Precise crop recommendations', 'Fertilizer optimization', 'IoT sensor integration', 'Machine learning algorithms', 'Agricultural efficiency enhancement'],
      link: 'https://agrisense-world.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <section className="mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-8">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-8 p-2">
                <div className="w-60 h-60 bg-slate-900 rounded-full overflow-hidden">
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Kanojsairam S A" 
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 30%', transform: 'scale(1.1)' }}
                  />
                </div>
              </div>
            </div>
            
            <div className="text-gray-300 space-y-6">
              <p className="text-lg leading-relaxed">
                I'm Kanojsairam S A, a passionate Electronics & Communication Engineering student at Sri Eshwar College of Engineering 
                with a CGPA of 7.78. I'm currently pursuing my B.Tech degree (2022-2026) and have developed expertise in both 
                hardware and software development through hands-on projects and internships.
              </p>
              
              <p className="text-lg leading-relaxed">
                I completed a comprehensive MERN Stack internship at Better Tomorrow in 2024, where I utilized React.js for UI development, 
                Node.js for server-side logic, Express.js for API creation, and MongoDB for database management. This experience allowed 
                me to work on real-time projects and optimize web applications with enhanced data handling capabilities.
              </p>
              
              <p className="text-lg leading-relaxed">
                My passion lies in creating innovative solutions that bridge technology and real-world problems. I've developed 
                AI-powered platforms, IoT-based monitoring systems, and smart agriculture solutions. I'm particularly interested 
                in telemedicine, urban management systems, and sustainable technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Experience</span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">B.E (Electronics & Communication Engineering)</h3>
                  <p className="text-purple-400 font-semibold">Sri Eshwar College of Engineering</p>
                  <p className="text-gray-300">CGPA: 7.78 (Up to 6th semester)</p>
                </div>
                <span className="text-gray-400 font-medium">2022-2026</span>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">MERN Stack Internship</h3>
                  <p className="text-purple-400 font-semibold">Better Tomorrow</p>
                  <p className="text-gray-300">Completed comprehensive MERN stack development with real-time projects and web application optimization</p>
                </div>
                <span className="text-gray-400 font-medium">2024</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Higher Secondary Certificate (HSC)</h3>
                <p className="text-purple-400 font-semibold">Jayanthi Matric Hr Secondary School</p>
                <p className="text-gray-300">77.83% (2020-2022)</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Secondary School Leaving Certificate (SSLC)</h3>
                <p className="text-purple-400 font-semibold">Jayanthi Matric Hr Secondary School</p>
                <p className="text-gray-300">97% (2019-2020)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Recognition</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🏆 Hackathon Achievements</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• <strong>Finalist (2nd Place)</strong> - Ninjacart Hackathon (Agritech Solutions)</li>
                <li>• <strong>Champion</strong> - Tech Trek Hackathon (Innovative Tech Solution)</li>
                <li>• <strong>Finalist (2nd Place)</strong> - CodeSprint2K25 (24-Hour Hackathon)</li>
                <li>• <strong>Top 15 Finalist</strong> - Pravaah Hackathon (600+ participants)</li>
                <li>• <strong>First Place</strong> - Project Leap 23 (Java DB Sprint)</li>
                <li>• <strong>First Place</strong> - Project Expo 24 (Mini Project Innovation)</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-400 mb-4">💻 Coding Achievements</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• <strong>LeetCode:</strong> Highest Rating of 1,524 | Top 36.97%</li>
                <li>• <strong>CodeChef:</strong> Solved 100+ problems in Python and C</li>
                <li>• <strong>HackerRank:</strong> 4⭐ Python, 2⭐ C, 1⭐ SQL | 3 Badges</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 md:col-span-2">
              <h3 className="text-xl font-bold text-purple-400 mb-4">📜 Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <li> Certified in Cloud Computing (NPTEL, 2024)</li>
                  <li> Mastering Data Structures & Algorithms (Udemy, 2024)</li>
                  <li> The Joy of Computing Using Python (NPTEL, 2023)</li>
                </div>
                <div>
                  <li> SQL Certifications (HackerRank, 2023)</li>
                  <li> Introduction to MongoDB for Students (MongoDB, 2023)</li>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data]) => (
              <div
                key={category}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 mr-3">
                    {data.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {data.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-slate-700/50 text-gray-300 px-3 py-2 rounded-lg text-sm text-center hover:bg-purple-600/20 hover:text-purple-300 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </h2>
          
          <div className="space-y-12">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500 transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">{project.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      View Project
                      <Globe className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-4">Technologies Used:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-lg text-center font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;