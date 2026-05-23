import { ImageResponse } from 'next/og';

export const alt = 'Professional Wood Interiors — Custom Cabinetry, St. Louis';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background:
            'linear-gradient(135deg, #2C1810 0%, #5B3A2A 55%, #23160F 100%)',
          color: '#FBF7F0',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 22,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#B58B4B',
          }}
        >
          <div style={{ width: 64, height: 2, background: '#B58B4B' }} />
          Established 1985
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 84,
              lineHeight: 1.05,
              fontWeight: 500,
              maxWidth: 980,
              letterSpacing: '-0.01em',
            }}
          >
            <div style={{ display: 'flex' }}>Custom Cabinetry,</div>
            <div
              style={{
                display: 'flex',
                fontStyle: 'italic',
                color: '#B58B4B',
              }}
            >
              built by hand.
            </div>
          </div>
          <div
            style={{
              fontSize: 32,
              color: 'rgba(251, 247, 240, 0.85)',
              maxWidth: 900,
            }}
          >
            Professional Wood Interiors — Chesterfield · Wildwood · Clayton · St. Louis
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 22,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              color: '#FBF7F0',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            www.prowoodinteriors.com
          </div>
          <div
            style={{
              padding: '14px 28px',
              background: '#7A1D1D',
              color: '#FBF7F0',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontSize: 20,
              borderRadius: 4,
            }}
          >
            (314) 437-9988
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
