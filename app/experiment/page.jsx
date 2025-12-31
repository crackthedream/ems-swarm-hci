"use client";

import VideoPlayer from '../../components/VideoPlayer';
import MiniToc from '../../components/MiniToc';
import Breadcrumb from '../../components/Breadcrumb';

export default function ExperimentPage() {
  const sections = [
    { id: 'experiment-title', label: 'Overview' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'metrics', label: 'Metrics' },
    { id: 'scenario', label: 'Scenario & Conditions' },
    { id: 'ems-demos', label: 'EMS Demonstrations' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Experiment', href: '/experiment' }]} />
      <h1 id="experiment-title" className="text-2xl mb-4">Experiment — Design & Evaluation Plan</h1>
      <p className="mb-6 text-body">The evaluation examines whether EMS-based feedback improves operator awareness and interaction efficiency during UAV swarm search tasks in simulation.</p>

      <MiniToc sections={sections} />

      <section className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div id="objectives" className="card">
            <h2 className="text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Objectives
            </h2>
            <ul className="list-disc ml-5 text-body space-y-2">
              <li>Assess whether EMS feedback speeds operator response to detections.</li>
              <li>Evaluate reduction in reliance on visual scanning.</li>
              <li>Measure perceived workload and usability.</li>
            </ul>
          </div>

          <div id="metrics" className="card">
            <h2 className="text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">📊</span>
              Metrics
            </h2>
            <ul className="list-disc ml-5 text-body space-y-2">
              <li>Detection-to-response time</li>
              <li>Navigation adjustments</li>
              <li>Task completion time</li>
              <li>Missed/delayed responses</li>
              <li>Subjective workload assessment</li>
            </ul>
          </div>
        </div>

        <div id="scenario" className="card">
          <h2 className="text-lg mb-3 flex items-center gap-2">
            <span className="text-2xl">🔬</span>
            Scenario & Conditions
          </h2>
          <p className="text-body mb-4">Simulation uses UAV swarms patrolling a predefined area with artificial markers as targets. Two experimental conditions are compared:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold mb-2 text-navy dark:text-white">Condition A: Visual-only</h3>
              <p className="text-sm text-body">Traditional interface with visual feedback only</p>
            </div>
            <div className="p-4 bg-accent/5 dark:bg-accent/10 rounded-lg border border-accent/20 dark:border-accent/30">
              <h3 className="font-semibold mb-2 text-navy dark:text-white">Condition B: Visual + EMS</h3>
              <p className="text-sm text-body">Enhanced interface with EMS directional feedback</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <img src="/5.png" alt="Experimental setup" className="figure-img" loading="lazy" decoding="async" style={{objectPosition: 'center'}} />
            <div className="figure-caption">Figure 5. Experimental setup — simulated environment and marker placements.</div>
          </div>

          <div>
            <img src="/8.png" alt="Simulation overview" className="figure-img" loading="lazy" decoding="async" style={{objectPosition: 'center'}} />
            <div className="figure-caption">Figure 6. Simulation overview — sample map and patrol trajectories.</div>
          </div>
        </div>

        <div id="ems-demos" className="card">
          <h2 className="text-lg mb-4 flex items-center gap-2">
            <span className="text-2xl">🎥</span>
            EMS System Demonstrations
          </h2>
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl">
            <VideoPlayer
              src="/media/EMS测试.mp4"
              poster="/3.png"
              title="EMS Testing"
              caption="Testing and validation of EMS feedback patterns for directional cue encoding."
            />
          </div>
        </div>
      </section>
    </>
  );
}
