


import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Box&Bag - Gloabl Trade Solutions',
  description: 'Box&Bag  provides comprehensive financial services including bookkeeping, tax preparation, financial consulting, and strategic business advisory.',
  keywords: 'Box&Bag, trading services, bookkeeping, tax preparation, financial consulting, business advisory',
  robots: 'index, follow',
  openGraph: {
    title: 'Box&Bag - Gloabl Trade Solutions',
    description: 'Expert Export/import services for businesses of all sizes',
    url: 'https://atlabb-accounting.com',
    siteName: 'Atlabb Accounting',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hide-scrollbar">
      <head>
        {/* Brand Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Atlabb Accounting",
              "url": "https://atlabb-accounting.com",
              "logo": "https://atlabb-accounting.com/logo.png",
              "description": "Professional accounting services for businesses",
              "sameAs": [
                "https://www.facebook.com/atlabb",
                "https://www.linkedin.com/company/atlabb"
              ]
            }),
          }}
        />
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

      </head>
      <body className="hide-scrollbar">
        <Navbar />
        <main className="min-h-screen full-width-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}