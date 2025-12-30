export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-white font-sans">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <div className="text-center max-w-md w-full space-y-6">
          {/* App Icon/Logo */}
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl mb-4">
            <span className="text-4xl">👔</span>
          </div>

          {/* App Title */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            style match
          </h1>

          {/* Tagline */}
          <p className="text-lg text-gray-300 leading-relaxed px-4">
            coordinate your daily fits with your partner
          </p>

          {/* CTA Button */}
          <button className="w-full max-w-xs mx-auto mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 pb-12 max-w-md mx-auto w-full space-y-4">
        {/* Feature Card 1 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">📸</div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">Share Your Outfits</h3>
              <p className="text-gray-300 text-sm">Post your daily fits and see what your partner is wearing</p>
            </div>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">💕</div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">Private & Intimate</h3>
              <p className="text-gray-300 text-sm">Just for you two - no followers, no likes, no pressure</p>
            </div>
          </div>
        </div>

        {/* Feature Card 3 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">✨</div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">Stay Coordinated</h3>
              <p className="text-gray-300 text-sm">Match your styles and build your couple aesthetic together</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
