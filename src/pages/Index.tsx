
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionIntro from '../components/SolutionIntro';
import AuthorIntro from '../components/AuthorIntro';
import PersonalStory from '../components/PersonalStory';
import ThreeErrors from '../components/ThreeErrors';
import LayerSyndrome from '../components/LayerSyndrome';
import ProductOffer from '../components/ProductOffer';
import Guarantee from '../components/Guarantee';
import FinalChoice from '../components/FinalChoice';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <HeroSection />
      <ProblemSection />
      <SolutionIntro />
      <AuthorIntro />
      <PersonalStory />
      <ThreeErrors />
      <LayerSyndrome />
      <ProductOffer />
      <Guarantee />
      <FinalChoice />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
