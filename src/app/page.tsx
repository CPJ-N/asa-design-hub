// src/app/page.tsx
import { Header } from './Header';
import { Hero } from './Hero';
import { ProjectsGrid } from './ProjectsGrid';
import { Footer } from './Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProjectsGrid />
      <Footer />
    </div>
  );
}






