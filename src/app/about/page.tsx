import { About } from "@/components/About";
import { SiteFrame } from "@/components/SiteFrame";
import { Timeline } from "@/components/Timeline";
import { WorkingStyle } from "@/components/WorkingStyle";

export default function AboutPage() {
  return (
    <SiteFrame>
      <About />
      <WorkingStyle />
      <Timeline limit={3} />
    </SiteFrame>
  );
}
