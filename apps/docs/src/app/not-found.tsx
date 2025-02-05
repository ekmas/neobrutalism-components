import Link from "next/link"

export default function NotFound() {
  return (
    <div className="text-text max-h-[100dvh] h-[100dvh] portrait:max-h-[100dvh] portrait:h-[100dvh] w-full flex items-center justify-center bg-bg dark:bg-darkBg dark:text-darkText">
      <div className="text-center max-w-screen-xl px-5">
        <h1 className="text-5xl font-heading m1000:text-4xl m800:text-3xl m500:text-2xl m400:text-xl">
          404 Not Found
        </h1>
        <p className="mb-[50px] mt-[30px] font-base m800:mb-10 text-2xl m800:text-lg m400:text-base">
          Could not find requested resource.{" "}
        </p>

        <Link
          href="/"
          className="w-max inline-block text-text rounded-base border-2 font-base border-border dark:border-darkBorder bg-main px-10 py-3 text-[22px] shadow-light dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none m800:px-8 m800:py-2.5 m800:text-lg m500:px-6 m500:py-2 m500:text-base"
        >
          Return home
        </Link>
      </div>
    </div>
  )
}
