'use client';

import { useEffect, useState } from 'react';

import { PRELOADER_LAYERS } from '@/data/preloader-layers';
import { PRELOADER_DONE_EVENT } from '@/lib/reveal';

const MESSAGES = [
  'FIRING UP THE GRILL...',
  'SMASHING THE PATTY...',
  'TOASTING THE BUNS...',
  'STACKING IT UP...',
  'ALMOST READY...',
];

const DOTS = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2;
  const radius = 64 + (i % 3) * 26;
  const colors = ['#ffd750', '#fff', '#60A905'];
  const sizes = [8, 12];
  return {
    color: colors[i % colors.length],
    size: sizes[i % sizes.length],
    dx: Math.cos(angle) * radius,
    dy: Math.sin(angle) * radius * 0.6,
  };
});

export function Preloader() {
  const [phase, setPhase] = useState<'loading' | 'leaving' | 'done'>('loading');
  const [message, setMessage] = useState(0);
  const [barReady, setBarReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const done = window.setTimeout(() => {
        document.body.style.overflow = '';
        setPhase('done');
        window.dispatchEvent(new Event(PRELOADER_DONE_EVENT));
      }, 0);
      return () => window.clearTimeout(done);
    }

    document.body.style.overflow = 'hidden';
    const barFrame = requestAnimationFrame(() => setBarReady(true));

    const messageTimer = window.setInterval(
      () => setMessage((m) => (m + 1) % MESSAGES.length),
      1000,
    );
    const leaveTimer = window.setTimeout(() => {
      window.clearInterval(messageTimer);
      setPhase('leaving');
      window.dispatchEvent(new Event(PRELOADER_DONE_EVENT));
    }, 6000);
    const doneTimer = window.setTimeout(() => {
      document.body.style.overflow = '';
      setPhase('done');
    }, 6000 + 700);

    return () => {
      cancelAnimationFrame(barFrame);
      window.clearInterval(messageTimer);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`hb-preloader${phase === 'leaving' ? ' hb-pre-exit' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Page loading"
      data-testid="preloader"
    >
      <div className="hb-pre-burger" aria-hidden="true">
        {DOTS.map((dot, i) => (
          <span
            key={i}
            className="hb-pre-dot"
            style={{
              background: dot.color,
              width: dot.size,
              height: dot.size,
              animationDelay: `${3.7 + i * 0.07}s`,
              ['--dx' as string]: `${dot.dx}px`,
              ['--dy' as string]: `${dot.dy}px`,
            }}
          />
        ))}
        {PRELOADER_LAYERS.map((layer, i) => (
          <div
            key={i}
            className="hb-pre-layer"
            style={{
              bottom: layer.bottom,
              height: layer.height,
              width: layer.width,
              zIndex: layer.z,
              animationDelay: `${0.15 + i * 0.8}s`,
            }}
          >
            <svg viewBox={layer.viewBox} preserveAspectRatio="none">
              {layer.paths.map((path, j) => (
                <path
                  key={j}
                  d={path.d}
                  fill={path.fill}
                  stroke={path.stroke}
                  strokeWidth={path.strokeWidth}
                  opacity={path.opacity}
                />
              ))}
            </svg>
          </div>
        ))}
      </div>
      <p className="hb-pre-msg" aria-live="polite">
        {MESSAGES[message]}
      </p>
      <div
        className="hb-pre-bar"
        role="progressbar"
        aria-label="Loading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={barReady ? 100 : 0}
      >
        <div className="hb-pre-bar-fill" style={{ width: barReady ? '100%' : '0%' }} />
      </div>
    </div>
  );
}
