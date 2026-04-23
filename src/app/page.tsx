import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { MetricsStrip } from "@/components/MetricsStrip";
import { SelectedWork } from "@/components/SelectedWork";
import { Skills } from "@/components/Skills";
import { SiteFrame } from "@/components/SiteFrame";
import { Thoughts } from "@/components/Thoughts";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <SiteFrame>
      <Hero />
      <MetricsStrip />
      <About preview />
      <SelectedWork limit={3} showFilters={false} />
      <Timeline limit={3} />
      <Skills limit={4} />
      <Thoughts limit={3} />
      <Contact />
    </SiteFrame>
  );
}
