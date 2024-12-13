import React from 'react';
import { Users, Target, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">About LearnBytes</h1>
          <p className="text-lg">
            Empowering learners worldwide with the skills to excel in their careers and beyond.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Learning"
              className="rounded-lg h-[400px] w-[500px] shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              At LearnBytes, we aim to make quality education accessible to everyone, leveraging technology and innovation to create an inclusive learning environment.
            </p>
            <p className="text-lg mb-4">
              We believe in the power of knowledge to transform lives and are dedicated to helping individuals achieve their goals, whether they’re upskilling for a career, exploring a personal passion, or advancing in their field.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <Lightbulb className="w-10 h-10 text-white" />
              <p className="text-lg">Innovative learning solutions tailored to your needs.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <Target className="w-10 h-10 text-white" />
              <p className="text-lg">Focused on delivering measurable outcomes.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <Users className="w-10 h-10 text-white" />
              <p className="text-lg">Building a vibrant community of learners.</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Join Our Journey</h2>
          <p className="text-center text-lg mb-6">
            Discover your potential and transform your future with LearnBytes. Together, let’s shape a brighter tomorrow.
          </p>
          <div className="flex justify-center">
            <img
              src="https://media.istockphoto.com/id/2155053753/photo/business-team-putting-hands-together-at-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=cbrLxOT62fLesrz7eT4HpJW-nWO9EaCmWikY3TK8Xt4="
              alt="Team Collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;