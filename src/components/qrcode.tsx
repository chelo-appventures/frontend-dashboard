'use client'
import { useQRCode } from 'next-qrcode'
 
function AVQRCode({ text }: { text: string }) {
  const { SVG } = useQRCode()
 
  return (
    <SVG
      text={text}
      options={{
        margin: 2,
        width: 200,
        color: {
          dark: '#010101FF',
          light: '#FFFFFFFF',
        },
      }}
    />
  )
}
 
export default AVQRCode