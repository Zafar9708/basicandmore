import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Basic and More Inc - General Trading & Food',
  description:
    'Basic and More Inc provides high-quality general trading and food distribution services, delivering trusted products and exceptional service worldwide.',
  keywords:
    'Basic and More Inc, general trading, food trading, import export, global trade solutions, food distribution',
  robots: 'index, follow',
  openGraph: {
    title: 'Basic and More Inc - General Trading & Food',
    description:
      'Expert solutions in general trading and food import/export services for businesses of all sizes.',
    url: 'https://basicandmore.com',
    siteName: 'Basic and More Inc',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hide-scrollbar">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Basic and More Inc',
              url: 'https://basicandmore.com',
              logo: 'https://basicandmore.com/logo.png',
              description:
                'Basic and More Inc specializes in general trading and food import/export, offering reliable products and services globally.',
              sameAs: [
                'https://www.facebook.com/basicandmore',
                'https://www.linkedin.com/company/basicandmore'
              ]
            }),
          }}
        />
      </head>
      <body className="hide-scrollbar">
        <Navbar />
        <main className="min-h-screen full-width-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
