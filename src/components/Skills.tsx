import React from 'react';
import { Code, Database, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-blue-600" size={24} />,
      skills: ['Java', 'Python', 'C'],
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="text-green-600" size={24} />,
      skills: ['React.js', 'Spring Boot', 'HTML/CSS'],
      bgColor: 'bg-green-50'
    },
    {
      title: 'Databases',
      icon: <Database className="text-purple-600" size={24} />,
      skills: ['MySQL'],
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Tools & Concepts',
      icon: <Settings className="text-orange-600" size={24} />,
      skills: ['Git', 'Postman', 'OOP', 'DSA'],
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build amazing applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-center">
                    <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;