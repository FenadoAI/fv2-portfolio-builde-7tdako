import React from 'react';
import { Brain, Blocks, Calculator, Shield, Sparkles, Bot, Gamepad2 } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: 'Technology',
      description: 'Passionate about cutting-edge tech solutions and innovation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Blocks,
      title: 'Blockchain',
      description: 'Building decentralized solutions and smart contracts',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Applied mathematics in computational problems',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Zero Knowledge Proofs',
      description: 'Privacy-preserving cryptographic protocols',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Sparkles,
      title: 'Generative AI',
      description: 'Creating intelligent content generation systems',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Developing autonomous intelligent systems',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Gamepad2,
      title: 'Board Games',
      description: 'Strategic thinking and game theory enthusiast',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a tech entrepreneur with a passion for emerging technologies and strategic thinking.
            My journey spans across blockchain, AI, mathematics, and the fascinating world of board games.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <img
              src="https://storage.googleapis.com/fenado-ai-farm-public/generated/a912a242-6207-4c1b-8d5f-8fbb96926803.webp"
              alt="Manish's Workspace"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">My Digital Workspace</h3>
              <p className="text-lg opacity-90">Where innovation meets creativity</p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              My Philosophy
            </h3>
            <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
              "Technology should solve real problems while preserving human values.
              Whether it's building decentralized systems, creating AI agents, or strategizing
              over a board game, I believe in the power of thoughtful innovation."
            </blockquote>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <span className="text-gray-900 font-semibold">Manish</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;