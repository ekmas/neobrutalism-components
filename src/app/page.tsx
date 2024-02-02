import Link from 'next/link'
import arrow from '../../public/svgs/arrow.svg'
import marqueestar from '../../public/svgs/marqueestar.svg'
import herostar1 from '../../public/svgs/herostar1.svg'
import herostar2 from '../../public/svgs/herostar2.svg'
import herogrid from '../../public/svgs/herogrid.svg'
import Marquee from 'react-fast-marquee'

export default function Home() {
  return (
    <div>
      <main className="relative flex min-h-[100svh] flex-col items-center justify-center bg-bg px-5 py-[150px] text-center font-bold">
        <h1 className="text-5xl m1000:text-4xl m800:text-3xl m500:text-2xl m400:text-xl">
          Neobrutalism components
        </h1>

        <p className="mb-[50px] mt-[30px] text-2xl m800:text-lg m400:text-base">
          A collection of type-safe components written in React and Tailwind
        </p>

        <Link
          className="flex items-center rounded-md border-2 border-black bg-main px-10 py-3 text-[22px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none m800:px-8 m800:py-2.5 m800:text-lg m400:px-6 m400:py-2 m400:text-base"
          href={'/docs'}
        >
          Read the docs
          <img
            className="ml-[15px] w-[18px] m400:ml-4 m400:w-[15px]"
            src={arrow.src}
            alt="arrow"
          />
        </Link>
        <img
          className="absolute left-[20%] top-[25%] w-[80px] m1500:left-[15%] m1500:top-[20%] m1500:w-[50px] m1100:hidden"
          src={herostar1.src}
          alt="hero star 1"
        />
        <img
          className="absolute bottom-[25%] right-[20%] w-[80px] m1500:bottom-[20%] m1500:right-[15%] m1500:w-[50px] m1100:hidden"
          src={herostar2.src}
          alt="hero star 2"
        />
      </main>
      <div>
        <Marquee
          className="border-t-4 border-black bg-white py-5 font-bold"
          direction="left"
        >
          {Array(15)
            .fill('xd')
            .map((item: any) => {
              return (
                <>
                  <span className="text-bold mx-10 text-4xl m750:text-2xl m500:text-xl">
                    Neobrutalism components
                  </span>
                  <img
                    className="w-[45px] m500:w-[35px]"
                    src={marqueestar.src}
                    alt="marquee star"
                  />
                </>
              )
            })}
        </Marquee>
        <div className="grid grid-cols-2 border-b-4 border-t-4 border-black m700:grid-cols-1">
          <section className="border-b-4 border-r-4 border-black bg-bg p-14 py-16 font-bold m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:border-r-0 m700:bg-main">
            <h2 className="mb-6 text-4xl m1300:text-3xl m700:text-2xl m500:text-xl">
              Made with Tailwind
            </h2>

            <p className="text-2xl m1300:text-xl m800:text-lg m500:text-base">
              These components efficiently utilize Tailwind and its versatile
              utility classes, enabling swift and straightforward styling.
            </p>
          </section>
          <section className="border-b-4 border-black bg-main p-14 py-16 font-bold m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:bg-bg">
            <h2 className="mb-6 text-4xl m1300:text-3xl m700:text-2xl m500:text-xl">
              Open source
            </h2>

            <p className="text-2xl m1300:text-xl m800:text-lg m500:text-base">
              This project is open source with an MIT License, fostering
              collaboration and allowing widespread adoption and modification.
            </p>
          </section>
          <section className="border-r-4 border-black bg-main p-14 py-16 font-bold m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:border-b-4 m700:border-r-0">
            <h2 className="mb-6 text-4xl m1300:text-3xl m700:text-2xl m500:text-xl">
              Easy to use
            </h2>

            <p className="text-2xl m1300:text-xl m800:text-lg m500:text-base">
              Just go to any component, click copy and you&apos;re good to go.
            </p>
          </section>
          <section className="bg-bg p-14 py-16 font-bold m1300:p-10 m1300:py-12 m800:p-6 m800:py-8">
            <h2 className="mb-6 text-4xl m1300:text-3xl m700:text-2xl m500:text-xl">
              Customizable
            </h2>

            <p className="text-2xl m1300:text-xl m800:text-lg m500:text-base">
              As you don&apos;t have to install anything, you can easily
              customize these components to suit your needs.
            </p>
          </section>
        </div>
        <Marquee
          className="border-b-4 border-black bg-white py-5 font-bold"
          direction="right"
        >
          {Array(15)
            .fill('xd')
            .map((item: any) => {
              return (
                <>
                  <span className="text-bold mx-10 text-4xl m750:text-2xl m500:text-xl">
                    Neobrutalism components
                  </span>
                  <img
                    className="w-[45px] m500:w-[35px]"
                    src={marqueestar.src}
                    alt="marquee star"
                  />
                </>
              )
            })}
        </Marquee>
        <section
          className="flex flex-col items-center justify-center bg-main bg-cover bg-center bg-no-repeat px-5 py-[200px] font-bold m1000:py-[150px] m500:py-[120px]"
          style={{ backgroundImage: `url(${herogrid.src})` }}
        >
          <h2 className="text-center text-5xl m1000:text-3xl m500:text-2xl m400:text-xl">
            Start making neobrutalism layouts today.
          </h2>

          <Link
            className="mt-[50px] flex items-center rounded-md border-2 border-black bg-white px-10 py-3 text-[22px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none m800:px-8 m800:py-2.5 m800:text-lg m400:px-6 m400:py-2 m400:text-base"
            href={'/docs'}
          >
            Read the docs
            <img
              className="ml-[15px] w-[18px] m400:ml-4 m400:w-[15px]"
              src={arrow.src}
              alt="arrow"
            />
          </Link>
        </section>
      </div>
      <footer className="z-30 border-t-4 border-black bg-white px-5 py-5 text-center font-bold m500:text-sm">
        Released under MIT License. The source code is available on{' '}
        <a
          target="_blank"
          href="https://github.com/ekmas/neobrutalism-components"
          className="underline"
        >
          Github
        </a>
        .
      </footer>
    </div>
  )
}
