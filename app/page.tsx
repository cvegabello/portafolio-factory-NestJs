import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Academics from '@/components/academics/Academics';
import Athletics from '@/components/athletics/Athletics';
import Projects from '@/components/projects/Projects';
import References from '@/components/references/References';
import Moments from '@/components/moments/Moments';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Academics />
      <Athletics />
      <Projects />
      <References />
      <Moments />
    </main>
  );
}