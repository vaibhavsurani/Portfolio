import { IProject } from '@/models/Project';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
      <div className="relative">
        <Image
          src={project.imageUrl || `https://placehold.co/600x400/1e293b/94a3b8?text=${project.title.replace(' ', '+')}`}
          alt={project.title}
          className="w-full h-56 object-cover"
          onError={(e) => e.currentTarget.src = `https://placehold.co/600x400/1e293b/94a3b8?text=Image+Error`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
                <span key={tag} className="bg-slate-700 text-xs text-slate-300 font-semibold px-2.5 py-1 rounded-full">{tag}</span>
            ))}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-semibold text-purple-400 group-hover:text-purple-300 transition-colors"
        >
          View Project <ArrowUpRight className="ml-1 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
