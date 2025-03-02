import clsx from "clsx"

import { StaticImageData } from "next/image"

export default function ShowcaseContainer({
  items,
}: {
  items: {
    color: string
    text?: string
    liveUrl: string
    previewImg: StaticImageData
    repoUrl?: string
    title: string
  }[]
}) {
  return (
    <div className="max-w-full grid grid-cols-2 m700:grid-cols-1 gap-5">
      {items.map(({ color, text, liveUrl, previewImg, repoUrl, title }) => {
        return (
          <div
            className="p-[15px] bg-white dark:bg-secondaryBlack rounded-base shadow-light dark:shadow-dark border-2 border-border dark:border-darkBorder"
            key={title}
          >
            <div className="border-2 border-border dark:border-darkBorder rounded-base aspect-[2/1]">
              <img
                className="rounded-base"
                src={`${previewImg.src}`}
                alt="preview image"
              />
            </div>

            <h4 className="text-center m400:text-lg text-xl font-heading mt-4">
              {title}
            </h4>

            <div className="grid grid-cols-2 m800:text-sm gap-5 mt-8">
              <a
                style={{
                  backgroundColor: `${color}`,
                  color: text ? `${text}` : "black",
                }}
                className={clsx(
                  "text-center border-2 py-1.5 font-base shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none transition-all border-border dark:border-darkBorder rounded-base",
                  !repoUrl && "col-span-2",
                )}
                target="_blank"
                href={liveUrl}
              >
                Visit
              </a>
              {repoUrl && (
                <a
                  style={{
                    backgroundColor: `${color}`,
                    color: text ? `${text}` : "black",
                  }}
                  className="text-center border-2 py-1.5 font-base shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none transition-all border-border dark:border-darkBorder rounded-base"
                  target="_blank"
                  href={repoUrl}
                >
                  Github repo
                </a>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
