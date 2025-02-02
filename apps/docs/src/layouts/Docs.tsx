export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="docs ml-[250px] min-h-[100dvh] w-[full-250px] bg-bg dark:bg-darkBg px-5 pt-[88px] m900:m-0 m900:w-full m500:pt-16">
      <div className="prose-p:text-text prose-ul:pl-5 prose-ul:list-disc prose-li:font-base dark:prose-p:text-darkText mx-auto w-[700px] py-20 leading-relaxed prose-h1:mb-8 prose-h2:mb-6 prose-headings:font-heading prose-h1:text-3xl prose-h2:text-2xl prose-h3:mb-4 prose-h3:text-xl prose-p:leading-7 prose-p:font-base prose-code:p-[3px] prose-a:underline prose-a:font-heading prose-code:mx-1 prose-code:rounded-base prose-code:font-bold prose-code:border prose-code:text-text prose-code:text-sm prose-code:border-border dark:prose-code:border-darkBorder prose-code:bg-main prose-code:px-2 m1000:w-[500px] m750:w-4/5 m400:w-full m400:py-16 prose-h1:m400:text-2xl prose-h2:m400:text-xl prose-h3:m400:text-lg">
        {children}
      </div>
    </div>
  )
}
