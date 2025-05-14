import React from 'react';
import { getAllProjects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects | Dhrumil Patel',
  description: 'Data science and analytics projects by Dhrumil Patel',
};

export default function ProjectsPage() {
  // Get all projects from our data file
  const projects = getAllProjects();
  
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl max-w-3xl">
            A collection of my work in data analytics, machine learning, and business intelligence.
            Each project demonstrates different aspects of my technical expertise and problem-solving approach.
          </p>
        </div>
      </section>
      
      {/* Filters Section - Can be expanded later */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-medium text-gray-700">Filter by:</span>
            <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              All Projects
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 px-4 py-1 rounded-full text-sm border">
              Machine Learning
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 px-4 py-1 rounded-full text-sm border">
              Data Visualization
            </button>
            <button className="bg-white text-gray-700 hover:bg-gray-100 px-4 py-1 rounded-full text-sm border">
              NLP
            </button>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in my work?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects or opportunities to apply my data science skills.
          </p>
          <a 
            href="mailto:patel.dhrumil@protonmail.com" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}