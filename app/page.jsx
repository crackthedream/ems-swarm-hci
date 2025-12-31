import HeroParallax from '../components/HeroParallax';
import StaticLink from '../components/StaticLink';

export default function HomePage() {
  return (
    <>
      <section className="hero rounded-md mb-8 overflow-hidden">
        <div className="relative">
          <HeroParallax src="/6.png" alt="Field background" className="w-full h-72 md:h-96 lg:h-[520px]" imgClass="brightness-75" strength={12} disabledPaths={["/print"]} loading="eager" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/45 to-black/40 z-10" />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="max-w-4xl px-6 py-8 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-white leading-tight drop-shadow-lg">EMS-based Directional Feedback for UAV Swarm Search</h1>
                <p className="text-slate-100 mb-8 leading-relaxed max-w-3xl mx-auto md:mx-0 text-base md:text-lg drop-shadow-md">In complex outdoor search scenarios, operators controlling unmanned aerial vehicle (UAV) swarms often face high cognitive load caused by limited visual interfaces and fragmented situational awareness. While multi-UAV systems can significantly improve search efficiency through parallel sensing and distributed coverage, effective human–swarm interaction remains a critical challenge, especially when operators rely primarily on small handheld displays.</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                  <StaticLink href="/system" className="btn-primary">System</StaticLink>
                  <StaticLink href="/interaction" className="btn-primary">Interaction</StaticLink>
                  <StaticLink href="/experiment" className="btn-accent">Experiment</StaticLink>
                  <StaticLink href="/team" className="btn-accent">Team</StaticLink>
                </div>
              </div>

              <div className="hidden md:block ml-auto pr-8 z-30">
                <HeroParallax src="/1.png" alt="Concept illustration" className="w-[420px] h-[280px] rounded-lg shadow-2xl" imgClass="rounded-lg" strength={8} disabledPaths={["/print"]} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8">
        <div className="card">
          <h2 className="text-xl mb-2">Project Overview</h2>
          <p className="text-body">We propose a conceptual human–swarm interaction framework in which a UAV swarm autonomously performs area patrol and visual target detection, while detection results are encoded into low-complexity EMS feedback signals delivered to the operator. Using artificial visual markers (e.g., AprilTag / ArUco) as controlled search targets, the project focuses on system design, interaction logic, and experimental evaluation in a simulated environment.</p>
        </div>

        <div className="card">
          <h2 className="text-xl mb-2">Goals</h2>
          <ul className="list-disc ml-5 text-body">
            <li>Investigate EMS as an auxiliary communication modality in human–swarm systems</li>
            <li>Design low-complexity directional EMS cues to reduce visual load</li>
            <li>Evaluate interaction performance in simulation-based experiments</li>
          </ul>
        </div>
      </section>
    </>
  );
}
