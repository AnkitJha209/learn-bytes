import React from 'react'
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';
import { StatsCard } from '../ui/StatsCard';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Hero = () => {
  const {token} = useSelector(state => state.auth)
  return (
    <div className="bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Transform Your Future with LearnBytes
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Master in-demand skills with our expert-led courses and join a thriving community of learners.
            </p>
            <div className="flex flex-wrap gap-4">
              {
                token===null? (<NavLink to='/log-in' className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                  Start Learning
                </NavLink>):(
                  <NavLink to='/courses' className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                  Start Learning
                </NavLink>
                )
              }
              <NavLink to='/courses' className="border-2 border-emerald-400 hover:bg-emerald-800 px-8 py-3 rounded-lg font-semibold transition-all">
                View Courses
              </NavLink>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
              alt="Online learning"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <StatsCard 
            icon={<GraduationCap />}
            title="300+" 
            description="Expert Courses"
          />
          <StatsCard 
            icon={<Users />}
            title="75,000+" 
            description="Active Students"
          />
          <StatsCard 
            icon={<BookOpen />}
            title="1500+" 
            description="Hours of Content"
          />
          <StatsCard 
            icon={<Award />}
            title="98%" 
            description="Success Rate"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
