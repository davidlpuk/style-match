export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          Style Match
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Fashion coordination for style-conscious couples
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            Get Started
          </button>
          <button className="px-6 py-3 border border-black rounded-lg hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}
