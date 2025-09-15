import { Code2, Server, Smartphone, Brain, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate Electronics & Communication Engineering student with expertise in MERN Stack Development and IoT Solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img 
                    src="/Me.jpg" 
                    alt="Kanojsairam S A" 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 30%', transform: 'scale(1.1)' }}
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-gray-900">Education</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  B.Tech Electronics & Communication Engineering at Sri Eshwar College of Engineering (2022-2026) with CGPA 7.78. 
                  Specialized in hardware-software integration and cutting-edge technology solutions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Experience</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Completed comprehensive MERN Stack internship at Better Tomorrow (2024). Developed real-time web applications 
                  with React.js, Node.js, Express.js, and MongoDB, focusing on performance optimization and data handling.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Passion</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Creating innovative solutions that bridge technology and real-world problems. Specializing in AI-powered platforms, 
                  IoT monitoring systems, telemedicine, and sustainable technology solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise across full-stack development, IoT solutions, and modern frameworks
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Frontend Development</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'React.js', level: 90 },
                  { name: 'JavaScript', level: 85 },
                  { name: 'TypeScript', level: 80 },
                  { name: 'HTML/CSS', level: 95 },
                  { name: 'Tailwind CSS', level: 85 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Backend Development</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Node.js', level: 85 },
                  { name: 'Python', level: 95 },
                  { name: 'Express.js', level: 80 },
                  { name: 'MongoDB', level: 80 },
                  { name: 'MySQL', level: 75 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Tools & Technologies</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Git & GitHub', level: 85 },
                  { name: 'IoT Development', level: 80 },
                  { name: 'Arduino', level: 90 },
                  { name: 'Figma', level: 75 },
                  { name: 'VS Code', level: 90 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Journey & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Educational milestones and professional experiences that shaped my expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Education</h3>
                  <p className="text-gray-600">2022 - 2026</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900">B.Tech Electronics & Communication Engineering</h4>
                  <p className="text-gray-600">Sri Eshwar College of Engineering</p>
                  <p className="text-sm text-indigo-600 font-medium">CGPA: 7.78</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Specialized in hardware-software integration, digital signal processing, and communication systems. 
                  Active participant in technical symposiums and coding competitions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Professional Experience</h3>
                  <p className="text-gray-600">2024</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900">MERN Stack Developer Intern</h4>
                  <p className="text-gray-600">Better Tomorrow</p>
                  <p className="text-sm text-green-600 font-medium">Full-Stack Development</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Developed real-time web applications using React.js, Node.js, Express.js, and MongoDB. 
                  Focused on performance optimization, API integration, and responsive design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Highlights */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions combining technology with real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Agriculture System",
                description: "IoT-based monitoring system for soil moisture, temperature, and automated irrigation with real-time data analytics.",
                tech: ["Arduino", "IoT", "Python", "MongoDB"],
                icon: "🌱",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "AI-Powered Telemedicine Platform",
                description: "Comprehensive healthcare platform with AI diagnostics, video consultations, and patient management system.",
                tech: ["React.js", "Node.js", "AI/ML", "MongoDB"],
                icon: "🏥",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Urban Management System",
                description: "Smart traffic optimization system using computer vision and machine learning for real-time traffic analysis.",
                tech: ["Python", "OpenCV", "ML", "IoT" , "C"],
                icon: "🚦",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
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
