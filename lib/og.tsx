import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card: dark site header color, green-to-blue accent, big title. */
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
      <div
        style={{
          display: 'flex',
          height: 12,
          width: 220,
          borderRadius: 6,
          backgroundImage: 'linear-gradient(90deg, #4ade80, #3b82f6)',
        }}
      />
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
