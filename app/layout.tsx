import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sage Share - Fan Wiki & Community Platform',
  description: 'A next-generation fan wiki and community platform with advanced features for creators and fans.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sage-50 text-sage-900">
        {children}
      </body>
    </html>
  );
}
