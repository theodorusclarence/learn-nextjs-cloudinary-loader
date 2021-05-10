import { NextSeo } from 'next-seo';
import CustomLink from '@/components/CustomLink';

export default function Home() {
  return (
    <>
      <NextSeo />

      <main>
        <section>
          <div className='min-h-screen'>
            <h1>Hellooo</h1>
            <CustomLink className='!block' href='/image'>
              To Image
            </CustomLink>
            <CustomLink className='!block' href='/image-unop'>
              To Image unop
            </CustomLink>
          </div>
        </section>
      </main>
    </>
  );
}
