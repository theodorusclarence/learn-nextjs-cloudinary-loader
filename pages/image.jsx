import Image from 'next/image';
import { NextSeo } from 'next-seo';
import CustomLink from '@/components/CustomLink';
import { buildUrl } from 'cloudinary-build-url';
import CloudinaryImg from '@/components/CloudinaryImg';

export default function ImagePage() {
  return (
    <>
      <NextSeo />

      <main>
        <section className='bg-dark'>
          <div className='min-h-screen text-white layout'>
            <figure className='w-[1000px]'>
              <CloudinaryImg
                publicId='petrolida_xkdzmo.jpg'
                width='1440'
                height='834'
              />
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
