"use client";

import InteractiveFigure from '../../components/InteractiveFigure';
import VideoPlayer from '../../components/VideoPlayer';
import MiniToc from '../../components/MiniToc';
import Breadcrumb from '../../components/Breadcrumb';
import { useRef } from 'react';

export default function SystemPage() {
  const figRef = useRef();

  const regions = [
    { id: 'swarm', left: 5, top: 30, width: 30, height: 40, label: 'UAV Swarm' },
    { id: 'perception', left: 45, top: 10, width: 25, height: 30, label: 'Perception' },
    { id: 'aggregation', left: 45, top: 55, width: 25, height: 25, label: 'Aggregation' },
    { id: 'ems', left: 75, top: 30, width: 20, height: 40, label: 'EMS Encoding' },
  ];

  const sections = [
    { id: 'system-architecture', label: 'System Architecture' },
    { id: 'system-components', label: 'System Components' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'system-demos', label: 'System Demonstrations' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'System', href: '/system' }]} />
      <h1 id="system-architecture" className="text-2xl mb-4">System Architecture & Workflow</h1>
      <p className="mb-6 text-body">The system integrates a UAV swarm with onboard visual perception, a lightweight target detection pipeline, and an EMS-based feedback interface to support operator situational awareness. The design emphasizes information flow and interaction logic rather than low-level flight control.</p>

      <MiniToc sections={sections} />

      <section className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div id="system-components" className="card">
            <h2 className="text-lg mb-2">System Components</h2>
            <ol className="list-decimal ml-5 text-body">
              <li className="mb-2"><span onMouseEnter={() => figRef.current?.highlight('swarm')} onMouseLeave={() => figRef.current?.highlight(null)} className="underline cursor-pointer">UAV Swarm Layer</span> — multiple quadrotor agents with forward-facing cameras performing coordinated area coverage and visual data capture.</li>
              <li className="mb-2"><span onMouseEnter={() => figRef.current?.highlight('perception')} onMouseLeave={() => figRef.current?.highlight(null)} className="underline cursor-pointer">Perception & Detection Layer</span> — onboard visual detection of artificial markers (AprilTag / ArUco); outputs include detection flag, relative position, and detector identity.</li>
              <li className="mb-2"><span onMouseEnter={() => figRef.current?.highlight('aggregation')} onMouseLeave={() => figRef.current?.highlight(null)} className="underline cursor-pointer">Information Aggregation & Encoding</span> — swarm-level aggregation to extract coarse spatial cues and encode them into discrete EMS feedback states.</li>
              <li className="mb-2"><span onMouseEnter={() => figRef.current?.highlight('ems')} onMouseLeave={() => figRef.current?.highlight(null)} className="underline cursor-pointer">Human Interaction Layer</span> — operator supervises via manual controls; EMS provides supplementary directional cues.</li>
            </ol>
          </div>

          <div>
            <InteractiveFigure ref={figRef} src="/2.png" alt="System architecture" regions={regions} caption="Figure 2. System architecture showing UAV swarm perception, EMS mapping, and operator control loop." />
          </div>
        </div>

        <div className="card">
          <h2 id="workflow" className="text-lg mb-2">Workflow</h2>
          <p className="text-body">UAV perception → information encoding → EMS feedback → operator decision → swarm response. Aggregation prioritizes simplicity, robustness, and interpretability over precision.</p>
        </div>

        <div id="system-demos" className="card">
          <h2 className="text-lg mb-4 flex items-center gap-2">
            <span className="text-2xl">🎥</span>
            System Demonstrations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <VideoPlayer
              src="/media/队形变化.mp4"
              poster="/2.png"
              title="Formation Change"
              caption="Demonstration of UAV swarm formation adaptation during search operations."
            />
            <VideoPlayer
              src="/media/检测标志.mp4"
              poster="/2.png"
              title="Marker Detection"
              caption="Visual detection of artificial markers (AprilTag/ArUco) by UAV swarm."
            />
            <VideoPlayer
              src="/media/巡航模式.mp4"
              poster="/2.png"
              title="Patrol Mode"
              caption="Coordinated area coverage and patrol behavior of the UAV swarm system."
            />
          </div>
        </div>
      </section>
    </>
  );
}
