"use client";
import { useState, useEffect } from 'react';

export default function CustomSolutionsPage() {
  const [activeSolution, setActiveSolution] = useState('supply-chain');
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [consultationProgress, setConsultationProgress] = useState(0);
  const [isConsulting, setIsConsulting] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    industry: '',
    employees: '',
    challenge: '',
    budget: '',
    timeline: ''
  });

  // Custom solution categories
  const solutionCategories = {
    'supply-chain': {
      title: "Supply Chain Optimization",
      icon: "🔗",
      description: "End-to-end supply chain solutions for food businesses",
      features: [
        "Inventory management systems",
        "Logistics optimization",
        "Supplier relationship management",
        "Demand forecasting"
      ],
      caseStudy: {
        client: "Global Retail Chain",
        problem: "30% inventory waste",
        solution: "AI-powered demand forecasting",
        result: "Reduced waste by 65%"
      }
    },
    'quality-control': {
      title: "Quality Assurance Systems",
      icon: "✅",
      description: "Comprehensive quality control and food safety solutions",
      features: [
        "HACCP implementation",
        "Quality certification support",
        "Supplier auditing",
        "Laboratory testing coordination"
      ],
      caseStudy: {
        client: "Food Manufacturer",
        problem: "Failed safety audits",
        solution: "Custom QA framework",
        result: "Achieved ISO 22000 certification"
      }
    },
    'market-expansion': {
      title: "Market Expansion",
      icon: "🌍",
      description: "Strategic entry into new markets and regions",
      features: [
        "Market research & analysis",
        "Regulatory compliance",
        "Distribution network setup",
        "Local partnership development"
      ],
      caseStudy: {
        client: "Beverage Company",
        problem: "Failed EU market entry",
        solution: "Compliance-first strategy",
        result: "Successful entry into 5 EU countries"
      }
    },
    'digital-transformation': {
      title: "Digital Transformation",
      icon: "💻",
      description: "Technology solutions for modern food businesses",
      features: [
        "ERP system implementation",
        "E-commerce platform development",
        "Data analytics integration",
        "Automation solutions"
      ],
      caseStudy: {
        client: "Traditional Exporter",
        problem: "Manual processes causing delays",
        solution: "Custom digital platform",
        result: "80% process automation achieved"
      }
    },
    'sustainability': {
      title: "Sustainability Solutions",
      icon: "🌱",
      description: "Eco-friendly and sustainable business practices",
      features: [
        "Carbon footprint reduction",
        "Sustainable sourcing",
        "Waste management systems",
        "Green certification support"
      ],
      caseStudy: {
        client: "Seafood Processor",
        problem: "High environmental impact",
        solution: "Sustainable sourcing program",
        result: "Reduced carbon footprint by 40%"
      }
    },
    'crisis-management': {
      title: "Crisis Management",
      icon: "🚨",
      description: "Risk mitigation and business continuity planning",
      features: [
        "Risk assessment",
        "Contingency planning",
        "Supply chain resilience",
        "Recovery strategies"
      ],
      caseStudy: {
        client: "Food Distributor",
        problem: "Supply chain disruption",
        solution: "Multi-sourcing strategy",
        result: "Zero downtime during crisis"
      }
    }
  };

  // Industry sectors we serve
  const industries = [
    { id: 'retail', name: 'Retail Supermarkets', icon: '🛒' },
    { id: 'manufacturing', name: 'Food Manufacturing', icon: '🏭' },
    { id: 'hospitality', name: 'Hospitality & Restaurants', icon: '🍽️' },
    { id: 'export', name: 'Export Businesses', icon: '📦' },
    { id: 'import', name: 'Import Distributors', icon: '📥' },
    { id: 'agriculture', name: 'Agriculture & Farming', icon: '🌾' },
    { id: 'beverage', name: 'Beverage Industry', icon: '🥤' },
    { id: 'seafood', name: 'Seafood Processing', icon: '🐟' }
  ];

  const successMetrics = {
    projects: 150,
    clients: 89,
    savings: 45,
    satisfaction: 98.7
  };

  const implementationProcess = [
    {
      phase: 1,
      title: "Discovery & Analysis",
      duration: "1-2 weeks",
      activities: ["Needs assessment", "Data collection", "Stakeholder interviews"],
      deliverables: ["Requirements document", "Feasibility study", "Project scope"]
    },
    {
      phase: 2,
      title: "Solution Design",
      duration: "2-3 weeks",
      activities: ["Solution architecture", "Technology selection", "Process mapping"],
      deliverables: ["Design blueprint", "Implementation plan", "Budget proposal"]
    },
    {
      phase: 3,
      title: "Development & Testing",
      duration: "4-8 weeks",
      activities: ["System development", "Quality testing", "User training"],
      deliverables: ["Working solution", "Test reports", "Training materials"]
    },
    {
      phase: 4,
      title: "Implementation & Support",
      duration: "Ongoing",
      activities: ["Deployment", "Performance monitoring", "Continuous improvement"],
      deliverables: ["Live system", "Support framework", "Optimization plan"]
    }
  ];

  const toggleIndustrySelection = (industryId) => {
    setSelectedIndustries(prev =>
      prev.includes(industryId)
        ? prev.filter(id => id !== industryId)
        : [...prev, industryId]
    );
  };

  useEffect(() => {
    if (isConsulting) {
      const timer = setInterval(() => {
        setConsultationProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setIsConsulting(false);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
      return () => clearInterval(timer);
    }
  }, [isConsulting]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    setIsConsulting(true);
    setConsultationProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-orange-200 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-orange-700 font-semibold text-sm uppercase tracking-wide">
              Tailored Business Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="block text-gray-900">Custom</span>
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Solutions Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bespoke solutions designed specifically for your unique business challenges in the food and trading industry
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{successMetrics.projects}+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">{successMetrics.clients}+</div>
            <div className="text-gray-600">Satisfied Clients</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">{successMetrics.savings}%</div>
            <div className="text-gray-600">Avg. Cost Savings</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{successMetrics.satisfaction}%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>

        {/* Main Solutions Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Panel - Solutions Catalog */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-8">
              {/* Solutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {Object.entries(solutionCategories).map(([key, solution]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSolution(key)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                      activeSolution === key
                        ? 'border-orange-500 bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg transform scale-105'
                        : 'border-orange-200 bg-white text-gray-700 hover:border-orange-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-2xl mb-2">{solution.icon}</div>
                    <h3 className="font-semibold text-sm mb-1">{solution.title}</h3>
                    <p className="text-xs opacity-80">{solution.description}</p>
                  </button>
                ))}
              </div>

              {/* Active Solution Details */}
              <div className="bg-orange-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{solutionCategories[activeSolution].icon}</div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{solutionCategories[activeSolution].title}</h2>
                    <p className="text-gray-600">{solutionCategories[activeSolution].description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {solutionCategories[activeSolution].features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Case Study</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Client:</span> {solutionCategories[activeSolution].caseStudy.client}</div>
                      <div><span className="font-medium">Challenge:</span> {solutionCategories[activeSolution].caseStudy.problem}</div>
                      <div><span className="font-medium">Solution:</span> {solutionCategories[activeSolution].caseStudy.solution}</div>
                      <div><span className="font-medium">Result:</span> {solutionCategories[activeSolution].caseStudy.result}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Your Industry</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() => toggleIndustrySelection(industry.id)}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                        selectedIndustries.includes(industry.id)
                          ? 'border-orange-500 bg-orange-50 text-orange-700 transform scale-105'
                          : 'border-orange-200 text-gray-600 hover:border-orange-300'
                      }`}
                    >
                      <div className="text-lg mb-1">{industry.icon}</div>
                      <div className="text-xs font-medium">{industry.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Solution Request Form */}
              <div className="border-2 border-dashed border-orange-300 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Request Custom Solution</h3>
                <form onSubmit={handleConsultationSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="p-3 border border-orange-200 rounded-xl"
                      required
                    />
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="p-3 border border-orange-200 rounded-xl"
                      required
                    >
                      <option value="">Select Industry</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="export">Export</option>
                      <option value="import">Import</option>
                    </select>
                    <input
                      type="text"
                      name="employees"
                      placeholder="Company Size (Employees)"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="p-3 border border-orange-200 rounded-xl"
                    />
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="p-3 border border-orange-200 rounded-xl"
                    >
                      <option value="">Project Budget</option>
                      <option value="10k-50k">$10K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-500k">$100K - $500K</option>
                      <option value="500k+">$500K+</option>
                    </select>
                  </div>
                  
                  <textarea
                    name="challenge"
                    placeholder="Describe your business challenge..."
                    value={formData.challenge}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-orange-200 rounded-xl mb-4"
                    rows="3"
                    required
                  ></textarea>

                  <div className="flex items-center justify-between">
                    <div>
                      {selectedIndustries.length > 0 && (
                        <div className="text-sm text-gray-600">
                          Selected industries: {selectedIndustries.length}
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isConsulting}
                      className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition duration-300 disabled:opacity-50"
                    >
                      {isConsulting ? 'Processing...' : 'Get Custom Proposal'}
                    </button>
                  </div>
                </form>
                
                {isConsulting && (
                  <div className="mt-4">
                    <div className="w-full bg-orange-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${consultationProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Analyzing your requirements... {consultationProgress}%
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - Process & Features */}
          <div className="space-y-8">
            {/* Implementation Process */}
            <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementation Process</h3>
              <div className="space-y-4">
                {implementationProcess.map((phase) => (
                  <div key={phase.phase} className="bg-orange-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                          {phase.phase}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{phase.title}</div>
                          <div className="text-xs text-gray-600">{phase.duration}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">
                      <strong>Activities:</strong> {phase.activities.join(', ')}
                    </div>
                    <div className="text-sm text-gray-700">
                      <strong>Deliverables:</strong> {phase.deliverables.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Custom Solutions */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-6 text-white">
              <h3 className="font-semibold mb-4">Why Choose Custom Solutions?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">🎯</div>
                  <div>
                    <div className="font-medium">Tailored to Your Needs</div>
                    <div className="text-sm text-orange-100">Solutions designed specifically for your business</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">💡</div>
                  <div>
                    <div className="font-medium">Expert Consultation</div>
                    <div className="text-sm text-orange-100">Industry experts with decades of experience</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">🚀</div>
                  <div>
                    <div className="font-medium">Proven Results</div>
                    <div className="text-sm text-orange-100">Track record of successful implementations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation */}
            <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Consultation</h3>
              <div className="space-y-3">
                <button className="w-full bg-orange-50 hover:bg-orange-100 p-3 rounded-xl text-left transition duration-300">
                  <div className="font-medium text-orange-700">📞 Schedule Call</div>
                  <div className="text-sm text-gray-600">30-minute free consultation</div>
                </button>
                <button className="w-full bg-amber-50 hover:bg-amber-100 p-3 rounded-xl text-left transition duration-300">
                  <div className="font-medium text-amber-700">💼 Case Studies</div>
                  <div className="text-sm text-gray-600">View successful projects</div>
                </button>
                <button className="w-full bg-orange-50 hover:bg-orange-100 p-3 rounded-xl text-left transition duration-300">
                  <div className="font-medium text-orange-700">📊 ROI Calculator</div>
                  <div className="text-sm text-gray-600">Estimate your savings</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 rounded-2xl p-6">
              <div className="text-amber-500 text-2xl mb-2">"</div>
              <p className="text-gray-700 mb-4">Their custom supply chain solution reduced our operational costs by 40% and improved delivery times significantly.</p>
              <div className="font-semibold text-gray-900">- Retail Chain CEO</div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6">
              <div className="text-orange-500 text-2xl mb-2">"</div>
              <p className="text-gray-700 mb-4">The market expansion strategy helped us enter 3 new countries with minimal risk and maximum impact.</p>
              <div className="font-semibold text-gray-900">- Food Exporter</div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6">
              <div className="text-amber-500 text-2xl mb-2">"</div>
              <p className="text-gray-700 mb-4">Their digital transformation team modernized our entire operation, increasing efficiency by 65%.</p>
              <div className="font-semibold text-gray-900">- Manufacturing Director</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-orange-100 text-lg mb-6">
            Let's create a custom solution that addresses your unique challenges and drives growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
              📞 Book Consultation
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
              📋 View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}