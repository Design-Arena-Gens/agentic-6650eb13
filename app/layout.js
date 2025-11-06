export const metadata = {
  title: 'डेटा फॉर्म - Data Form',
  description: 'एक सरल डेटा फॉर्म वेबसाइट',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
