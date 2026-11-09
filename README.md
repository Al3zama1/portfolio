# Tech with Abran — Portfolio

React + TypeScript + Vite + Tailwind CSS v4 version of the portfolio.

## Run it

```bash
npm install
npm run dev       # local preview at http://localhost:5173
npm run build     # type-check and build to dist/
```

## Where to edit

| What | File |
| --- | --- |
| Email, LinkedIn, YouTube, GitHub, learn site URL | `src/data/site.ts` |
| Lab cards and their walkthrough / video / GitHub links | `src/data/labs.ts` |
| "What Labs Show" cards | `LAB_LESSONS` in `src/data/labs.ts` |
| Tools and skill groups | `src/data/skills.ts` |
| Page text | `src/components/*.tsx` |
| Colors (theme tokens) and shared classes like `btn`, `card`, `chip` | `src/index.css` |
| Layout and spacing | Tailwind classes in `src/components/*.tsx` |

Leave a link as `""` to hide it:

- A lab's **Watch Video** and **GitHub** buttons only appear once `video` or `github` is set.
- The hero's **YouTube** and **LinkedIn** buttons, and the matching Contact rows, only appear once
  `youtubeUrl` / `linkedinUrl` are set in `site.ts`.

## Adding a lab

Add an object to `LABS` in `src/data/labs.ts`:

```ts
{
  id: "windows-ad-lab",
  label: "Lab 04",
  thumb: "t1",
  title: "Windows Server & Active Directory",
  category: "Systems / Identity",
  description: "...",
  chips: ["Windows Server", "AD DS", "Group Policy"],
  walkthrough: lab("windows-ad-lab"),
  video: "https://youtu.be/...",
  github: "https://github.com/...",
},
```

## Deploy

`npm run build` outputs a static site in `dist/` that you can host on GitHub Pages, Netlify, or Vercel.
For GitHub Pages under a sub-path, set `base` in `vite.config.ts`.
