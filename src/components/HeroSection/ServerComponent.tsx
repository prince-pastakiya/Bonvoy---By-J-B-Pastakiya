import Image from 'next/image';
import Link from 'next/link';

export const heading1 = (
  <>
    <h1 className='font-heading mb-6'>Become a Bonvoy Member</h1>
    <p className='text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg text-xl'>
    Get exclusive rates, earn points towards free nights, and more. 
    Sign up today for free and get upto <span className='text-[#c64c4c]'> 300 </span>Reward Points. 
    </p>
    <button className='btn-primary'> <Link href={'/auth'}>
    Get Started</Link></button>
  </>
);

export const section2 = (
  <div className='md:grid hidden gap-8 grid-cols-1'>
    <div className='rounded-2xl overflow-hidden h-48'>
      <Image
        src='/images/roberto-nickson-MA82mPIZeGI-unsplash.jpg'
        alt='hero-1'
        width={300}
        height={300}
        className='img scale-animation'
      />
    </div>

    <div className='grid grid-cols-2 gap-8 h-48'>
      <div className='rounded-2xl overflow-hidden'>
        <Image
          src='/images/hero-2.jpeg'
          alt='hero-2'
          width={300}
          height={300}
          className='img scale-animation'
        />
      </div>
      <div className='rounded-2xl overflow-hidden'>
        <Image
          src='/images/3.jpeg'
          alt='hero-3'
          width={300}
          height={300}
          className='img scale-animation'
        />
      </div>
    </div>
  </div>
);
