import Sidebar from "@/components/app/sidebar"

export default function MainDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar />
      {children}
      <footer className="lg:ml-[250px] border-t-4 border-border bg-secondary-background text-center font-base sm:text-base text-sm text-foreground">
        <div className="xl:mr-[250px] px-5 py-6">
          Released under MIT License. Built by{" "}
          <a
            href="https://samuelbreznjak.com"
            target="_blank"
            rel="noreferrer"
            className="font-heading underline decoration-2 underline-offset-2"
          >
            Samuel
          </a>
        </div>
      </footer>
    </>
  )
}
