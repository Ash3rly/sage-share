'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sage-50 to-sage-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sage-700">Sage Share</h1>
          <div className="space-x-4">
            <Link href="/auth/login" className="text-sage-600 hover:text-sage-700">
              Login
            </Link>
            <Link href="/auth/signup" className="bg-sage-600 text-white px-4 py-2 rounded-lg hover:bg-sage-700">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-sage-900 mb-6">
          The Next-Gen Fan Community Platform
        </h2>
        <p className="text-xl text-sage-700 mb-8 max-w-2xl mx-auto">
          Create, collaborate, and preserve fan wikis with advanced archival, moderation, and monetization tools.
        </p>
        <div className="space-x-4">
          <Link href="/auth/signup" className="bg-sage-600 text-white px-8 py-3 rounded-lg hover:bg-sage-700 inline-block">
            Get Started
          </Link>
          <Link href="/docs" className="border-2 border-sage-600 text-sage-600 px-8 py-3 rounded-lg hover:bg-sage-50 inline-block">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Preview */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-sage-900 mb-12 text-center">
            Powerful Features Coming Soon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-sage-200 rounded-lg">
              <h4 className="text-lg font-semibold text-sage-700 mb-2">📚 Wiki Creation</h4>
              <p className="text-sage-600">Create and manage fan wikis with collaborative editing and version control.</p>
            </div>
            <div className="p-6 border border-sage-200 rounded-lg">
              <h4 className="text-lg font-semibold text-sage-700 mb-2">🛡️ Smart Moderation</h4>
              <p className="text-sage-600">AI-powered tools to keep communities safe and respectful.</p>
            </div>
            <div className="p-6 border border-sage-200 rounded-lg">
              <h4 className="text-lg font-semibold text-sage-700 mb-2">🌍 Global Community</h4>
              <p className="text-sage-600">Connect with fans worldwide with real-time translation and cross-language support.</p>
            </div>
            <div className="p-6 border border-sage-200 rounded-lg">
              <h4 className="text-lg font-semibold text-sage-700 mb-2">💰 Fair Monetization</h4>
              <p className="text-sage-600">Monetize fan content with creator and IP owner consent.</p>
            </div>
            <div className="p-6 border border-sage-200 rounded-lg">
              <h4 className="text-lg font-semibold text-sage-700 mb-2">📦 Archival Tools</h4>
              <p className="text-sage-600">Preserve fan content and history for future generations.</p>
            </div>
            <div className="p-6 border border-sage-200 rounded-lg">
              <h4 className="text-lg font-semibold text-sage-700 mb-2">🎨 Collaboration Hubs</h4>
              <p className="text-sage-600">Real-time co-creation tools for writers and artists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Sage Share. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
