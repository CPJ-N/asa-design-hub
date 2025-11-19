import { ModernNav } from './components/ModernNav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ModernFooter } from './components/ModernFooter';
import { BubbleBackground } from './components/BubbleBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <BubbleBackground />
      <ModernNav />
      <Hero />
      <Projects />
      <Contact />
      <ModernFooter />
    </main>
  );
}
