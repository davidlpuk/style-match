'use client'

export default function Home() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleGetStarted = () => {
    alert('Authentication coming soon! Firebase Auth will be integrated in the next phase.')
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Style Match
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Fashion coordination for style-conscious couples
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              Get Started
            </button>
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 border-2 border-black rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24 bg-gray-50">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-xl font-semibold mb-2">Upload Outfits</h3>
              <p className="text-gray-600">
                Catalog your wardrobe by uploading photos of your favorite outfits and clothing items.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💑</div>
              <h3 className="text-xl font-semibold mb-2">Link with Partner</h3>
              <p className="text-gray-600">
                Connect with your partner to coordinate your styles and create matching looks together.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
              <p className="text-gray-600">
                Receive AI-powered suggestions for coordinated outfits based on color, style, and occasion.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
            <ul className="text-left max-w-md mx-auto space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Firebase Authentication
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Outfit Upload & Management
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Couple Pairing System
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Style Matching Algorithm
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Event-based Recommendations
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            Style Match - Fashion Coordination for Couples
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with Next.js, Firebase, and Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  )
}
