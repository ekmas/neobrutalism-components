const LINKS = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Integrations"],
  Company: ["About", "Blog", "Careers", "Customers"],
  Resources: ["Docs", "API reference", "Guides", "Status"],
  Legal: ["Privacy", "Terms", "Security", "DPA"],
}

export default function Footer() {
  return (
    <footer className="bg-secondary-background px-5 py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <a href="#" className="flex items-center gap-3 font-heading text-xl">
              <span className="flex size-8 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground">
                P
              </span>
              Planly
            </a>
            <p className="mt-4 max-w-xs text-sm font-base">
              The fast, focused project tracker for teams that ship.
            </p>
          </div>

          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="font-heading text-lg">{category}</p>
              <ul className="mt-3 space-y-1">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-block py-1.5 text-sm font-base decoration-2 underline-offset-4 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-sm font-base">
          © {new Date().getFullYear()} Planly Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
