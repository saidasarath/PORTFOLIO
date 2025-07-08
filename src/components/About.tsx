import React from 'react';
import { Award, Download } from 'lucide-react';
import saiPhoto from './sai.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a passionate B.Tech Computer Science graduate from KL University with a strong foundation in 
              full-stack development. With expertise in Java, React, and Spring Boot, I love creating scalable 
              applications that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              My journey in software development has been driven by curiosity and a desire to build impactful 
              solutions. From agricultural management systems to modern web applications, I enjoy tackling 
              diverse challenges with clean, efficient code.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <Award className="text-green-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Certifications</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  AWS Cloud Practitioner
                </li>
              </ul>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src={saiPhoto}
                  alt="Professional photo of Kakumanu Sai Dasarath"
                  className="w-56 h-56 object-cover rounded-full border-4 border-blue-500 shadow-xl mx-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-600 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;