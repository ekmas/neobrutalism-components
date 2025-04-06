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
    <div className="max-w-full grid sm:grid-cols-2 grid-cols-1 gap-5">
      {items.map(({ color, text, liveUrl, previewImg, repoUrl, title }) => {
        return (
          <div
            className="p-[15px] bg-secondary-background rounded-base shadow-shadow border-2 border-border"
            key={title}
          >
            <div className="border-2 border-border rounded-base aspect-2/1">
              <img
                className="rounded-base"
                src={`${previewImg.src}`}
                alt="preview image"
              />
            </div>

            <h4 className="text-center font-heading mt-4">{title}</h4>

            <div className="grid grid-cols-2 md:text-base text-sm gap-5 mt-8">
              <a
                style={{
                  backgroundColor: `${color}`,
                  color: text ? `${text}` : "black",
                }}
                className={clsx(
                  "text-center border-2 py-1.5 font-base shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none transition-all border-border rounded-base",
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
                  className="text-center border-2 py-1.5 font-base shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none transition-all border-border rounded-base"
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
