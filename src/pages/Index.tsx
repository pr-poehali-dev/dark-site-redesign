import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Practices from '@/components/Practices';
import BottomSection from '@/components/BottomSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div style={{ backgroundColor: '#12100e', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Practices />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default Index;
