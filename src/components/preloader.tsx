'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import { PRELOADER_LAYERS } from '@/data/preloader-layers';
import { PRELOADER_DONE_EVENT } from '@/lib/reveal';

const MESSAGES = [
  'FIRING UP THE GRILL...',
  'SMASHING THE PATTY...',
  'TOASTING THE BUNS...',
  'STACKING IT UP...',
  'ALMOST READY...',
];

const LAYER_START = 0.2;
const LAYER_STAGGER = 0.25;
const LAYER_DURATION = 0.4;
const DOT_START = 1.7;
const DOT_STAGGER = 0.055;
const DOT_DURATION = 0.4;
const WOBBLE_AT = 2.7;
const BAR_DURATION = 3.5;
const LEAVE_AT = 3.5;
const EXIT_DURATION = 0.55;
const FALLBACK_AT = LEAVE_AT + EXIT_DURATION + 1.5;

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
  const [phase, setPhase] = useState<'loading' | 'done'>('loading');
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const msgRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    console.log('[Preloader] Mounted, isMobile:', isMobile);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    console.log('[Preloader] prefersReducedMotion:', prefersReducedMotion);

    if (prefersReducedMotion) {
      console.log('[Preloader] Reduced motion active, bypassing');
      document.body.style.overflow = '';
      window.dispatchEvent(new Event(PRELOADER_DONE_EVENT));
      // Defer state update to avoid synchronous setState in effect
      setTimeout(() => setPhase('done'), 0);
      return;
    }

    document.body.style.overflow = 'hidden';

    const updateMsg = (idx: number) => {
      if (msgRef.current) {
        msgRef.current.textContent = MESSAGES[idx];
      }
    };

    const dispatchDone = () => {
      console.log('[Preloader] Dispatching done event');
      window.dispatchEvent(new Event(PRELOADER_DONE_EVENT));
    };

    const finish = () => {
      console.log('[Preloader] Finish triggered');
      document.body.style.overflow = '';
      dispatchDone();
      setPhase('done');
    };

    gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: finish,
        onUpdate: () => {
          const pct = Math.round(tl.progress() * 100);
          setProgress(pct);
        },
      });
      timelineRef.current = tl;

      // Frame-accurate synchronized text rotation
      tl.call(() => updateMsg(0), [], 0);
      tl.call(() => updateMsg(1), [], 0.6);
      tl.call(() => updateMsg(2), [], 1.4);
      tl.call(() => updateMsg(3), [], 2.2);
      tl.call(() => updateMsg(4), [], 3.0);

      // Smooth layer stagger - simplified on mobile
      if (!isMobile) {
        tl.fromTo(
          '.hb-pre-layer',
          { opacity: 0, yPercent: 55, scale: 0.75 },
          {
            opacity: 1,
            yPercent: 0,
            scale: 1,
            duration: LAYER_DURATION,
            stagger: LAYER_STAGGER,
            transformOrigin: '50% 100%',
            ease: 'back.out(1.2)',
          },
          LAYER_START,
        );
      } else {
        // Mobile: ensure layers start hidden, then instant reveal
        tl.set('.hb-pre-layer', { opacity: 0, yPercent: 0, scale: 1 }, 0);
        tl.set('.hb-pre-layer', { opacity: 1, yPercent: 0, scale: 1 }, LAYER_START);
      }

      // Dots burst - simplified on mobile
      if (!isMobile) {
        tl.fromTo(
          '.hb-pre-dot',
          { xPercent: -50, yPercent: -50, x: 0, y: 0, scale: 0, opacity: 0 },
          {
            xPercent: -50,
            yPercent: -50,
            x: (i) => DOTS[i].dx,
            y: (i) => DOTS[i].dy,
            scale: 1,
            opacity: 1,
            duration: DOT_DURATION,
            stagger: DOT_STAGGER,
            ease: 'back.out(2.2)',
          },
          DOT_START,
        );
      } else {
        // Mobile: ensure dots start hidden, then instant reveal
        tl.set('.hb-pre-dot', { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 }, 0);
        tl.set('.hb-pre-dot', { xPercent: -50, yPercent: -50, scale: 1, opacity: 1 }, DOT_START);
      }

      // Progress bar fill - match LEAVE_AT exactly
      tl.fromTo(
        '.hb-pre-bar-fill',
        { width: '0%' },
        { width: '100%', duration: BAR_DURATION, ease: 'power1.inOut' },
        0,
      );

      // Playful wobble - skip on mobile
      if (!isMobile) {
        const wobble = { ease: 'power1.inOut', transformOrigin: '50% 100%' };
        tl.to('.hb-pre-burger', { rotate: -4, duration: 0.16, ...wobble }, WOBBLE_AT);
        tl.to('.hb-pre-burger', { rotate: 3, duration: 0.18, ...wobble }, '+=0.02');
        tl.to('.hb-pre-burger', { rotate: -1.5, duration: 0.14, ...wobble }, '+=0.02');
        tl.to('.hb-pre-burger', { rotate: 0, duration: 0.16, ...wobble }, '+=0.02');
      }

      // Exit slide up & fade out
      tl.add(() => {
        dispatchDone();
        if (rootRef.current) {
          rootRef.current.style.pointerEvents = 'none';
        }
      }, LEAVE_AT);

      tl.to(
        rootRef.current,
        { yPercent: -100, opacity: 0, duration: EXIT_DURATION, ease: 'power3.inOut' },
        LEAVE_AT,
      );
    }, rootRef);

    const fallbackTimer = window.setTimeout(() => {
      console.log('[Preloader] Safety fallback timer fired');
      finish();
    }, FALLBACK_AT * 1000);

    return () => {
      console.log('[Preloader] Cleanup');
      window.clearTimeout(fallbackTimer);
    };
  }, [isMobile]);

  if (phase === 'done') return null;

  return (
    <div
      ref={rootRef}
      className="hb-preloader"
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
      <p ref={msgRef} className="hb-pre-msg" aria-live="polite">
        {MESSAGES[0]}
      </p>
      <div
        className="hb-pre-bar"
        role="progressbar"
        aria-label="Loading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <div className="hb-pre-bar-fill" />
      </div>
    </div>
  );
}
