import { ImageResponse } from 'next/og';
import { getServiceLocation, getAllServiceLocationParams } from '@/lib/service-location-data';

export const alt = 'Professional Wood Interiors — Custom Cabinetry, St. Louis';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return getAllServiceLocationParams().map((p) => ({
    city: p.city,
    service: p.service,
  }));
}

export default async function Image(props: {
  params: Promise<{ city: string; service: string }>;
}) {
  const params = await props.params;
  const entry = getServiceLocation(params.city, params.service);

  const serviceName = entry?.service ?? 'Custom Cabinetry';
  const city = entry?.city ?? 'St. Louis';
  const stateAbbr = entry?.stateAbbr ?? 'MO';

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
          Professional Wood Interiors
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 78,
              lineHeight: 1.05,
              fontWeight: 500,
              maxWidth: 1050,
              letterSpacing: '-0.01em',
            }}
          >
            {serviceName}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              lineHeight: 1.05,
              fontStyle: 'italic',
              color: '#B58B4B',
            }}
          >
            in {city}, {stateAbbr}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              color: 'rgba(251, 247, 240, 0.85)',
              maxWidth: 1000,
              marginTop: 12,
            }}
          >
            Handcrafted custom cabinetry — family-owned since 1985
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
              display: 'flex',
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
