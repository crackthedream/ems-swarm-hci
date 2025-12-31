"use client";

import { forwardRef, useImperativeHandle, useState } from 'react';
import { getAssetPath } from '../utils/path';

export default forwardRef(function InteractiveFigure({ src, alt, caption, regions = [] }, ref) {
  const [active, setActive] = useState(null);

  useImperativeHandle(ref, () => ({
    highlight(id) {
      setActive(id || null);
    }
  }));

  return (
    <figure className="mb-6">
      <div className="relative overflow-hidden rounded-lg shadow-md" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
        <img src={getAssetPath(src)} alt={alt} className="figure-img" loading="lazy" />

        {regions.map((r) => (
          <div
            key={r.id}
            className={`absolute pointer-events-none transition-opacity duration-200 ${active === r.id ? 'opacity-90' : 'opacity-0'}`}
            style={{
              left: `${r.left}%`,
              top: `${r.top}%`,
              width: `${r.width}%`,
              height: `${r.height}%`,
              background: 'rgba(31,111,235,0.18)',
              border: active === r.id ? '2px solid rgba(31,111,235,0.9)' : '1px solid rgba(31,111,235,0.45)',
              borderRadius: '8px',
            }}
          />
        ))}
      </div>
      {caption && <figcaption className="figure-caption">{caption}</figcaption>}
    </figure>
  );
});
