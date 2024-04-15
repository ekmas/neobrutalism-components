import Marquee from 'react-fast-marquee'

import Link from 'next/link'

import arrow from '../../public/svgs/arrow.svg'
import herogrid from '../../public/svgs/herogrid.svg'
import herostar2 from '../../public/svgs/herostar2.svg'
import marqueestar from '../../public/svgs/marqueestar.svg'

export default function Home() {
  return (
    <div>
      <main className="relative flex min-h-[100svh] flex-col items-center justify-center bg-bg px-5 py-[150px] text-center font-bold">
        <h1 className="text-5xl m1000:text-4xl m800:text-3xl m500:text-2xl m400:text-xl">
          Neobrutalism components
        </h1>

        <p className="mb-[50px] mt-[30px] text-2xl m800:text-lg m400:text-base">
          A collection of neobrutalism-styled Tailwind components.
        </p>

        <Link
          className="flex items-center rounded-base border-2 border-black bg-main px-10 py-3 text-[22px] shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none m800:px-8 m800:py-2.5 m800:text-lg m400:px-6 m400:py-2 m400:text-base"
          href={'/docs'}
        >
          Read the docs
          <img
            className="ml-[15px] w-[18px] m400:ml-4 m400:w-[15px]"
            src={arrow.src}
            alt="arrow"
          />
        </Link>
        <svg
          className="absolute left-[20%] top-[25%] w-[80px] m1500:left-[15%] m1500:top-[20%] m1500:w-[50px] m1100:hidden"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.9395 14.107L50 4.80124L53.0605 14.107C58.1702 29.6438 70.3562 41.8298 85.893 46.9395L95.1988 50L85.893 53.0605C70.3562 58.1702 58.1702 70.3562 53.0605 85.893L50 95.1988L46.9395 85.893C41.8298 70.3562 29.6438 58.1702 14.107 53.0605L4.80124 50L14.107 46.9395C29.6438 41.8298 41.8298 29.6438 46.9395 14.107Z"
            className="fill-main"
            stroke="black"
            strokeWidth="3"
          />
        </svg>

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
            .map((id) => {
              return (
                <div className="flex items-center" key={id}>
                  <span className="text-bold mx-10 text-4xl m750:text-2xl m500:text-xl">
                    Neobrutalism components
                  </span>
                  <img
                    className="w-[45px] m500:w-[35px]"
                    src={marqueestar.src}
                    alt="marquee star"
                  />
                </div>
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
              After you install necessary dependencies, just go to any
              component, click copy and you&apos;re good to go.
            </p>
          </section>
          <section className="bg-bg p-14 py-16 font-bold m1300:p-10 m1300:py-12 m800:p-6 m800:py-8">
            <h2 className="mb-6 text-4xl m1300:text-3xl m700:text-2xl m500:text-xl">
              Customizable
            </h2>

            <p className="text-2xl m1300:text-xl m800:text-lg m500:text-base">
              You can easily customize these components to suit your needs.
            </p>
          </section>
        </div>
        <Marquee
          className="border-b-4 border-black bg-white py-5 font-bold"
          direction="right"
        >
          {Array(15)
            .fill('xd')
            .map((id) => {
              return (
                <div className="flex items-center" key={id}>
                  <span className="text-bold mx-10 text-4xl m750:text-2xl m500:text-xl">
                    Neobrutalism components
                  </span>
                  <img
                    className="w-[45px] m500:w-[35px]"
                    src={marqueestar.src}
                    alt="marquee star"
                  />
                </div>
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
            className="mt-[50px] flex items-center rounded-base border-2 border-black bg-white px-10 py-3 text-[22px] shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none m800:px-8 m800:py-2.5 m800:text-lg m400:px-6 m400:py-2 m400:text-base"
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
