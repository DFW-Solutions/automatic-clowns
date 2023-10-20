import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className={`${inter.className} max-w-2/5 mx-auto px-4`}>
      <h1 className='text-4xl text-center lg:text-left font-semibold'>Welcome to Digital Frontier Web Solutions!</h1>
      <p className='text-2xl mt-4 pb-6 text-center lg:text-left'>Content coming soon!</p>

      <section className='mt-8'>
        <h2 className='font-normal text-xl mb-2 text-center lg:text-left'>Connect with me</h2>
        <form className='mt-2' name='contact' method='POST' data-netlify='true'>
          <div className='hidden'>
            <label htmlFor="hpot">Don&apos;t fill in this form if you&apos;re human: <input id="hpot" name="bot-field" /></label>
            <input type='hidden' name='form-name' value='contact' />
          </div>
          <div className='mt-2'>
            <label className='block' htmlFor='name_input'>Name *</label>
            <input id='name_input' required className='w-full p-2 rounded-lg' type='text' name='name' />
          </div>
          <div className='mt-2'>
            <label className='block' htmlFor='email_input'>Email *</label>
            <input id='email_input' required className='w-full p-2 rounded-lg' type='email' name='email' />
          </div>
          <div className='mt-2'>
            <label className='block' htmlFor='textarea_input'>Details</label>
            <textarea id='textarea_input' className='w-full p-2 rounded-lg' name='message'></textarea>
          </div>
          <div className='mt-2'>
            <button className='rounded-lg bg-slate-300 w-full px-6 py-2' type='submit'>Send</button>
          </div>
        </form>
      </section>
    </main>
  )
}
