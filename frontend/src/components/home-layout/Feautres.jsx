import React from 'react';
import { Code, Brain, Target, Rocket } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';

const Features = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose LearnBytes?</h2>
          <p className="text-xl text-gray-600">Your Gateway to Tech Excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Code />}
            title="Project-Based"
            description="Build real-world projects that showcase your skills"
          />
          <FeatureCard
            icon={<Brain />}
            title="Industry Experts"
            description="Learn from top professionals in the field"
          />
          <FeatureCard
            icon={<Target />}
            title="Structured Path"
            description="Clear roadmap to achieve your learning goals"
          />
          <FeatureCard
            icon={<Rocket />}
            title="Career Support"
            description="Get guidance for your professional growth"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;