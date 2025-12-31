"use client";

import InteractiveFigure from '../../components/InteractiveFigure';
import MiniToc from '../../components/MiniToc';
import Breadcrumb from '../../components/Breadcrumb';
import { useRef } from 'react';

export default function InteractionPage() {
  const figRef = useRef();
  const regions = [
    { id: 'left-arm', left: 8, top: 22, width: 25, height: 60, label: 'Left arm' },
    { id: 'right-arm', left: 66, top: 22, width: 25, height: 60, label: 'Right arm' },
    { id: 'center', left: 36, top: 30, width: 28, height: 40, label: 'Central/bilateral' },
  ];

  const sections = [
    { id: 'interaction-title', label: 'Overview' },
    { id: 'design-rationale', label: 'Design Rationale' },
    { id: 'directional-mapping', label: 'Directional Mapping' },
    { id: 'interaction-workflow', label: 'Interaction Workflow' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Interaction', href: '/interaction' }]} />
      <h1 id="interaction-title" className="text-2xl mb-4">Interaction — EMS-based Human–Swarm Interaction</h1>
      <p className="mb-6 text-body">This project explores EMS as a non-visual feedback modality that complements existing interfaces. EMS is intended for low-complexity, intuitive mapping to spatial cues to reduce visual load.</p>

      <MiniToc sections={sections} />

      <section className="grid gap-6">
        <div id="design-rationale" className="card">
          <h2 className="text-lg mb-2">Design Rationale</h2>
          <ul className="list-disc ml-5 text-body">
            <li><strong>Simplicity:</strong> Avoid complex or symbolic EMS patterns.</li>
            <li><strong>Intuitiveness:</strong> Map feedback to spatial or bodily metaphors.</li>
            <li><strong>Low cognitive load:</strong> Limit frequency and number of feedback states; event-driven activations.</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div id="directional-mapping" className="card">
            <h2 className="text-lg mb-2">Directional Mapping</h2>
            <p className="text-body">EMS conveys coarse directional information. Examples: detections from the left side trigger <span className="underline cursor-pointer" onMouseEnter={() => figRef.current?.highlight('left-arm')} onMouseLeave={() => figRef.current?.highlight(null)}>left-arm stimulation</span>; right-side detections trigger <span className="underline cursor-pointer" onMouseEnter={() => figRef.current?.highlight('right-arm')} onMouseLeave={() => figRef.current?.highlight(null)}>right-arm stimulation</span>; frontal detections may be indicated via <span className="underline cursor-pointer" onMouseEnter={() => figRef.current?.highlight('center')} onMouseLeave={() => figRef.current?.highlight(null)}>bilateral stimulation</span>.</p>
          </div>

          <div>
            <InteractiveFigure ref={figRef} src="/3.png" alt="EMS mapping" regions={regions} caption="Figure 3. EMS mapping showing body regions assigned to directional cues." />
          </div>

          <div id="interaction-workflow" className="md:col-span-2 card">
            <h2 className="text-lg mb-2">Interaction Workflow</h2>
            <p className="text-body">EMS serves as an event-driven directional cue that complements visual inspection and manual control. The system sends discrete feedback only on new or salient detections to reduce habituation.</p>
            <InteractiveFigure src="/4.png" alt="Interaction workflow" caption="Figure 4. Interaction workflow — detection to EMS feedback loop." />
          </div>
        </div>
      </section>
    </>
  );
}
