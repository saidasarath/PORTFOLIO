import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Activities</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and involvement in various technical activities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <GraduationCap className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">B.Tech in Computer Science</h3>
                <p className="text-lg text-gray-600">KL University</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <Calendar className="text-blue-600 mr-3" size={20} />
                <span className="font-medium">2021 - 2025</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <MapPin className="text-blue-600 mr-3" size={20} />
                <span className="font-medium">Guntur, Andhra Pradesh</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <Award className="text-green-600 mr-3" size={20} />
                <span className="font-medium">CGPA: 9.1</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Academic Highlights</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Excellent academic performance with 9.1 CGPA
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Strong foundation in Data Structures and Algorithms
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Specialized in Full-Stack Development
                </li>
              </ul>
            </div>
          </div>

          {/* Activities & Interests Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Award className="text-green-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Activities & Interests</h3>
                <p className="text-lg text-gray-600">Beyond Academics</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                  Competitive Programming
                </h4>
                <p className="text-gray-700 text-sm ml-5">
                  Active participation in hackathons and coding competitions, enhancing problem-solving skills and algorithmic thinking.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                  Personal Projects
                </h4>
                <p className="text-gray-700 text-sm ml-5">
                  Building personal Java applications and exploring modern web technologies to stay updated with industry trends.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                  Technology Exploration
                </h4>
                <p className="text-gray-700 text-sm ml-5">
                  Continuously learning new technologies like Node.js, advanced React patterns, and cloud computing concepts.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
                  Open Source Contribution
                </h4>
                <p className="text-gray-700 text-sm ml-5">
                  Contributing to open-source projects and maintaining a strong GitHub presence with regular commits and project updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;