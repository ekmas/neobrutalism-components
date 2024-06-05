import Marquee from 'react-fast-marquee'

import Link from 'next/link'

import reviews from '@/data/reviews'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import arrow from '../../public/svgs/arrow.svg'
import herostar2 from '../../public/svgs/herostar2.svg'
import marqueestar from '../../public/svgs/marqueestar.svg'

export default function Home() {
  return (
    <div>
      <main className="relative flex min-h-[100svh] flex-col items-center justify-center bg-bg px-5 py-[150px] text-center font-bold">
        <h1 className="text-5xl font-heading m1000:text-4xl m800:text-3xl m500:text-2xl m400:text-xl">
          Neobrutalism components
        </h1>

        <p className="mb-[50px] mt-[30px] font-base text-2xl m800:text-lg m400:text-base">
          A collection of neobrutalism-styled Tailwind components.
        </p>

        <Link
          className="flex items-center rounded-base border-2 font-base border-black bg-main px-10 py-3 text-[22px] shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none m800:px-8 m800:py-2.5 m800:text-lg m400:px-6 m400:py-2 m400:text-base"
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
          className="border-t-4 border-black bg-white py-5 m500:py-4 font-base"
          direction="left"
        >
          {Array(15)
            .fill('xd')
            .map((x, id) => {
              return (
                <div className="flex items-center" key={id}>
                  <span className="mx-10 text-4xl m800:text-2xl m500:text-xl">
                    Neobrutalism components
                  </span>
                  <img
                    className="w-[45px] m800:w-[35px]"
                    src={marqueestar.src}
                    alt="marquee star"
                  />
                </div>
              )
            })}
        </Marquee>
        <div className="grid grid-cols-2 border-b-4 border-t-4 border-black m700:grid-cols-1">
          <section className="border-b-4 border-r-4 border-black bg-bg p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:border-r-0 m700:bg-main">
            <h2 className="mb-6 font-heading text-4xl m1300:text-3xl m800:text-2xl m500:text-xl">
              Made with Tailwind
            </h2>

            <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
              These components efficiently utilize Tailwind and its versatile
              utility classes, enabling swift and straightforward styling.
            </p>
          </section>
          <section className="border-b-4 border-black bg-main p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:bg-bg">
            <h2 className="mb-6 font-heading text-4xl m1300:text-3xl m800:text-2xl m500:text-xl">
              Open source
            </h2>

            <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
              This project is open source with an MIT License, fostering
              collaboration and allowing widespread adoption and modification.
            </p>
          </section>
          <section className="border-r-4 border-black bg-main p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:border-b-4 m700:border-r-0">
            <h2 className="mb-6 font-heading text-4xl m1300:text-3xl m800:text-2xl m500:text-xl">
              Easy to use
            </h2>

            <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
              After you install necessary dependencies, just go to any
              component, click copy and you&apos;re good to go.
            </p>
          </section>
          <section className="bg-bg p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8">
            <h2 className="mb-6 text-4xl font-heading m1300:text-3xl m800:text-2xl m500:text-xl">
              Customizable
            </h2>

            <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
              You can easily customize these components to suit your needs.
            </p>
          </section>
        </div>
        <section className="inset-0 flex w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
          <div className="mx-auto w-container max-w-full px-5 py-20 m500:py-14 lg:py-[100px]">
            <h2 className="mb-10 text-center text-4xl font-heading m1300:text-3xl m700:text-2xl m500:text-xl lg:mb-20">
              Loved by the community
            </h2>
            <div className="m1000:grid-cols-1 m1000:gap-0 grid grid-cols-3 gap-4 lg:gap-8">
              {[
                [reviews[0], reviews[1]],
                [reviews[2], reviews[3], reviews[4]],
                [reviews[5], reviews[6]],
              ].map((card, index) => (
                <div className="group flex flex-col justify-center" key={index}>
                  {card.map(({ jobTitle, pfp, fullName, review }, index) => (
                    <div
                      className="m1000:min-h-20 m1000:w-2/3 m1000:mx-auto m500:w-full mb-4 min-h-48 w-full rounded-base border-2 border-black bg-bg p-5 shadow-base lg:mb-8"
                      key={index}
                    >
                      <div className="flex items-center gap-5">
                        <img
                          className="h-12 w-12 rounded-base border-2 border-black"
                          src={pfp}
                          alt="pfp"
                        />

                        <div>
                          <h4 className="text-lg font-heading">{fullName}</h4>
                          <p className="text-sm font-base">{jobTitle}</p>
                        </div>
                      </div>
                      <div className="mt-5 break-words">{review}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t-4 border-t-black border-b-4 border-b-black bg-bg py-20 m500:py-14 font-base lg:py-[100px]">
          <h2 className="mb-10 px-5 text-center text-4xl font-heading m1300:text-3xl m700:text-2xl m500:text-xl lg:mb-20">
            Frequently asked questions
          </h2>

          <div className="mx-auto grid w-[700px] max-w-full px-5">
            <Accordion
              className="text-base sm:text-lg"
              type="single"
              collapsible
            >
              <AccordionItem className="mb-2" value="item-1">
                <AccordionTrigger>Is dark mode available?</AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Currently no, but maybe I&apos;ll add it in the future.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="mb-2" value="item-2">
                <AccordionTrigger>
                  Are these components accessible?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  It depends. React components are somewhat accessible, but if
                  accessibility is one of your main concerns I suggest you to
                  use shadcn components because under the hood they use radix-ui
                  which is fully accessible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="mb-2" value="item-3">
                <AccordionTrigger>
                  Why copy/paste and not packaged as a dependency?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  I like shadcn&apos;s philosophy about component libraries,
                  I&apos;ll quote what he said about this:
                  <br />
                  <q className="mt-5 block">
                    The idea behind this is to give you ownership and control
                    over the code, allowing you to decide how the components are
                    built and styled. Start with some sensible defaults, then
                    customize the components to your needs. One of the drawback
                    of packaging the components in an npm package is that the
                    style is coupled with the implementation. The design of your
                    components should be separate from their implementation.
                  </q>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How to contribute?</AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Visit{' '}
                  <a
                    target="_blank"
                    className="underline font-heading"
                    href="https://github.com/ekmas/neobrutalism-components/blob/main/CONTRIBUTING.md"
                  >
                    contributing.md
                  </a>{' '}
                  to get started.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <Marquee
          className="border-b-4 border-black bg-white py-5 m500:py-4 font-base"
          direction="right"
        >
          {Array(15)
            .fill('xd')
            .map((x, id) => {
              return (
                <div className="flex items-center" key={id}>
                  <span className="mx-10 text-4xl m800:text-2xl m500:text-xl">
                    Neobrutalism components
                  </span>
                  <img
                    className="w-[45px] m800:w-[35px]"
                    src={marqueestar.src}
                    alt="marquee star"
                  />
                </div>
              )
            })}
        </Marquee>
        <section className="inset-0 w-full flex flex-col items-center justify-center bg-main bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:70px_70px] px-5 py-[200px] m1000:py-[150px] m500:py-[120px]">
          <h2 className="text-center font-heading text-5xl m1000:text-3xl m500:text-2xl m400:text-xl">
            Start making neobrutalism layouts today.
          </h2>

          <Link
            className="mt-[50px] flex font-base items-center rounded-base border-2 border-black bg-white px-10 py-3 text-[22px] shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none m800:px-8 m800:py-2.5 m800:text-lg m400:px-6 m400:py-2 m400:text-base"
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
      <footer className="z-30 border-t-4 border-black bg-white px-5 py-5 text-center font-base m500:text-sm">
        Released under MIT License. The source code is available on{' '}
        <a
          target="_blank"
          href="https://github.com/ekmas/neobrutalism-components"
          className="underline font-heading"
        >
          Github
        </a>
        .
      </footer>
    </div>
  )
}
