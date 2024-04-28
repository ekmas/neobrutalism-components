# Contributing

Thank you for wanting to contribute to this project. Here you can learn how to do it.

## Project structure

```
src
├── app
└── components
    ├── app
    ├── react
    │   ├── components
    │   └── examples
    ├── shadcn/examples
    ├── ui
└── data
    ├── components
    │   ├── react.ts
    │   └── shadcn.ts
    ├── colors.ts
    ├── sidebar-links.ts
    ├── theme.jsonc
├── lib/utils.ts
├── layouts
├── markdown
├── styling
```

- `app` - All pages are inside this directory.
- `components/app` - Components for the website.
- `components/react/components` - Neobrutalism react components that will be displayed on each react component page (in code blocks).
- `components/react/examples` - Neobrutalism react components examples that will be displayed on each react component page (components above code blocks).
- `components/ui` - Neobrutalism shadcn components that will be displayed on each shadcn component page (in code blocks).
- `components/shadcn/examples` - Neobrutalism shadcn components examples that will be displayed on each shadcn component page (components above code blocks).
- `data/components/react.ts` - Array of all react components and their markdown files.
- `data/components/shadcn.ts` - Array of all shadcn components and their markdown files.
- `data/colors.ts` - Array of all color palettes.
- `data/theme.jsonc` - Theme for code blocks.
- `lib/utils.ts` - Utility functions.
- `markdown` - All mdx files are here. They will be imported from `/app`.

The rest of the files are pretty much self-explanatory.

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of the repo page.

### Clone on your machine

```bash
git clone https://github.com/your-username/neobrutalism-components.git
```

### Create a new branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

## Commit/branch naming convention

There's no commit/branch naming convention. Just make sure they briefly describe themselves.

## Have an idea about what I should add/remove/improve?

Please either make an issue on github or contact me on [twitter](x.com/samuelbreznjak) and we can talk about it, thanks.

## Roadmap

I think I won't be adding any more components since I think i've covered most of the important ones. 

The main focus now is on adding as many neobrutalism templates.

I will add some templates soon and show you how you can do it too. Follow me on [twitter](x.com/samuelbreznjak) to stay tuned.
