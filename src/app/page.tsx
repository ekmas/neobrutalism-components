import { Marquee } from "@devnomic/marquee"
import { ArrowUpRight } from "lucide-react"

import "@/styling/marquee.css"

import Link from "next/link"

import reviews from "@/data/reviews"

import HeroComponents from "@/components/app/hero-components"
import { sharedComponents } from "@/components/app/mdx-components"
import { Pre } from "@/components/app/pre"
import StylingCustomizer from "@/components/app/styling-customizer"
import Star8 from "@/components/stars/s8"
import Star9 from "@/components/stars/s9"
import Star11 from "@/components/stars/s11"
import Star14 from "@/components/stars/s14"
import Star16 from "@/components/stars/s16"
import Star20 from "@/components/stars/s20"
import Star22 from "@/components/stars/s22"
import Star26 from "@/components/stars/s26"
import Star29 from "@/components/stars/s29"
import Star32 from "@/components/stars/s32"
import Star37 from "@/components/stars/s37"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const { Tabs, TabsContent, TabsList, TabsTrigger } = sharedComponents

  return (
    <div className="text-foreground font-base prose-headings:font-heading prose-h1:2xl:text-6xl prose-h1:xl:text-5xl prose-h1:md:text-5xl prose-h1:sm:text-[33px] prose-h1:text-2xl prose-h2:2xl:text-4xl prose-h2:lg:text-4xl prose-h2:md:text-3xl prose-h2:text-2xl prose-h3:2xl:text-4xl prose-h3:xl:text-3xl prose-h3:lg:text-3xl prose-h3:md:text-2xl prose-h3:sm:text-xl">
      <main className="relative flex min-h-[100dvh] flex-col overflow-hidden items-center justify-center bg-background px-5 md:py-[200px] py-[100px] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
        <HeroComponents className="xl:-left-[130px] md:-left-[200px] lg:block hidden" />
        <HeroComponents
          className="xl:-right-[130px] md:-right-[200px] lg:block hidden"
          reverse
        />
        <div className="mx-auto w-container max-w-full">
          <div className="flex flex-col items-center text-center">
            <h1 className="leading-normal">
              Get started with creating <br />{" "}
              <span className="relative px-2 sm:mr-2 mr-0 md:[&_svg]:size-[45px] sm:[&_svg]:size-7 bg-main/50 rounded-base border-2 border-border/40 dark:border-border/70">
                neobrutalism
                <Star9
                  className="absolute sm:block hidden md:-bottom-4 md:-right-5 -bottom-2.5 -right-2.5"
                  color="var(--main)"
                  pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
                />
                <Star9
                  className="absolute sm:block hidden md:-top-4 md:-left-5 -top-2.5 -left-2.5"
                  color="var(--main)"
                  pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
                />
              </span>{" "}
              layouts.
            </h1>

            <p className="leading-snug w-full md:mt-[50px] md:mb-[60px] sm:mt-12 my-9 sm:mb-10 2xl:text-3xl xl:text-2xl lg:text-2xl xl:w-full lg:w-2/3 md:w-full md:text-2xl sm:text-xl text-xl">
              A collection of neobrutalism-styled components based on shadcn/ui.
            </p>

            <Link
              className="flex items-center gap-2.5 w-max text-main-foreground rounded-base border-2 border-border bg-main md:px-10 px-4 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              href={"/docs"}
            >
              Read the docs
              <ArrowUpRight className="md:size-[30px] size-5" />
            </Link>
          </div>
        </div>
      </main>
      <div>
        <Marquee
          className="border-t-4 border-border md:[&_.animate-marquee-left]:gap-[50px]! [&_.animate-marquee-left]:gap-[35px]! bg-secondary-background md:py-4 py-3"
          direction="left"
        >
          {Array.from({ length: 7 }).map((_, id) => {
            return (
              <div
                className="flex items-center md:gap-[50px] gap-[35px] xl:[&_span]:text-3xl md:[&_span]:text-2xl sm:[&_span]:text-xl [&_span]:text-base lg:[&_svg]:size-[50px] md:[&_svg]:size-10 [&_svg]:size-[30px]"
                key={id}
              >
                <span>Neobrutalism components</span>
                <Star32 className="text-foreground" />
                <span>Neobrutalism components</span>
                <Star22 stroke="black" strokeWidth={6} color="var(--main)" />
                <span>Neobrutalism components</span>
                <Star11 className="text-foreground" />
                <span>Neobrutalism components</span>
                <Star26 color="var(--main)" stroke="black" strokeWidth={7} />
              </div>
            )
          })}
        </Marquee>
        <div className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-t-4 border-border">
          <section className="border-b-4 md:border-r-4 border-border md:bg-background 2xl:p-14 2xl:py-16 xl:p-10 xl:py-10 lg:p-8 lg:py-10 p-5 py-7 border-r-0 bg-main md:text-foreground text-main-foreground">
            <div className="flex items-center sm:gap-6 gap-4 sm:mb-6 mb-4">
              <div className="xl:size-[70px] lg:size-[55px] sm:size-12 size-10 flex items-center justify-center">
                <TailwindIcon />
              </div>

              <h3>Made with Tailwind</h3>
            </div>

            <p className="2xl:text-2xl xl:text-xl md:text-base sm:text-lg text-base">
              These components efficiently utilize Tailwind and its versatile
              utility classes, enabling swift and straightforward styling.
            </p>
          </section>
          <section className="border-b-4 border-border md:text-main-foreground md:dark:text-main-foreground md:bg-main text-main-foreground dark:text-foreground 2xl:p-14 2xl:py-16 xl:p-10 xl:py-10 lg:p-8 lg:py-10 p-5 py-7 bg-background">
            <div className="flex items-center sm:gap-6 gap-4 sm:mb-6 mb-4">
              <div className="xl:size-[70px] lg:size-[55px] sm:size-12 size-10 flex items-center justify-center">
                <OpenSourceIcon />
              </div>

              <h3>Open source</h3>
            </div>

            <p className="2xl:text-2xl xl:text-xl md:text-base sm:text-lg text-base">
              This project is open source with an MIT License, fostering
              collaboration and allowing widespread adoption and modification.
            </p>
          </section>
          <section className="md:border-r-4 md:border-b-0 border-border bg-main dark:text-main-foreground 2xl:p-14 2xl:py-16 xl:p-10 xl:py-10 lg:p-8 lg:py-10 p-5 py-7 border-b-4">
            <div className="flex items-center sm:gap-6 gap-4 sm:mb-6 mb-4">
              <div className="xl:size-[70px] lg:size-[55px] sm:size-12 size-10 flex items-center justify-center">
                <ShadcnIcon />
              </div>

              <h3>Based on Shadcn/ui</h3>
            </div>

            <p className="2xl:text-2xl xl:text-xl md:text-base sm:text-lg text-base">
              Most of the components are based on shadcn/ui, meaning
              high-quality components with best practices.
            </p>
          </section>
          <section className="bg-background 2xl:p-14 2xl:py-16 xl:p-10 xl:py-10 lg:p-8 lg:py-10 p-5 py-7">
            <div className="flex items-center sm:gap-6 gap-4 sm:mb-6 mb-4">
              <div className="xl:size-[70px] lg:size-[55px] sm:size-12 size-10 flex items-center justify-center">
                <CustomizableIcon />
              </div>

              <h3>Customizable</h3>
            </div>

            <p className="2xl:text-2xl xl:text-xl md:text-base sm:text-lg text-base">
              You can easily customize these components to suit your needs.
            </p>
          </section>
        </div>
        <section className="border-b-4 border-b-border bg-background py-16 lg:py-[100px]">
          <h2 className="mb-5 px-5 text-center">
            Fully customizable set of components.
          </h2>

          <p className="text-center px-5 xl:text-xl md:text-lg sm:text-base text-sm">
            You can customize the styling of the components to your liking.
            Visit{" "}
            <Link className="underline font-heading" href={"/styling"}>
              styling page
            </Link>{" "}
            to see the available options.
          </p>

          <StylingCustomizer />
        </section>
        <section className="inset-0 flex relative overflow-hidden w-full px-5 flex-col items-center justify-center bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] z-0">
          <Star20
            color="var(--main)"
            stroke="black"
            strokeWidth={3}
            size={250}
            className="absolute top-[120px] lg:block hidden -left-[125px] -z-10"
          />
          <Star14
            color="var(--main)"
            stroke="black"
            strokeWidth={3}
            size={250}
            className="absolute bottom-[120px] lg:block hidden -right-[125px] -z-10"
          />
          <div className="mx-auto w-container max-w-full py-16 lg:py-[100px]">
            <h2 className="sm:mb-20 mb-14 text-center">
              Loved by the community
            </h2>
            <div className="grid-cols-1 grid lg:grid-cols-3 gap-0 lg:gap-8">
              {[
                [reviews[0], reviews[1]],
                [reviews[2], reviews[3], reviews[4]],
                [reviews[5], reviews[6]],
              ].map((card, index) => (
                <div className="group flex flex-col justify-center" key={index}>
                  {card.map(({ jobTitle, pfp, fullName, review }, index) => (
                    <div
                      className="min-h-20 sm:w-[500px] w-full mx-auto mb-4 lg:min-h-48 lg:mb-8 lg:w-full rounded-base border-2 border-border bg-background p-5 shadow-shadow"
                      key={index}
                    >
                      <div className="flex items-center sm:gap-5 gap-3">
                        <img
                          className="size-10 sm:size-12 rounded-base border-2 border-border"
                          src={`${pfp.src}`}
                          alt="pfp"
                        />

                        <div>
                          <h4 className="sm:text-lg text-base font-heading">
                            {fullName}
                          </h4>
                          <p className="text-xs sm:text-sm ">{jobTitle}</p>
                        </div>
                      </div>
                      <div className="sm:mt-5 mt-3 sm:text-base text-sm break-words">
                        {review}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t-4 z-0 border-t-border border-b-4 border-b-border bg-background py-16 lg:py-[100px]">
          <h2 className="sm:mb-20 mb-14 px-5 text-center">
            Frequently asked questions
          </h2>

          <div className="mx-auto not-prose grid w-[700px] max-w-full px-5">
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
          className="border-b-4 border-border md:[&_.animate-marquee-left]:gap-[50px]! [&_.animate-marquee-left]:gap-[35px]! bg-secondary-background md:py-4 py-3"
          direction="left"
          reverse
        >
          {Array.from({ length: 7 }).map((_, id) => {
            return (
              <div
                className="flex items-center md:gap-[50px] gap-[35px] xl:[&_span]:text-3xl md:[&_span]:text-2xl sm:[&_span]:text-xl [&_span]:text-base lg:[&_svg]:size-[50px] md:[&_svg]:size-10 [&_svg]:size-[30px]"
                key={id}
              >
                <span>Neobrutalism components</span>
                <Star29 className="text-foreground" />
                <span>Neobrutalism components</span>
                <Star37 stroke="black" strokeWidth={6} color="var(--main)" />
                <span>Neobrutalism components</span>
                <Star16 className="text-foreground" />
                <span>Neobrutalism components</span>
                <Star8 color="var(--main)" stroke="black" strokeWidth={7} />
              </div>
            )
          })}
        </Marquee>
        <section className="inset-0 w-full flex flex-col items-center justify-center bg-main  bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:70px_70px] px-5 lg:py-[200px] md:py-[150px] sm:py-[100px] py-[100px]">
          <h2 className="text-center font-heading not-prose 2xl:text-5xl xl:text-5xl md:text-4xl sm:text-3xl text-[22px] text-main-foreground mb-12">
            Start your neobrutalism project today.
          </h2>

          <Link
            className="flex items-center gap-2.5 w-max text-foreground rounded-base border-2 border-border bg-background dark:bg-secondary-background md:px-10 px-4 md:py-3 py-2 md:text-[22px] text-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            href={"/docs"}
          >
            Read the docs
            <ArrowUpRight className="md:size-[30px] size-5" />
          </Link>

          {/* <Tabs defaultValue="pnpm" className="max-w-[650px] w-full h-max">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="bun">bun</TabsTrigger>
            </TabsList>
            <TabsContent value="pnpm">
              <Pre
                __rawstring__="pnpm dlx shadcn@latest init https://neobrutalism.dev/r/styling/blue.json"
                data-language="bash"
                wrapperClassName="mb-0!"
              >
                <code>
                  <span className="text-white font-bold">pnpm</span>
                  <span className="text-white/[0.53] ">{` dlx shadcn@latest init https://neobrutalism.dev/r/styling/blue.json`}</span>
                </code>
              </Pre>
            </TabsContent>
            <TabsContent className="**:data-avatar:mb-0" value="npm">
              <Pre
                __rawstring__="npx shadcn@latest init https://neobrutalism.dev/r/styling/blue.json"
                data-language="bash"
                wrapperClassName="mb-0!"
              >
                <code>
                  <span className="text-white font-bold">npx</span>
                  <span className="text-white/[0.53] ">{` shadcn@latest init https://neobrutalism.dev/r/styling/blue.json`}</span>
                </code>
              </Pre>
            </TabsContent>
            <TabsContent value="yarn">
              <Pre
                __rawstring__="npx shadcn@latest init https://neobrutalism.dev/r/styling/blue.json"
                data-language="bash"
                wrapperClassName="mb-0!"
              >
                <code>
                  <span className="text-white font-bold">npx</span>
                  <span className="text-white/[0.53] ">{` shadcn@latest init https://neobrutalism.dev/r/styling/blue.json`}</span>
                </code>
              </Pre>
            </TabsContent>
            <TabsContent value="bun">
              <Pre
                __rawstring__="bunx shadcn@latest init https://neobrutalism.dev/r/styling/blue.json"
                data-language="bash"
                wrapperClassName="mb-0!"
              >
                <code>
                  <span className="text-white font-bold">bunx</span>
                  <span className="text-white/[0.53] ">{` --bun shadcn@latest init https://neobrutalism.dev/r/styling/blue.json`}</span>
                </code>
              </Pre>
            </TabsContent>
          </Tabs> */}
        </section>
      </div>
      <footer className="z-30 border-t-4 border-border bg-secondary-background px-5 py-5 text-center sm:text-base text-sm">
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
      className="md:fill-black fill-main md:stroke-none stroke-black md:dark:fill-black dark:fill-main"
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
      className="fill-main stroke-black md:dark:fill-main dark:fill-main"
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
        className="md:fill-main fill-black"
        stroke="black"
        strokeWidth="20"
      />
    </g>
  </svg>
)
