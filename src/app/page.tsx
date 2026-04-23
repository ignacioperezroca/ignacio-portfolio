import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MetricsStrip } from "@/components/MetricsStrip";
import { Navbar } from "@/components/Navbar";
import { SelectedWork } from "@/components/SelectedWork";
import { Skills } from "@/components/Skills";
import { SocialProof } from "@/components/SocialProof";
import { Thoughts } from "@/components/Thoughts";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MetricsStrip />
        <About preview />
        <SelectedWork previewLimit={3} />
        <Timeline previewLimit={3} />
        <Skills previewLimit={4} />
        {/* Hidden until verified testimonials / logos are available */}
        <SocialProof />
        <Thoughts previewLimit={3} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
