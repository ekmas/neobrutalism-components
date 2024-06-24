import { Metadata } from 'next'

import TEMPLATES from '@/data/templates'

export const metadata: Metadata = {
  title: 'Templates',
  description: 'Get started with neobrutalism templates.',
}

export default function Page() {
  return (
    <div className="min-h-[100dvh] bg-white dark:bg-darkBg px-5 pt-[88px] m500:pt-16">
      <div className="pt-16 pb-16 text-text dark:text-darkText m400:pb-10 text-center">
        <h1 className="text-4xl font-heading m800:text-3xl m500:text-2xl m400:text-xl">
          Templates
        </h1>

        <div className="mb-[50px] mt-[30px] font-base text-2xl m800:text-lg m400:text-base">
          <p>
            These are free and open source neobrutalism styled taliwind
            templates you can use for your next project.
          </p>

          <p className="mt-5">
            All these templates are customizable. Check the template repo for
            more info.
          </p>
        </div>

        <div className="w-[1000px] max-w-full grid grid-cols-2 m700:grid-cols-1 gap-5 mx-auto">
          {TEMPLATES.map((template) => {
            return (
              <div
                className="p-[15px] bg-white dark:bg-darkBg rounded-base shadow-light dark:shadow-dark border-2 border-border dark:border-darkBorder"
                key={template.title}
              >
                <div className="border-2 border-border dark:border-darkBorder rounded-base aspect-[2/1]">
                  <img
                    className="rounded-base"
                    src={`${template.previewImg.src}`}
                    alt="preview image"
                  />
                </div>

                <h4 className="text-center m400:text-lg text-xl font-heading mt-4">
                  {template.title}
                </h4>

                <div className="grid grid-cols-2 m800:text-sm gap-5 mt-8">
                  <a
                    style={{ backgroundColor: `${template.color}` }}
                    className="text-text border-2 py-1.5 font-base shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none transition-all border-border dark:border-darkBorder rounded-base"
                    target="_blank"
                    href={template.liveUrl}
                  >
                    Visit
                  </a>
                  <a
                    style={{ backgroundColor: `${template.color}` }}
                    className="text-text border-2 py-1.5 font-base shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none transition-all border-border dark:border-darkBorder rounded-base"
                    target="_blank"
                    href={template.repoUrl}
                  >
                    Github repo
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
