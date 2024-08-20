# Astro Template

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


This is a template of my portfolio website, which I initally created from scratch using [Astro](https://astro.build/), [Iconify](https://iconify.design/) and [TailwindCSS](https://tailwindcss.com/).

To see a preview of this template, check out my [personal portfolio website](https://jimmyouk.com).

## Installation
Before proceeding, ensure you had installed Node.js on your machine. [Astro requires `v18.7.1`, `v20.3.0` or higher](https://docs.astro.build/en/install-and-setup/).

- Clone this repo.
- At the root of this project's directory, run in a terminal:
  
```bash
npm install
```
- To start a local dev server to preview your changes in real-time, run in a terminal, at the root of the directory:

```bash
npm run dev
```
## Project Structure

- This website utilises [Astro Content Collection](https://docs.astro.build/en/guides/content-collections/) to manage and author content. This is setup for showcasing projects, but it can be configured to your needs by editing the TypeScript config file in `/src/content/config.ts`.
  - Example projects can be found in `/src/content/projects/`. There are written in `.mdx` to utilise more JSX expressions.

  - Note: two of the example projects have a "Featured" tag included in `tag` in their YAML frontmatter. Projects with this tag included will only show in `index.astro`. A dedicated page displays all projects in the `/src/content/projects/` folder.    
- To utilise Astro's Image (`<Image />`) component, image assets are stored in `/src/assets/`. Refer to [Astro's docs](https://docs.astro.build/en/guides/images/) for more information.
- Insert your own favicon icon in `/public/`, and then link it with HTML in `/src/layouts/BaseLayout.astro`.

## All Important Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Refer to Astro's documentation for more information, especially for deploying your website.

## Documentation Links

- [Astro](https://docs.astro.build)
- [Iconify](https://iconify.design/docs/)
- [TailwindCSS](https://tailwindcss.com/docs/)