import React, { useState } from 'react';
import { ExternalLink, Github, Blocks, Brain, Bot, Shield, Calculator, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: Brain },
    { id: 'blockchain', label: 'Blockchain', icon: Blocks },
    { id: 'ai', label: 'AI & ML', icon: Bot },
    { id: 'crypto', label: 'Cryptography', icon: Shield },
    { id: 'games', label: 'Games', icon: Gamepad2 }
  ];

  const projects = [
    {
      id: 1,
      title: 'DeFi Protocol Suite',
      description: 'A comprehensive decentralized finance protocol with automated market making, yield farming, and governance features.',
      category: 'blockchain',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      github: 'https://github.com/manish/defi-protocol',
      live: 'https://defi-protocol.manish.tech',
      featured: true
    },
    {
      id: 2,
      title: 'AI Agent Framework',
      description: 'Modular framework for building autonomous AI agents with natural language processing and decision-making capabilities.',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      github: 'https://github.com/manish/ai-agent-framework',
      live: 'https://ai-agents.manish.tech',
      featured: true
    },
    {
      id: 3,
      title: 'Zero-Knowledge Voting System',
      description: 'Privacy-preserving voting system using zk-SNARKs to ensure vote anonymity while maintaining verifiability.',
      category: 'crypto',
      technologies: ['Circom', 'Solidity', 'TypeScript', 'Next.js'],
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=400&fit=crop',
      github: 'https://github.com/manish/zk-voting',
      featured: true
    },
    {
      id: 4,
      title: 'Mathematical Theorem Prover',
      description: 'Interactive theorem prover with automated proof search and natural language explanation generation.',
      category: 'ai',
      technologies: ['Lean', 'Python', 'React', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
      github: 'https://github.com/manish/theorem-prover',
      live: 'https://proofs.manish.tech'
    },
    {
      id: 5,
      title: 'Board Game Strategy AI',
      description: 'Monte Carlo Tree Search implementation for complex board games with reinforcement learning optimization.',
      category: 'games',
      technologies: ['Python', 'PyTorch', 'NumPy', 'Flask'],
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop',
      github: 'https://github.com/manish/board-game-ai'
    },
    {
      id: 6,
      title: 'Decentralized Identity Platform',
      description: 'Self-sovereign identity solution with verifiable credentials and privacy-preserving authentication.',
      category: 'blockchain',
      technologies: ['Ethereum', 'IPFS', 'React', 'Express'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      github: 'https://github.com/manish/decentralized-identity',
      live: 'https://identity.manish.tech'
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring the intersection of technology, mathematics, and innovation through practical applications.
          </p>
        </div>

        {/* Featured Projects Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Highlights</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <div className="flex space-x-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={14} />
                    <span className="text-xs">Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span className="text-xs">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;