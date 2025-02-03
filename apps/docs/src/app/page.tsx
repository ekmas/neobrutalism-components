import { Marquee } from "@devnomic/marquee"
import { ArrowUpRight, Check } from "lucide-react"

import "@/styling/marquee.css"

import Link from "next/link"

import reviews from "@/data/reviews"

import HeroComponents from "@/components/app/HeroComponents"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="text-text dark:text-darkText">
      <main className="relative flex min-h-[100svh] flex-col items-center justify-center bg-bg dark:bg-darkBg px-5 py-[200px] font-bold">
        <div className="mx-auto w-container max-w-full grid grid-cols-2 m1100:grid-cols-1">
          <div className="text-left m1000:text-center m1100:w-4/5 m1000:w-full">
            <h1 className="text-5xl font-heading m1400:text-4xl m800:text-3xl m500:text-2xl m400:text-xl">
              Neobrutalism components
            </h1>

            <p className="mb-[60px] leading-snug m800:mb-10 m800:mt-8 m1100:w-3/4 m1000:w-full mt-[40px] m1400:text-2xl font-base text-3xl m800:text-lg m400:text-base">
              A collection of neobrutalism-styled components based on shadcn/ui.
            </p>

            <Link
              className="flex items-center w-max m1000:mx-auto text-text rounded-base border-2 font-base border-border dark:border-darkBorder bg-main px-10 py-3 text-[22px] shadow-light dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none m800:px-8 m800:py-2.5 m800:text-lg m500:px-6 m400:px-4 m400:text-sm m500:py-2 m500:text-base"
              href={"/docs"}
            >
              Read the docs
              <ArrowUpRight className="ml-[10px] w-[30px] h-[30px] m500:w-[20px] m500:h-[20px]" />
            </Link>
          </div>
        </div>
        <HeroComponents />
      </main>
      <div>
        <Marquee
          className="border-t-4 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack py-5 m500:py-4 font-base"
          direction="left"
        >
          {Array(15)
            .fill("xd")
            .map((x, id) => {
              return (
                <div className="flex items-center" key={id}>
                  <span className="mx-5 text-4xl m800:text-2xl m500:text-xl">
                    Neobrutalism components
                  </span>
                </div>
              )
            })}
        </Marquee>
        <div className="grid grid-cols-2 border-b-4 border-t-4 border-border dark:border-darkBorder m700:grid-cols-1">
          <section className="border-b-4 border-r-4 border-border dark:border-darkBorder bg-bg dark:bg-darkBg p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:border-r-0 m700:bg-main dark:m700:bg-main m700:dark:text-text">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-[70px] h-[70px] m1300:w-[55px] m1300:h-[55px] m800:h-10 m800:w-10 flex items-center justify-center">
                <TailwindIcon />
              </div>

              <h2 className="font-heading text-4xl m1300:text-3xl m800:text-2xl m500:text-xl">
                Made with Tailwind
              </h2>
            </div>

            <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
              These components efficiently utilize Tailwind and its versatile
              utility classes, enabling swift and straightforward styling.
            </p>
          </section>
          <section className="border-b-4 border-border dark:border-darkBorder dark:text-text m700:dark:text-darkText bg-main p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:bg-bg m700:dark:bg-darkBg">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-[70px] h-[70px] m1300:w-[55px] m1300:h-[55px] m800:h-10 m800:w-10 flex items-center justify-center">
                <OpenSourceIcon />
              </div>

              <h2 className="font-heading text-4xl m1300:text-3xl m800:text-2xl m500:text-xl">
                Open source
              </h2>
            </div>

            <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
              This project is open source with an MIT License, fostering
              collaboration and allowing widespread adoption and modification.
            </p>
          </section>
          <section className="border-r-4 border-border dark:border-darkBorder bg-main dark:text-text p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8 m700:border-b-4 m700:border-r-0">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-[70px] h-[70px] m1300:w-[55px] m1300:h-[55px] m800:h-10 m800:w-10 flex items-center justify-center">
                <ShadcnIcon />
              </div>

              <h2 className="font-heading text-4xl m1300:text-3xl m800:text-2xl m500:text-xl">
                Based on Shadcn/ui
              </h2>
            </div>

            <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
              Most of the components are based on shadcn/ui, meaning
              high-quality components with best practices.
            </p>
          </section>
          <section className="bg-bg dark:bg-darkBg p-14 py-16 m1300:p-10 m1300:py-12 m800:p-6 m800:py-8">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-[70px] h-[70px] m1300:w-[55px] m1300:h-[55px] m800:h-10 m800:w-10 flex items-center justify-center">
                <CustomizableIcon />
              </div>

              <h2 className="text-4xl font-heading m1300:text-3xl m800:text-2xl m500:text-xl">
                Customizable
              </h2>
            </div>

            <p className="text-2xl font-base m1300:text-xl m800:text-lg m500:text-base">
              You can easily customize these components to suit your needs.
            </p>
          </section>
        </div>
        <section className="inset-0 flex w-full px-5 flex-col items-center justify-center bg-white dark:bg-secondaryBlack bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
          <div className="mx-auto w-container max-w-full py-20 m500:py-14 lg:py-[100px]">
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
                      className="m1000:min-h-20 m1000:w-2/3 m1000:mx-auto m500:w-full mb-4 min-h-48 w-full rounded-base border-2 border-border dark:border-darkBorder bg-bg dark:bg-darkBg p-5 shadow-light dark:shadow-dark lg:mb-8"
                      key={index}
                    >
                      <div className="flex items-center gap-5">
                        <img
                          className="h-12 w-12 rounded-base border-2 border-border dark:border-darkBorder"
                          src={`${pfp.src}`}
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
        <section className="border-t-4 border-t-border dark:border-t-darkBorder border-b-4 border-b-border dark:border-b-darkBorder bg-bg dark:bg-darkBg py-20 m500:py-14 font-base lg:py-[100px]">
          <h2 className="mb-10 px-5 text-center text-4xl font-heading m1300:text-3xl m700:text-2xl m500:text-xl lg:mb-20">
            Frequently asked questions
          </h2>

          <div className="mx-auto grid w-[700px] max-w-full px-5">
            <Accordion
              className="text-base sm:text-lg"
              type="single"
              collapsible
            >
              <AccordionItem className="mb-2" value="item-2">
                <AccordionTrigger className="text-left">
                  Are these components accessible?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Most of the components are based on shadcn/ui, which means
                  they are accessible because under the hood they use radix-ui
                  which is fully accessible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="mb-2" value="item-3">
                <AccordionTrigger className="text-left">
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
                <AccordionTrigger className="text-left">
                  How to contribute?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Visit{" "}
                  <a
                    target="_blank"
                    className="underline font-heading"
                    href="https://github.com/ekmas/neobrutalism-components/blob/main/CONTRIBUTING.md"
                  >
                    contributing.md
                  </a>{" "}
                  to get started.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <Marquee
          className="border-b-4 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack py-5 m500:py-4 font-base"
          direction="left"
          reverse
        >
          {Array(15)
            .fill("xd")
            .map((x, id) => {
              return (
                <div className="flex items-center" key={id}>
                  <span className="mx-5 text-4xl m800:text-2xl m500:text-xl">
                    Neobrutalism components
                  </span>
                </div>
              )
            })}
        </Marquee>
        <section className="inset-0 w-full flex flex-col items-center justify-center bg-main  bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:70px_70px] px-5 py-[200px] m1000:py-[150px] m500:py-[120px]">
          <h2 className="text-center text-text font-heading text-5xl m1000:text-3xl m500:text-2xl m400:text-xl">
            Start making neobrutalism layouts today.
          </h2>

          <Link
            className="mt-[50px] flex font-base items-center rounded-base border-2 border-black bg-white dark:bg-secondaryBlack px-10 py-3 text-[22px] shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none m800:px-8 m800:py-2.5 m800:text-lg m500:px-6 m500:py-2 m500:text-base m400:px-4 m400:text-sm"
            href={"/docs"}
          >
            Read the docs
            <ArrowUpRight className="ml-[10px] w-[30px] h-[30px] m500:w-[20px] m500:h-[20px]" />
          </Link>
        </section>
      </div>
      <footer className="z-30 border-t-4 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack px-5 py-5 text-center font-base m500:text-sm">
        Released under MIT License. The source code is available on{" "}
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

const OpenSourceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 768" fill="none">
    <path
      d="M400 10C615.398 10 790 184.585 790 399.958C790 557.315 696.772 692.954 562.483 754.562L468.604 510.384C505.457 487.481 530 446.609 530 399.958C530 328.161 471.802 269.971 400 269.971C328.198 269.971 270 328.161 270 399.958C270 446.619 294.587 487.487 331.438 510.419L237.559 754.599C103.226 692.917 10 557.313 10 399.958C10 184.585 184.602 10 400 10Z"
      className="fill-black m700:stroke-black m700:fill-main m700:dark:fill-darkText"
      strokeWidth="30"
    />
  </svg>
)

const ShadcnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none"></rect>
    <line
      x1="208"
      y1="128"
      x2="128"
      y2="208"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    ></line>
    <line
      x1="192"
      y1="40"
      x2="40"
      y2="192"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
    ></line>
  </svg>
)

const CustomizableIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="none">
    <path
      d="M493.281 161.223L493.259 161.244L493.237 161.266C479.348 175.17 479.348 198.163 493.237 212.067L588.139 307.067C602.034 320.978 625.021 320.978 638.917 307.067L773.317 172.527C775.305 171.081 777.213 170.855 778.356 171.073C778.936 171.184 779.329 171.398 779.603 171.635C779.852 171.85 780.207 172.255 780.494 173.074C786.805 193.659 790 215.947 790 240C790 375.796 673.608 484.265 534.943 468.421C513.811 465.156 493.099 460.323 474.193 452.437L468.006 449.857L463.269 454.599L153.591 764.599C137.117 781.091 114.674 790 94.0687 790C73.4638 790 51.0205 781.091 34.5461 764.599L34.464 764.517L34.3799 764.437C1.96834 733.466 1.72473 679.929 34.5409 647.073C34.5427 647.071 34.5444 647.069 34.5461 647.067L345.87 337.086L350.624 332.352L348.046 326.157C340.129 307.138 335.322 288.025 332.083 265.39C316.219 126.527 424.606 10 560.25 10C582.145 10 605.607 13.0663 627.556 19.181C628.909 20.2855 629.87 21.8429 630.23 23.3556C630.631 25.0419 630.177 25.8434 629.774 26.254C629.77 26.2581 629.766 26.262 629.762 26.2659L493.281 161.223Z"
      className="fill-main stroke-black m700:dark:fill-darkText"
      strokeWidth="30"
    />
  </svg>
)

const TailwindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 481" fill="none">
    <mask
      id="mask0_16_29"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="800"
      height="481"
    >
      <path
        d="M10 10H790V470.109H10V10Z"
        fill="white"
        stroke="white"
        strokeWidth="20"
      />
    </mask>
    <g mask="url(#mask0_16_29)">
      <path
        d="M423.375 147.135L423.377 147.137C443.066 167.128 463.341 187.643 490.645 203.37C517.718 218.964 552.121 230.055 600 230.055C651.642 230.055 692.597 217.167 723.752 192.237C745.528 174.813 763.021 151.101 776.006 120.731C764.266 130.791 751.918 138.658 738.94 144.222C713.428 155.158 686.175 156.885 657.574 149.733C624.429 141.452 600.952 117.617 577.656 93.9664L576.625 92.9192L576.623 92.918C556.934 72.9264 536.659 52.4117 509.355 36.6846C482.282 21.0905 447.879 10 400 10C348.358 10 307.403 22.8873 276.248 47.8171C254.472 65.2416 236.979 88.9535 223.994 119.324C235.734 109.264 248.082 101.396 261.06 95.8327C286.572 84.8967 313.824 83.1696 342.424 90.3209L423.375 147.135ZM423.375 147.135L422.344 146.088M423.375 147.135L422.344 146.088M422.344 146.088C399.048 122.437 375.571 98.6022 342.426 90.3214L422.344 146.088ZM576.006 360.785C563.021 391.156 545.528 414.868 523.752 432.292C492.597 457.222 451.642 470.109 400 470.109C352.121 470.109 317.718 459.019 290.645 443.424C263.341 427.697 243.066 407.183 223.377 387.191L223.375 387.19L222.386 386.185C199.072 362.517 175.589 338.677 142.428 330.377L142.426 330.376C113.825 323.224 86.5722 324.951 61.0601 335.887C48.0816 341.451 35.7343 349.318 23.9935 359.378C36.9788 329.008 54.4722 305.296 76.2478 287.872C107.403 262.942 148.358 250.055 200 250.055C247.879 250.055 282.282 261.145 309.355 276.739C336.659 292.466 356.934 312.981 376.623 332.973L376.625 332.974L377.656 334.021C400.952 357.672 424.429 381.507 457.574 389.788C486.175 396.94 513.428 395.213 538.94 384.276C551.918 378.713 564.266 370.845 576.006 360.785Z"
        className="fill-main m700:fill-black"
        stroke="black"
        strokeWidth="20"
      />
    </g>
  </svg>
)
