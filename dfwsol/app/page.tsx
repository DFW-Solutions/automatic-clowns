import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className='w-2/5 mx-auto'>
      <h1 className={`${inter.className} text-4xl`}>Welcome to DFW Solutions</h1>
      <p className="text-2xl mt-4 pb-6">Content coming soon!</p>

      <section className='mt-8'>
        <h3 className='font-normal text-xl mb-2'>Connect with me</h3>
        <form className='mt-2' name="contact" method="POST" data-netlify="true">
          <div className='mt-2'>
            <label className='block' htmlFor="name_input">Name *</label>
            <input id="name_input" required className='w-full max-w-sm p-2' type="text" name="name" />
          </div>
          <div className='mt-2'>
            <label className='block' htmlFor="email_input">Email *</label>
            <input id="email_input" required className='w-full max-w-sm p-2' type="email" name="email" />
          </div>
          <div className='mt-2'>
            <label className='block' htmlFor="textarea_input">Details</label>
            <textarea id="textarea_input" className='w-full max-w-sm p-2' name="message"></textarea>
          </div>
          <div className='mt-2'>
            <button className="rounded-full bg-slate-300 px-6 py-1" type="submit">Send</button>
          </div>
        </form>
      </section>

    </main>
  )
}
