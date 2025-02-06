# Contributing

Thank you for wanting to contribute to this project. Here you can learn how to do it.

## Project structure

This project is a monorepo, which means there is multiple projects (Documentation and utility class components registry) within this project.

Documentation is inside `apps/docs` and utility class components registry is inside `apps/util-registry`.

Documentation site is hosted on `neobrutalism.dev`, and it's used for docs obviously and css variables components registry, while the other project is used for utility class components registry. Utility class components registry is hosted on `util.neobrutalism.dev`.

### Docs project structure

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
registry.json
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
- `registry.json` - This json file is used for building components registry. 

The rest of the files are pretty much self-explanatory.

### Utility class components registry project structure

```
src
└── scripts
    ├── rm.ts
registry.json
```

- `registry.json` - This json file is used for building components registry.
- `scripts/rm.ts`- Used for removing all components and hooks after we build the registry. 

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

### Run docs project

```bash
pnpm run dev:docs
```

### Run utility classes components registry project

```bash
pnpm run dev:util
```

### Run both projects

```bash
pnpm run dev
```

## Commit/branch naming convention

There's no commit/branch naming convention. Just make sure they briefly describe themselves.

## Have an idea about what I should add/remove/improve?

Please either make an issue on github or contact me on [twitter](https://x.com/samuelbreznjak) and we can talk about it, thanks.

## Adding new components

You'll be adding new component inside docs project.

### 1. Make a new component in `src/components/ui`

Make a new *utility classes* component (we'll be converting later to css variables component inside `src/components/css-vars` with a script).

### 2. Make a example component inside `src/components/examples`

### 3. Make a markdown file for that component inside `src/markdown/components`

### 4. Add your component to `src/data/components.ts`

### 5. Add your component to `registry.json`

### 6. Cd into docs projects and run following scripts in order:

#### 6.1 Generate css variables components

```bash
pnpm run generate-cssvars-components
```

#### 6.2 Build css variables components registry

```bash
pnpm run registry:build
```

#### 6.3 Copy components and hooks to util-registry project

```bash
pnpm run copy
```

### 7. Cd into util-registry project and run following script:

```bash
pnpm run registry:build
```

### 8. Test the component

Try installing it like this to test it:

#### Css variables variant

```bash
pnpm dlx shadcn@latest add https://localhost:3000/r/your-component.json
```

#### Utility classes variant

```bash
pnpm dlx shadcn@latest add https://localhost:3001/r/your-component.json
```

This is assuming docs project would be on port 3000, and util-registry on 3001.

## Creating templates

If you'd like to add your neobrutalism templates to this project, here is how you can do it.

### Requirements

- Template must be made for React, or React compatible frameworks (Next.js, Astro, Gatsby, etc.)
- Template must be written in Tailwind CSS
- Template must be original (you can create templates for existing use cases, but make sure they are original)

### Get started 

Message me on [twitter](x.com/samuelbreznjak) or send me an email @ samuelbreznjak35@gmail.com, and I'll send you an invite for [neobrutalism-templates](https://github.com/neobrutalism-templates) organization. All templates are inside this organization.

### Choose a starter template 

Choose one of these starter templates for your template:
- [nextjs](https://github.com/neobrutalism-templates/nextjs-starter-template)
- [react](https://github.com/neobrutalism-templates/react-starter-template)
- [astro](https://github.com/neobrutalism-templates/astro-starter-template)

### Creating the template

As I said earlier make sure it looks good. Check the articles section in the [resources](https://www.neobrutalism.dev/docs/resources) page or dribble/behance for inspiration. 

After you're done add a brief guide to readme on how to use the template. Contact me after you're done, and hopefully I'll add your template to this project (with credits and so on).
