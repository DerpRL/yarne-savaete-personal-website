import '@/styles/globals.css'
import React from "react";
import { leagueSpartan } from "@/utils/fonts";
import { Metadata } from "next";
import { DefaultNavigation } from "@/components/DefaultNavigation";
import { DefaultFooter } from "@/components/DefaultFooter";


export const metadata: Metadata = {
    metadataBase: null,
    title: { default: '', template: "%s | Yarne Savaete | Software Engineer" },
    description: `Meet Yarne Savaete, front-end developer with a software engineering background. Proficient in HTML, CSS, and JavaScript. Impressive portfolio showcasing visually appealing and responsive UI designs. Strong programming and problem-solving skills. Collaborate on your web development project today.`,
    applicationName: 'Yarne Savaete | Software Engineer',
    authors: { name: 'Yarne Savaete' },
    generator: 'Next.js',
    keywords: [ 'Yarne', 'Savaete', 'Software Engineer', 'Front-end', 'Web', 'Web Developer', 'JavaScript', 'Frameworks', 'Next.js', 'React', 'HTML', 'CSS', 'Tailwind CSS', 'Portfolio', 'Blog', 'Projects', 'Personal', 'Resume', 'CV' ],
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#121212" },
        { media: "(prefers-color-scheme: light)", color: "#ffffff" }
    ],
    viewport: { width: "device-width", initialScale: 1 },
    creator: 'Yarne Savaete',
    publisher: 'DigitalOcean',
    robots: { index: true, follow: true },
    openGraph: {
        type: "website",
        url: "https://yarnesavaete.com",
        title: "Yarne Savaete | Software Engineer",
        description: `Meet Yarne Savaete, front-end developer with a software engineering background. Proficient in HTML, CSS, and JavaScript. Impressive portfolio showcasing visually appealing and responsive UI designs. Strong programming and problem-solving skills. Collaborate on your web development project today.`,
        siteName: "Yarne Savaete | Software Engineer",
    },
    appleWebApp: { capable: true, title: "Yarne Savaete | Software Engineer", statusBarStyle: "default" },
    formatDetection: { telephone: false },
    twitter: { card: "summary_large_image", site: "https://yarnesavaete.com", creator: "@yarne_savaete" },
    icons: { icon: "/assets/images/web-icons/Web_Icon.png", apple: "/assets/images/web-icons/Web_Icon.png" }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang='en' className={'scroll-smooth'}>
          <body className={`${leagueSpartan.className}`}>
              <DefaultNavigation/>
              <main className={'w-11/12 sm:w-10-12 md:w-9/12 mx-auto '}>
                  { children }
              </main>
              <DefaultFooter/>
          </body>
      </html>
  )
}
