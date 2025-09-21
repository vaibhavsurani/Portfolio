'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import { Github, Linkedin, Mail, ArrowRight, LoaderCircle, ServerCrash } from 'lucide-react';
import { IProject } from '@/models/Project';
import ProjectCard from '@/components/ProjectCard';

export default function PortfolioPage() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects. Please try again later.');
        }
        const data = await response.json();
        setProjects(data.data);
      } catch (err: unknown) { // Use 'unknown' instead of 'any' for type safety
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const skills = [
    'UI/UX Design', 'Figma', 'User Research', 'Wireframing', 'Prototyping', 
    'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'MongoDB'
  ];

  return (
    <div className="bg-slate-900 text-slate-300 font-sans">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section id="home" className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Creative UI/UX Designer
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-8">
            I design and build beautiful, intuitive, and responsive user interfaces that delight users and drive business goals.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 duration-300"
          >
            View My Work <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3">
                    <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-2xl">
                        <Image 
                            src="https://placehold.co/256x256/1e293b/94a3b8?text=V" 
                            alt="Vaibhav" 
                            className="w-full h-full rounded-full object-cover"
                            width={256}
                            height={256}
                        />
                    </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                    <p className="text-lg text-slate-400 mb-4">
                        Hello! I&apos;m Vaibhav, a passionate UI/UX designer with a knack for creating seamless and engaging digital experiences. My journey into design started with a fascination for how users interact with technology, and it has evolved into a career dedicated to crafting solutions that are not only visually appealing but also highly functional.
                    </p>
                    <p className="text-lg text-slate-400">
                        I thrive on solving complex problems and turning them into simple, elegant designs. When I&apos;m not designing, you can find me exploring the latest tech trends or contributing to open-source projects.
                    </p>
                </div>
            </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
          {loading && (
            <div className="flex justify-center items-center h-40">
              <LoaderCircle className="h-12 w-12 animate-spin text-purple-400" />
              <p className="ml-4 text-lg">Loading Projects...</p>
            </div>
          )}
          {error && (
            <div className="flex flex-col items-center justify-center h-40 bg-red-900/20 rounded-lg">
              <ServerCrash className="h-12 w-12 text-red-400" />
              <p className="mt-4 text-lg text-red-400">{error}</p>
            </div>
          )}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          )}
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div key={skill} className="bg-slate-800 text-slate-300 px-6 py-3 rounded-full text-lg font-medium shadow-md">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m currently available for freelance work and open to new opportunities. If you have a project in mind or just want to say hello, feel free to reach out!
          </p>
          <div className="flex justify-center items-center space-x-6">
            <a href="mailto:vaibhavsurani5@gmail.com" className="inline-flex items-center text-lg text-purple-400 hover:text-purple-300 transition-colors">
              <Mail className="h-6 w-6 mr-2" />
              vaibhavsurani5@gmail.com
            </a>
            <a href="https://github.com/vaibhavsurani" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com/in/vaibhavsurani" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

