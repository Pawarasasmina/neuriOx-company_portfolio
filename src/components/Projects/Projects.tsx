import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './projectsData';

export default function Projects() {
  return (
    <div id="projects" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">Our Projects</h2>
          <p className="mt-4 text-xl text-gray-600">
            Showcasing our expertise through successful deliveries
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}