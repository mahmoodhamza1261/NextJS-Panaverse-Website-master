import Header from "@/components/layout/Header"
import "./globals.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body>
        <Header/> 
        {children}
        </body>
    </html>
  )
}
