import React from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  liveUrl,
}: ProjectCardProps) {
  return (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-gradient-to-r from-gray-800 via-gray-900 to-black p-1 rounded-3xl shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-transform duration-500 ease-out block"
    >
      <div className="relative bg-gray-900 rounded-3xl overflow-hidden">
        {/* Image Section */}
        <div
          className="h-56 lg:h-64 bg-cover bg-center rounded-t-3xl"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-gray-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>

          {/* Link Icon */}
          {liveUrl && (
            <div className="mt-4 inline-flex items-center gap-2">
             
              
            </div>
          )}
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    </a>
  );
}
