import { ImageResponse } from 'next/og';

// components/logo.tsx as a static SVG (fixed gradient ids, no hooks) for Satori.
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><linearGradient id="a" x1="113.78" y1="-12.79" x2="113.78" y2="164.96" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#38e89c"/><stop offset="1" stop-color="#38bce8"/></linearGradient><linearGradient id="b" x1="86.22" y1="37.21" x2="86.22" y2="214.96" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#38e89c"/><stop offset="1" stop-color="#38bce8"/></linearGradient></defs><path d="M126.424 30a17.731 17.731 0 0115.624 9.226 17.23 17.23 0 01-.88 17.931L78.379 150l109.497-.002A98.427 98.427 0 00200 116.895l-44.738 22.05a10.223 10.223 0 01-13.61-4.473 9.933 9.933 0 014.537-13.416L188.91 100l-42.721-21.056a9.933 9.933 0 01-4.538-13.416 10.21 10.21 0 0113.61-4.472L200 83.106C191.854 35.923 150.186 0 100 0a101.86 101.86 0 00-72.44 30z" fill="url(#a)"/><path d="M73.577 170a17.731 17.731 0 01-15.624-9.226 17.23 17.23 0 01.88-17.931L121.623 50H12.128A98.43 98.43 0 000 83.106l44.74-22.05a10.213 10.213 0 0113.61 4.472 9.933 9.933 0 01-4.537 13.416L11.09 100l42.722 21.056a9.933 9.933 0 014.537 13.416 10.223 10.223 0 01-13.61 4.472L0 116.894C8.145 164.076 49.814 200 100 200a101.859 101.859 0 0072.441-30.002z" fill="url(#b)"/></svg>`;
const LOGO_SRC = `data:image/svg+xml;base64,${Buffer.from(LOGO_SVG).toString('base64')}`;

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card: dark site header color, the logo, big title. */
export function ogImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: '#111827',
        color: '#ffffff',
      }}
    >
      <img src={LOGO_SRC} width={96} height={96} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', fontSize: 32, color: '#4ade80', fontWeight: 600 }}>
          {eyebrow}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 60 ? 60 : 76,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -1.5,
          }}
        >
          {title}
        </div>
      </div>
      <div style={{ display: 'flex', fontSize: 30, color: '#d1d5db' }}>
        Zach Scroggins · zachscroggins.com
      </div>
    </div>,
    ogSize
  );
}
