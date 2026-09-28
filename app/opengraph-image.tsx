import { ImageResponse } from 'next/og'

export const alt = 'Julius Tech Hub — Full-Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          background: 'linear-gradient(135deg, #050609 0%, #0a1224 60%, #0d1c3f 100%)',
          color: '#f5f5f7',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #3FF0FF, #2FA8FF, #2F6FE8)',
              display: 'flex',
            }}
          />
          <div style={{ fontSize: 32, fontWeight: 600 }}>Julius Tech Hub</div>
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
          Building Digital Products That Drive Business Growth
        </div>
        <div style={{ fontSize: 28, color: '#a1a1aa', marginTop: 28, maxWidth: 780 }}>
          Full-stack web apps, MVPs, and digital products for startups and businesses.
        </div>
      </div>
    ),
    { ...size }
  )
}
