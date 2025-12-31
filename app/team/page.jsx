"use client";

import { getAssetPath } from '../../utils/path';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'ZhaoYiXi',
      role: 'Presentation & Reporting Design, Unity Environment Setup',
      description: 'Responsible for presentation design, reporting materials, and Unity background environment construction for the simulation platform.',
      icon: '🎨'
    },
    {
      name: 'LiHouTian',
      role: 'UAV Swarm Logic & Detection Algorithms',
      description: 'Focuses on UAV swarm coordination logic design, target detection algorithms, and functional system development.',
      icon: '🚁'
    },
    {
      name: 'LuoYuHong',
      role: 'UAV Swarm Logic & Detection Algorithms',
      description: 'Works on UAV swarm behavior logic, detection mechanisms, and related functional design for coordinated search operations.',
      icon: '🔍'
    },
    {
      name: 'SunWei',
      role: 'EMS System Integration & Unity Connection',
      description: 'Handles EMS system integration, Unity system connection, and contributes to overall system architecture design.',
      icon: '⚡'
    }
  ];

  return (
    <>
      <h1 className="text-2xl mb-4">Team</h1>
      <p className="mb-6 text-body">A multidisciplinary student team working on system design, interaction, and experimental evaluation.</p>

      <section className="grid gap-6">
        <div className="card">
          <h2 className="text-lg mb-6 flex items-center gap-2">
            <span className="text-2xl">👥</span>
            Team Members
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-5 text-body">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name} 
                  className={`pb-5 ${index < teamMembers.length - 1 ? 'border-b border-slate-200 dark:border-slate-700' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{member.icon}</span>
                    <div className="flex-1">
                      <strong className="text-lg block mb-1">{member.name}</strong>
                      <div className="text-sm mt-1 text-slate-600 dark:text-slate-400 font-medium">{member.role}</div>
                      <div className="text-sm mt-2 leading-relaxed">{member.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <img src={getAssetPath("/7.png")} alt="Team working" className="figure-img" loading="lazy" decoding="async" style={{objectPosition: 'center'}} />
              <div className="figure-caption">Team in simulation lab — collaborative prototyping and user studies.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
