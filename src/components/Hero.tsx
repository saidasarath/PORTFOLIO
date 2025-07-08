import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import saiPhoto from './sai.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Kakumanu Sai <span className="text-blue-600">Dasarath</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Software Engineer | Java | React js | Spring Boot
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Building scalable backend systems and modern web applications with passion for clean code and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
              <Download size={20} />
              Download Resume
            </button>
            <a 
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start">
            <a 
              href="https://github.com/saidasarath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sai-dasarath-kakumanu-583986225/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:kakumanusaidasarath@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-green-400 rounded-full opacity-20 absolute -top-4 -left-4"></div>
            <div className="w-72 h-72 bg-gray-300 rounded-full flex items-center justify-center relative shadow-lg border-4 border-white overflow-hidden">
              <img
                src={saiPhoto}
                alt="Professional photo of Kakumanu Sai Dasarath"
                className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;