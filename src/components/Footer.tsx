import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sai Dasarath</h3>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer passionate about creating scalable applications and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/saidasarath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sai-dasarath-kakumanu-583986225/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:kakumanusaidasarath@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:kakumanusaidasarath@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  kakumanusaidasarath@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <strong>Phone:</strong>{' '}
                <a
                  href="tel:+918341468797"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 8341468797
                </a>
              </p>
              <p className="text-gray-400">
                <strong>Location:</strong> Andhra Pradesh, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="text-red-500" size={16} /> by Kakumanu Sai Dasarath
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;