


'use client';
import ContactUs from "components/ContactUs";
import HeroSection from "components/HeroSection";

import ServicesWeProvide from "components/ServicesWeProvide";

import WhyChooseUs from "components/WhyChooseUs";
import FullWidthSection from "components/FullWidthSection";

import ServiceProcess from "components/ServiceProcess";
import ClientShowcase from "components/ClientShowCase";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <FullWidthSection>
        <HeroSection />
      </FullWidthSection>
      
      {/* <FullWidthSection>
        <WelcomeSection />
      </FullWidthSection> */}
      
      <FullWidthSection>
       <ServicesWeProvide />
      </FullWidthSection>

      
      
      {/* <FullWidthSection>
        <ServicesWeProvide />
      </FullWidthSection> */}
      
      <FullWidthSection>
        <WhyChooseUs />
      </FullWidthSection>
      
      {/* <FullWidthSection>
        <ProcessSection />
      </FullWidthSection> */}
      
      {/* <FullWidthSection>
        <TechnologySection />
      </FullWidthSection> */}
{/*       
      <FullWidthSection>
        <FinancialInsightsSection />
      </FullWidthSection> */}

        <FullWidthSection>
        <ServiceProcess />
      </FullWidthSection>
      
      <FullWidthSection>
        <ClientShowcase />
      </FullWidthSection>
      
      {/* <FullWidthSection>
        <ContactUs />
      </FullWidthSection> */}

       <FullWidthSection>
        <ContactUs />
      </FullWidthSection>
    </div>
  );
}