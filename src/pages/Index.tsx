import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'hsl(220,20%,7%)' }}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
