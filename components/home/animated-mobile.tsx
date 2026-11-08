'use client';

import { useId, useState, type CSSProperties } from 'react';
import styles from './animated-mobile.module.css';

type Props = {
  /** Path to the base artwork (1280x1049 PNG). Put it in /public. */
  src?: string;
  /** Length of one full charge cycle, in seconds. */
  cycleSeconds?: number;
  /** Show the small Pause / Play button in the corner. */
  showToggle?: boolean;
  /** Start paused. */
  startPaused?: boolean;
  className?: string;
  alt?: string;
};

type Vars = CSSProperties & Record<`--${string}`, string | number>;
const v = (vars: Vars): Vars => vars;

/* ------------------------------------------------------------------ */
/* Geometry, all in the artwork's own 1280x1049 pixel space.           */
/* Paths/nodes were measured from the image's pixels.                  */
/* ------------------------------------------------------------------ */
const W = 1280;
const H = 1049;

/** Orange traces, source -> phone node. `hl` = head length in pathLength units. */
const TRACES: { d: string; hl: number }[] = [
  {
    d: 'M452 72 V183 H657 V242',
    hl: 6.93,
  },
  {
    d: 'M783 107 V242',
    hl: 19.26,
  },
  {
    d: 'M1010 52 V175 H899 V307 H870',
    hl: 6.58,
  },
  {
    d: 'M1111 329 H928 V426 H870',
    hl: 7.69,
  },
  {
    d: 'M1172 648 H964 V574 H870',
    hl: 6.91,
  },
  {
    d: 'M1031 878 V808 H811 V785',
    hl: 8.31,
  },
  {
    d: 'M733 905 V785',
    hl: 21.67,
  },
  {
    d: 'M521 889 V820 H652 V785',
    hl: 11.06,
  },
  {
    d: 'M321 528 H405 V574 H594',
    hl: 8.15,
  },
  {
    d: 'M292 437 H435 V402 H594',
    hl: 7.72,
  },
  {
    d: 'M490 465 H594 V464',
    hl: 24.76,
  },
];
const SOURCES: [number, number][] = [
  [452, 70],
  [783, 105],
  [1010, 51],
  [1111, 330],
  [1172, 648],
  [1031, 879],
  [733, 906],
  [521, 890],
  [319, 528],
  [290, 437],
  [488, 465],
];
const NODES: [number, number][] = [
  [657, 242],
  [784, 242],
  [869.5, 307],
  [594, 402],
  [869.5, 426.5],
  [594, 464],
  [594, 574],
  [869.5, 574],
  [732, 785],
  [811.5, 785],
  [651, 784],
];

/** Green data packets leaving the phone, and the idle wifi packet. */
const PACKETS: { d: string; hl: number }[] = [
  {
    d: 'M592 695 H237',
    hl: 7.89,
  },
  {
    d: 'M662 514 H908 V665 H946',
    hl: 6.44,
  },
];
const WIFI_PACKET: { d: string; hl: number } = {
  d: 'M372 231 H511 V283',
  hl: 11.52,
};

/** Phone outline (centre-line of the rounded rect) and the two comets around it. */
const OUT = { x: 596, y: 243, w: 270, h: 538.5, r: 27 };
const COMET_HL = 11.46;
const COMET_CW = 'M731 243 H839 A27 27 0 0 1 866 270 V754.5 A27 27 0 0 1 839 781.5 H731';
const COMET_CCW = 'M731 243 H623 A27 27 0 0 0 596 270 V754.5 A27 27 0 0 0 623 781.5 H731';

type RegionKey =
  'hot' | 'crush' | 'chev' | 'blue' | 'wifi' | 'gscan' | 'vscan' | 'dscan' | 'phoneflash';
type Region = {
  x: number;
  y: number;
  w: number;
  h: number;
  k: RegionKey[];
  v: Record<string, string>;
  clip?: [number, number, number];
};
/** Rectangles of the artwork that get an additive light boost. */
const REGIONS: Region[] = [
  {
    x: 408,
    y: 203,
    w: 30,
    h: 56,
    k: ['hot', 'chev'],
    v: {
      '--d': '0.00s',
    },
  },
  {
    x: 429,
    y: 203,
    w: 30,
    h: 56,
    k: ['hot', 'chev'],
    v: {
      '--d': '0.18s',
    },
  },
  {
    x: 450,
    y: 203,
    w: 30,
    h: 56,
    k: ['hot', 'chev'],
    v: {
      '--d': '0.36s',
    },
  },
  {
    x: 1100,
    y: 620,
    w: 30,
    h: 58,
    k: ['hot', 'chev'],
    v: {
      '--d': '0.00s',
    },
  },
  {
    x: 1080,
    y: 620,
    w: 30,
    h: 58,
    k: ['hot', 'chev'],
    v: {
      '--d': '0.18s',
    },
  },
  {
    x: 1060,
    y: 620,
    w: 30,
    h: 58,
    k: ['hot', 'chev'],
    v: {
      '--d': '0.36s',
    },
  },
  {
    x: 38,
    y: 648,
    w: 48,
    h: 100,
    k: ['hot', 'blue'],
    v: {
      '--d': '0s',
    },
  },
  {
    x: 68,
    y: 648,
    w: 50,
    h: 100,
    k: ['hot', 'blue'],
    v: {
      '--d': '0.35s',
    },
  },
  {
    x: 258,
    y: 503,
    w: 48,
    h: 52,
    k: ['hot', 'blue'],
    v: {
      '--d': '0.8s',
    },
  },
  {
    x: 466,
    y: 42,
    w: 40,
    h: 56,
    k: ['hot', 'blue'],
    v: {
      '--d': '1.1s',
    },
  },
  {
    x: 286,
    y: 160,
    w: 100,
    h: 140,
    k: ['hot', 'wifi'],
    v: {
      '--d': '0.00s',
    },
    clip: [372, 231, 36],
  },
  {
    x: 286,
    y: 160,
    w: 100,
    h: 140,
    k: ['hot', 'wifi'],
    v: {
      '--d': '0.28s',
    },
    clip: [372, 231, 60],
  },
  {
    x: 286,
    y: 160,
    w: 100,
    h: 140,
    k: ['hot', 'wifi'],
    v: {
      '--d': '0.56s',
    },
    clip: [372, 231, 84],
  },
  {
    x: 232,
    y: 338,
    w: 176,
    h: 80,
    k: ['crush', 'gscan'],
    v: {
      '--dur': '3.4s',
      '--d': '0s',
    },
  },
  {
    x: 273,
    y: 745,
    w: 134,
    h: 60,
    k: ['crush', 'gscan'],
    v: {
      '--dur': '2.8s',
      '--d': '1s',
    },
  },
  {
    x: 938,
    y: 105,
    w: 275,
    h: 745,
    k: ['crush', 'vscan'],
    v: {
      '--dur': '10s',
      '--d': '0s',
    },
  },
  {
    x: 660,
    y: 545,
    w: 190,
    h: 195,
    k: ['crush', 'vscan'],
    v: {
      '--dur': '6s',
      '--d': '0.8s',
    },
  },
  {
    x: 380,
    y: 280,
    w: 255,
    h: 220,
    k: ['crush', 'dscan'],
    v: {
      '--dur': '7s',
      '--d': '1.5s',
    },
  },
  {
    x: 540,
    y: 190,
    w: 390,
    h: 670,
    k: ['hot', 'phoneflash'],
    v: {},
  },
];

function orbit(
  cx: number,
  cy: number,
  r: number,
  stroke: string,
  t: number,
  dash: number,
  w = 3.2
) {
  const C = 2 * Math.PI * r;
  const p = C / Math.max(1, Math.round(C / 74)); // period that divides the circumference -> seamless
  return { cx, cy, r, stroke, t, dash, w, p };
}
const ORBITS = [
  orbit(517.5, 616.5, 101, '#ffffff', 9, 15),
  orbit(517.5, 616.5, 113, '#7fe9ff', 13, 10, 2.4),
  orbit(429.5, 884, 50, '#bfffd0', 7, 12),
  orbit(429.5, 884, 31, '#3dff6a', 5, 8, 2.6),
];
const RIPPLES = [
  { cx: 517.5, cy: 616.5, r: 124, stroke: '#6fe6ff', d: '0s' },
  { cx: 517.5, cy: 616.5, r: 79, stroke: '#ffe14a', d: '1.4s' },
  { cx: 429.5, cy: 884, r: 62, stroke: '#46e0ff', d: '.7s' },
  { cx: 429.5, cy: 884, r: 38.5, stroke: '#3dff6a', d: '2.1s' },
  { cx: 676, cy: 480, r: 26, stroke: '#58b8ff', d: '0s' },
  { cx: 783, cy: 105, r: 32, stroke: '#4cf0ff', d: '1.2s' },
];

function regionStyle(r: Region): Vars {
  const s: Vars = {
    left: `${((r.x / W) * 100).toFixed(3)}%`,
    top: `${((r.y / H) * 100).toFixed(3)}%`,
    width: `${((r.w / W) * 100).toFixed(3)}%`,
    height: `${((r.h / H) * 100).toFixed(3)}%`,
    backgroundSize: `${((W / r.w) * 100).toFixed(3)}% ${((H / r.h) * 100).toFixed(3)}%`,
    backgroundPosition: `${(W > r.w ? (r.x / (W - r.w)) * 100 : 0).toFixed(3)}% ${(
      (r.y / (H - r.h)) *
      100
    ).toFixed(3)}%`,
    ...r.v,
  };
  if (r.clip) {
    const [cx, cy, rad] = r.clip;
    const ref = Math.sqrt((r.w * r.w + r.h * r.h) / 2);
    s.clipPath = `circle(${((rad / ref) * 100).toFixed(2)}% at ${(((cx - r.x) / r.w) * 100).toFixed(2)}% ${(
      ((cy - r.y) / r.h) *
      100
    ).toFixed(2)}%)`;
  }
  return s;
}

export default function AnimatedMobile({
  src = '/images/web-dev-mobile.png',
  cycleSeconds = 9,
  showToggle = true,
  startPaused = false,
  className,
  alt = 'Animated illustration of a glowing smartphone showing a website, with orange power traces charging the phone, code columns, a succulent plant, and HTML, CSS, JS, PHP, XML and CMS labels',
}: Props) {
  const [paused, setPaused] = useState(startPaused);
  const uid = useId().replace(/:/g, '');
  const glow = `glow-${uid}`;
  const glowSoft = `glowSoft-${uid}`;
  const glowBig = `glowBig-${uid}`;

  const stageClass = [styles.stage, paused ? styles.paused : '', className ?? '']
    .filter(Boolean)
    .join(' ');
  const rect = { x: OUT.x, y: OUT.y, width: OUT.w, height: OUT.h, rx: OUT.r };
  const cometVars = v({ '--hl': COMET_HL, '--c0': COMET_HL + 0.5, '--c1': COMET_HL - 100 });

  return (
    <div
      className={stageClass}
      role="img"
      aria-label={alt}
      style={v({ '--img': `url(${src})`, '--T': `${cycleSeconds}s` })}
    >
      <div className={styles.layer} />
      <div className={`${styles.layer} ${styles.bloom}`} />
      <div className={`${styles.layer} ${styles.surge}`} />
      <div className={`${styles.layer} ${styles.crush} ${styles.scan}`} />

      {REGIONS.map((r, i) => (
        <div
          key={i}
          className={`${styles.reg} ${r.k.map((k) => styles[k]).join(' ')}`}
          style={regionStyle(r)}
        />
      ))}

      <svg className={styles.fx} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
        <defs>
          <filter id={glow} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={glowSoft} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={glowBig} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="11" />
          </filter>
        </defs>

        {/* idle ambience: wifi packet, ripples, orbiting dashes */}
        <g filter={`url(#${glow})`}>
          <path
            className={styles.wpk}
            pathLength={100}
            d={WIFI_PACKET.d}
            fill="none"
            stroke="#7dff8a"
            strokeWidth={3.2}
            strokeLinecap="round"
            style={v({
              '--hl': WIFI_PACKET.hl,
              '--h0': WIFI_PACKET.hl + 0.5,
              '--h1': WIFI_PACKET.hl - 100,
            })}
          />
          {RIPPLES.map((r, i) => (
            <circle
              key={i}
              className={styles.ripple}
              cx={r.cx}
              cy={r.cy}
              r={r.r}
              stroke={r.stroke}
              fill="none"
              style={v({ '--d': r.d })}
            />
          ))}
          {ORBITS.map((o, i) => (
            <circle
              key={i}
              className={styles.orbit}
              cx={o.cx}
              cy={o.cy}
              r={o.r}
              stroke={o.stroke}
              strokeWidth={o.w}
              fill="none"
              strokeDasharray={`${o.dash} ${(o.p - o.dash).toFixed(2)}`}
              style={v({ '--p': (-o.p).toFixed(2), '--t': `${o.t}s` })}
            />
          ))}
        </g>

        {/* the charge: every path is normalised to pathLength=100 and shares one timeline,
            so all of them reach the phone on the same frame regardless of length */}
        <g filter={`url(#${glow})`}>
          {TRACES.map((t, i) => (
            <g key={i}>
              <path
                className={styles.tfill}
                pathLength={100}
                d={t.d}
                stroke="#ffc247"
                strokeWidth={3}
                fill="none"
              />
              <path
                className={styles.thead}
                pathLength={100}
                d={t.d}
                stroke="#fff6d8"
                strokeWidth={5}
                strokeLinecap="round"
                fill="none"
                style={v({ '--hl': t.hl, '--h0': t.hl + 0.5, '--h1': t.hl - 100 })}
              />
            </g>
          ))}
        </g>

        {/* outline surge */}
        <rect
          className={styles.oBig}
          {...rect}
          fill="none"
          stroke="#ff9a1a"
          strokeWidth={12}
          filter={`url(#${glowBig})`}
        />
        <rect
          className={styles.oCore}
          {...rect}
          fill="none"
          stroke="#fff1a6"
          strokeWidth={4.5}
          filter={`url(#${glowSoft})`}
        />

        {/* comets round the outline, green packets out of the phone */}
        <g filter={`url(#${glow})`}>
          {[COMET_CW, COMET_CCW].map((d, i) => (
            <path
              key={i}
              className={styles.circ}
              pathLength={100}
              d={d}
              fill="none"
              stroke="#ffffff"
              strokeWidth={7}
              strokeLinecap="round"
              style={cometVars}
            />
          ))}
          {PACKETS.map((p, i) => (
            <path
              key={i}
              className={styles.pk}
              pathLength={100}
              d={p.d}
              fill="none"
              stroke="#6bff86"
              strokeWidth={3.6}
              strokeLinecap="round"
              style={v({ '--hl': p.hl, '--p0': p.hl + 0.5, '--p1': p.hl - 100 })}
            />
          ))}
        </g>

        <rect
          className={styles.shock}
          {...rect}
          fill="none"
          stroke="#ffc84a"
          strokeWidth={3}
          vectorEffect="non-scaling-stroke"
        />

        {/* pings at the sources, flashes at the phone nodes and at the ends of the data lines */}
        <g filter={`url(#${glow})`}>
          {SOURCES.map(([cx, cy], i) => (
            <circle
              key={`s${i}`}
              className={styles.ping}
              cx={cx}
              cy={cy}
              r={10}
              fill="none"
              stroke="#ffb627"
              strokeWidth={2.2}
            />
          ))}
          {NODES.map(([cx, cy], i) => (
            <circle key={`n${i}`} className={styles.nflash} cx={cx} cy={cy} r={8} fill="#fff4c0" />
          ))}
          <circle className={styles.nflash2} cx={731} cy={781.5} r={10} fill="#fffbe2" />
          {(
            [
              [237, 695],
              [946, 665],
            ] as const
          ).map(([cx, cy], i) => (
            <circle key={`e${i}`} className={styles.nflash3} cx={cx} cy={cy} r={8} fill="#b9ffc6" />
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
