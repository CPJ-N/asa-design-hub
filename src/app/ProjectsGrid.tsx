// src/components/ProjectsGrid.tsx
import Image from 'next/image';

const projects = [
  { id: 1, title: 'Project 1', image: '/placeholder1.jpg' },
  { id: 2, title: 'Project 2', image: '/placeholder2.jpg' },
  { id: 3, title: 'Project 3', image: '/placeholder3.jpg' },
  { id: 4, title: 'Project 4', image: '/placeholder4.jpg' },
  // Add more projects as needed
];

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <a href="#" className="text-blue-600 hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}