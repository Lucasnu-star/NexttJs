

import Navigation from "./components/Navigation";
import './globals.css'
import { Providers } from "./provider";


export default function RootLayout({ children }) {
  return (
    
    <html lang="en" >
      <head>
        <title>Myafyba</title>
      </head>
      <body>
      
      <Navigation/>
      <Providers>
      {children}
      </Providers>
      
     
      </body>
    </html>
    
  )
}
