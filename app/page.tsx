import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Academics from '@/components/academics/Academics';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Academics />
    </main>
  );
}