import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className='w-4/5 mx-auto'>
      <h1 className={`${inter.className} text-4xl`}>Welcome to DFW Solutions</h1>
      <p className="text-2xl mt-4">Content coming soon!</p>
    </main>
  )
}
