export default function PrintPage() {
  return (
    <html lang="en">
      <body>
        <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
          <h1>EMS-based Directional Feedback for UAV Swarm Search — Printable View</h1>

          <section>
            <h2>Abstract</h2>
            <p>In complex outdoor search scenarios, operators controlling UAV swarms often face high cognitive load. This printable view summarizes the project: EMS as a supplementary, non-visual feedback channel conveying coarse directional information to reduce visual load.</p>
          </section>

          <section>
            <h2>System Overview</h2>
            <p>The system integrates UAV swarm perception, aggregation, and EMS encoding. Figures and diagrams omitted for printable clarity.</p>
          </section>

          <section>
            <h2>Interaction</h2>
            <p>EMS maps detections to body-region cues, intended to be low-frequency and intuitive.</p>
          </section>

          <section>
            <h2>Experiment</h2>
            <p>Simulation-based evaluation comparing visual-only vs visual+EMS conditions with task and workload metrics.</p>
          </section>

          <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#666' }}>© Project — Printable research supplement</footer>
        </main>
      </body>
    </html>
  );
}
