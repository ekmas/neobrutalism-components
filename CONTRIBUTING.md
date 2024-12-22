# Contributing

Thank you for wanting to contribute to this project. Here you can learn how to do it.

## Project structure

```
src
├── app
└── components
    ├── app
    ├── css-vars
    ├── examples
    ├── ui
└── data
    ├── colors.ts
    ├── components.ts
    ├── reviews.ts
    ├── showcase.ts
    ├── sidebar-links.ts
    ├── templates.ts
    ├── theme.jsonc
├── lib/utils.ts
├── layouts
├── markdown
├── styling
```

- `app` - All pages are inside this directory.
- `components/app` - Components for the website.
- `components/ui` -  Components that will be displayed on each component page in code blocks (utility classes).
- `components/css-vars` -  Components that will be displayed on each component page in code blocks (css variables).
- `components/examples` - Components examples that will be displayed on each component page (components above code blocks).
- `data/components.ts` - Array of all components and their markdown files.
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

Please either make an issue on github or contact me on [twitter](https://x.com/samuelbreznjak) and we can talk about it, thanks.

## Roadmap

I think I won't be adding any more components since I think i've covered most of the important ones. 

The main focus now is on adding as many neobrutalism templates.

### Creating templates

If you'd like to add your neobrutalism templates to this project, here is how you can do it.

#### Requirements

- Template must be made for React, or React compatible frameworks (Next.js, Astro, Gatsby, etc.)
- Template must be written in Tailwind CSS
- Template must be original (you can create templates for existing use cases, but make sure they are original)

#### Get started 

Message me on [twitter](x.com/samuelbreznjak) or send me an email @ samuelbreznjak35@gmail.com, and I'll send you an invite for [neobrutalism-templates](https://github.com/neobrutalism-templates) organization. All templates are inside this organization.

#### Choose a starter template 

Choose one of these starter templates for your template:
- [nextjs](https://github.com/neobrutalism-templates/nextjs-starter-template)
- [react](https://github.com/neobrutalism-templates/react-starter-template)
- [astro](https://github.com/neobrutalism-templates/astro-starter-template)

#### Creating the template

As I said earlier make sure it looks good. Check the articles section in the [resources](https://www.neobrutalism.dev/docs/resources) page or dribble/behance for inspiration. 

After you're done add a brief guide to readme on how to use the template. Contact me after you're done, and hopefully I'll add your template to this project (with credits and so on).
