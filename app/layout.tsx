import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { HelpNovaChatbot } from "@/components/helpnova-chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EcoNova - AI-Powered E-Waste Management",
  description:
    "Transform e-waste into cash with India's leading AI-powered e-waste management platform. Doorstep pickup, instant payments, and certified disposal.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <HelpNovaChatbot />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Scroll to top when navigating to new pages
              if (typeof window !== 'undefined') {
                window.addEventListener('beforeunload', function() {
                  window.scrollTo(0, 0);
                });
                
                // Handle client-side navigation
                const originalPushState = history.pushState;
                const originalReplaceState = history.replaceState;
                
                history.pushState = function() {
                  originalPushState.apply(history, arguments);
                  setTimeout(() => window.scrollTo(0, 0), 0);
                };
                
                history.replaceState = function() {
                  originalReplaceState.apply(history, arguments);
                  setTimeout(() => window.scrollTo(0, 0), 0);
                };
                
                // Handle popstate (back/forward buttons)
                window.addEventListener('popstate', function() {
                  setTimeout(() => window.scrollTo(0, 0), 0);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
