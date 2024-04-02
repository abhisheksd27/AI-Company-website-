import React from 'react';

const Main = (props) => {
  const { features } = props;

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">Authentic AI Solutions</h1>
          <p className="text-lg md:text-xl text-gray-400">Empowering businesses with transparent and ethical AI technologies.</p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="feature-item bg-gray-700 rounded-lg p-6 transition duration-300 hover:bg-gray-800 hover:shadow-lg">

              <div className="flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
