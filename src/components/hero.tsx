import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="text-center max-w-3xl">
      <h1 className="text-8xl font-bold mb-4 font-serif tracking-tight [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]">
        Style Match
      </h1>
      <p className="text-2xl text-gray-200 mb-10 [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
        Dress better, together.
      </p>
      <div className="flex gap-4 justify-center">
        <Button>Find Your Match</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  )
}
