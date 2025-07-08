import React from 'react';
import { Github, ExternalLink, Leaf, BookOpen, TreePine } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Agricultural Products Rural Entrepreneurship Management System',
      icon: <Leaf className="text-green-600" size={32} />,
      description: 'A comprehensive management system designed to support rural entrepreneurs in the agricultural sector, featuring product management, inventory tracking, and business analytics.',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'React'],
      features: [
        'Product inventory management',
        'Entrepreneur registration and profiles',
        'Sales and revenue tracking',
        'Market analysis dashboard'
      ],
      githubUrl: 'https://github.com/saidasarath/AgriTechGrow',
      demoUrl: '#',
      bgGradient: 'from-green-400 to-blue-500'
    },
    {
      title: 'Book Manager Application',
      icon: <BookOpen className="text-blue-600" size={32} />,
      description: 'A modern book management system that allows users to organize their personal library, track reading progress, and discover new books with an intuitive interface.',
      techStack: ['React', 'Java', 'Spring Boot', 'MySQL'],
      features: [
        'Personal library organization',
        'Reading progress tracking',
        'Book search and filtering',
        'Reading statistics and insights'
      ],
      githubUrl: 'https://github.com/saidasarath',
      demoUrl: '#',
      bgGradient: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Rule Engine with AST',
      icon: <TreePine className="text-purple-600" size={32} />,
      description: 'An intelligent rule engine built using Abstract Syntax Trees (AST) for dynamic rule evaluation and processing, enabling flexible business logic implementation.',
      techStack: ['Java', 'Spring Boot', 'AST Parser', 'JUnit'],
      features: [
        'Dynamic rule creation and parsing',
        'AST-based rule evaluation',
        'Complex condition handling',
        'Performance-optimized execution'
      ],
      githubUrl: 'https://github.com/saidasarath',
      demoUrl: '#',
      bgGradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my key projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.bgGradient} p-6 text-white`}>
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-2 rounded-lg mr-3">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/saidasarath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;