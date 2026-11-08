'use client';

import { useId, useState, type CSSProperties } from 'react';
import styles from './animated-laptop.module.css';

type Props = {
  /** Path to the base artwork (1280x1104 PNG). Put it in /public. */
  src?: string;
  /** Show the small Pause / Play button in the corner. */
  showToggle?: boolean;
  /** Start paused. */
  startPaused?: boolean;
  className?: string;
  alt?: string;
};

type Vars = CSSProperties & Record<`--${string}`, string>;
const v = (vars: Record<`--${string}`, string>): Vars => vars as Vars;

const RIPPLES = [
  { cx: 300, cy: 393, rx: 72, ry: 36, stroke: '#3dff9a', d: '0s' },
  { cx: 221, cy: 525, rx: 38, ry: 19, stroke: '#3dff9a', d: '1.1s' },
  { cx: 990, cy: 543, rx: 44, ry: 26, stroke: '#b66bff', d: '.6s' },
  { cx: 1005, cy: 870, rx: 40, ry: 24, stroke: '#ff4a4a', d: '1.8s' },
  { cx: 1073, cy: 833, rx: 28, ry: 17, stroke: '#3be8ff', d: '.3s' },
  { cx: 943, cy: 908, rx: 28, ry: 17, stroke: '#3be8ff', d: '1.4s' },
  { cx: 878, cy: 945, rx: 28, ry: 17, stroke: '#3be8ff', d: '2.2s' },
  { cx: 862, cy: 497, rx: 20, ry: 12, stroke: '#ff4a4a', d: '.9s' },
];

const ORBITS = [
  { cx: 755, cy: 662, rx: 27, ry: 16, stroke: '#3be8ff', t: '3.2s' },
  { cx: 802, cy: 633, rx: 27, ry: 16, stroke: '#ff3da8', t: '4.1s' },
  { cx: 850, cy: 603, rx: 27, ry: 16, stroke: '#7dff5c', t: '3.7s' },
  { cx: 990, cy: 543, rx: 38, ry: 22, stroke: '#ffffff', t: '5s' },
  { cx: 1005, cy: 870, rx: 34, ry: 20, stroke: '#ffd34a', t: '3.4s' },
  { cx: 220, cy: 525, rx: 30, ry: 15, stroke: '#9dffcc', t: '4.4s' },
];

const VLINES = [
  { x: 352, y1: 665, y2: 432, stroke: '#6fa8ff', d: '0s' },
  { x: 774, y1: 822, y2: 760, stroke: '#6fa8ff', d: '-.8s' },
  { x: 912, y1: 452, y2: 388, stroke: '#9fc4ff', d: '-1.4s' },
];

export default function AnimatedLaptop({
  src = '/images/web-dev-laptop.png',
  showToggle = true,
  startPaused = false,
  className,
  alt = 'Animated isometric illustration of a glowing laptop with code on its screen, surrounded by data panels, charts and circuit traces',
}: Props) {
  const [paused, setPaused] = useState(startPaused);
  const glowId = `glow-${useId().replace(/:/g, '')}`;

  const stageClass = [styles.stage, paused ? styles.paused : '', className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={stageClass} role="img" aria-label={alt} style={v({ '--img': `url(${src})` })}>
      <div className={styles.layer} />
      <div className={`${styles.layer} ${styles.bloom}`} />
      <div className={`${styles.layer} ${styles.crush} ${styles.scan}`} />
      <div className={`${styles.layer} ${styles.crush} ${styles.code}`} />
      <div className={`${styles.layer} ${styles.crush} ${styles.wifi} ${styles.wifi1}`} />
      <div className={`${styles.layer} ${styles.crush} ${styles.wifi} ${styles.wifi2}`} />

      <svg className={styles.fx} viewBox="0 0 1280 1104" aria-hidden="true">
        <defs>
          <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter={`url(#${glowId})`}>
          {RIPPLES.map((r, i) => (
            <ellipse
              key={i}
              className={styles.ripple}
              cx={r.cx}
              cy={r.cy}
              rx={r.rx}
              ry={r.ry}
              stroke={r.stroke}
              style={v({ '--d': r.d })}
            />
          ))}
        </g>

        <g filter={`url(#${glowId})`}>
          {ORBITS.map((o, i) => (
            <ellipse
              key={i}
              className={styles.orbit}
              cx={o.cx}
              cy={o.cy}
              rx={o.rx}
              ry={o.ry}
              stroke={o.stroke}
              style={v({ '--t': o.t })}
            />
          ))}
        </g>

        <g filter={`url(#${glowId})`}>
          <path
            className={styles.run}
            pathLength={1200}
            d="M495 520 L225 677 L690 945 L995 768"
            stroke="#ffffff"
            strokeWidth={3.5}
          />
          <path
            className={styles.run2}
            pathLength={1200}
            d="M995 768 L690 945 L225 677 L495 520"
            stroke="#ff5ad0"
            strokeWidth={3}
          />
          {VLINES.map((l, i) => (
            <line
              key={i}
              className={styles.vrun}
              pathLength={100}
              x1={l.x}
              y1={l.y1}
              x2={l.x}
              y2={l.y2}
              stroke={l.stroke}
              strokeWidth={3}
              style={v({ '--d': l.d })}
            />
          ))}
        </g>
      </svg>

      {showToggle && (
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={paused}
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? 'Play animation' : 'Pause animation'}
        </button>
      )}
    </div>
  );
}
