'use client'
import { useQRCode } from 'next-qrcode'

function AVQRCode({ text }: { text: string }) {
  const { SVG } = useQRCode()

  return (
    <SVG
      text={text}
      options={{
        margin: 0,
        width: 232,
        color: {
          dark: '#010101FF',
          light: '#FFFFFFFF',
        },
      }}
    />
  )
}

export default AVQRCode