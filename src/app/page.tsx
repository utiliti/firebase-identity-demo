"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className=''>
        <>
          <section className='bg-[#F48787] flex justify-center relative'>
            <div className='max-w-[1150px] mx-auto '>
              <Image
                src='/burgerbanner.png'
                width={screen.width}
                height={150}
                alt='logo'
              />
            </div>
            <div className='absolute bottom-10 bg-black rounded-full px-10 py-2 text-2xl '>
              <button>ORDER NOW</button>
            </div>
          </section>
          <section>
            <div className='max-w-[1150px] mx-auto flex py-10'>
              <div className='w-1/2'>
                <Image
                  src='/giftcards.png'
                  width={screen.width}
                  height={150}
                  alt='logo'
                  className='rounded-2xl'
                />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h2 className='text-black text-4xl ml-16 mb-8'>
                  GIFT CARDS
                  <br /> NOW AVAILABLE
                </h2>
                <div className='ring-1 ring-black text-black rounded-full px-5 py-2 text-2xl '>
                  <button>ORDER NOW</button>
                </div>
              </div>
            </div>
          </section>
        </>
      </div>
    </main>
  );
}
