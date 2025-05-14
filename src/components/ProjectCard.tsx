import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

// This component displays a card for each project in your portfolio
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full">
      {/* Project Image */}
      <div className="relative h-56 w-full bg-gray-100">
        {/* We use a placeholder div as fallback in case the image isn't available */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        
        {/* The actual project image */}
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.featured}
        />
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs text-gray-500">+{project.tags.length - 3} more</span>
          )}
        </div>
        
        {/* Project Title */}
        <h3 className="text-xl font-bold mb-2 text-gray-900">
          {project.title}
        </h3>
        
        {/* Project Description */}
        <p className="text-gray-600 mb-4 flex-grow">
          {project.description}
        </p>
        
        {/* Project Link */}
        <Link 
          href={`/projects/${project.id}`}
          className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center"
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}