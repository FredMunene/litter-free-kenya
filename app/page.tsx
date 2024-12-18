import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative w-full h-screen">
        <Image
          src="/hero-image.jpg"
          alt="Clean Kenyan landscape"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Together, for a Cleaner Kenya
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Join us in our mission to keep Kenya beautiful and litter-free
          </p>
          <Link href="/join-cleanup" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300">
            Join a Cleanup Drive
          </Link>
        </div>
      </div>
    </main>
  )
}

