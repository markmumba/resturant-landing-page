import Hero from '../components/Hero';
import About from '../components/About';
import SignatureDishes from '../components/SignatureDishes';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <SignatureDishes />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
