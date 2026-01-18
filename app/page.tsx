import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
      <About />
    </main>
  );
}