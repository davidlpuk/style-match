export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white font-sans p-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-8xl font-bold mb-4 font-serif tracking-tight [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]">
          style match
        </h1>
        <p className="text-2xl text-gray-200 mb-10 [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
          the private space for you & your partner to share your daily fits.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-pink-500 text-white rounded-full font-bold text-lg hover:bg-pink-600 transition-colors tracking-wide lowercase">
            let's go
          </button>
        </div>
      </div>
    </main>
  )
}
