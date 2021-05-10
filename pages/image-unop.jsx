import Image from 'next/image';
import { NextSeo } from 'next-seo';

export default function ImageUnOpPage() {
  return (
    <>
      <NextSeo />

      <main>
        <section className='bg-dark'>
          <div className='min-h-screen text-white layout'>
            <figure className='w-[1000px]'>
              <Image src='/images/petrolida.jpg' width='1440' height='834' />
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
