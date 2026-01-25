import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Academics from '@/components/academics/Academics';
import Athletics from '@/components/athletics/Athletics';
import Projects from '@/components/projects/Projects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Academics />
      <Athletics />
      <Projects />
    </main>
  );
}