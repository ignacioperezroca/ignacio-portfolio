import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SelectedWork } from "@/components/SelectedWork";
import { Skills } from "@/components/Skills";
import { SocialProof } from "@/components/SocialProof";
import { Thoughts } from "@/components/Thoughts";
import { Timeline } from "@/components/Timeline";
import { WorkingStyle } from "@/components/WorkingStyle";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <SelectedWork />
        <Achievements />
        <Skills />
        <WorkingStyle />
        <SocialProof />
        <Thoughts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
