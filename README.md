# Najmul Hasan — Developer Portfolio

A single-page personal portfolio for **Najmul Hasan**, a full-stack web
developer. It showcases an about section, work experience, skills, projects,
education, courses, and a contact form.

Built with **React 19 + Vite** and styled with **Tailwind CSS v4**, with
animations powered by **Framer Motion** and **Lottie**.

## Tech stack

- **Framework:** React 19, Vite 6
- **Styling:** Tailwind CSS v4, SCSS
- **Animation:** Framer Motion, Lottie (`lottie-react`)
- **Routing / scroll:** React Router, `react-scroll`
- **Icons:** `react-icons`
- **Contact form:** [Web3Forms](https://web3forms.com/) + SweetAlert2

## Getting started

```bash
npm install
npm run dev
```

The app runs at the URL Vite prints (default `http://localhost:5173`).

### Environment variables

The contact form posts to Web3Forms. Create a `.env` file in the project root:

```bash
VITE_WEB3_ACCESS_KEY=your-web3forms-access-key
```

Without this key the form shows a friendly "not configured" message instead of
failing silently.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server with HMR        |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Editing content

Site content is data-driven — edit the files under `src/assets/data/`:

- `projects-data.js` — projects (set `active` / `rank` to control visibility & order)
- `experience.js` — work experience
- `skills.js` — skills grouped by category
- `educations.js`, `courses.js` — education and courses

Personal details (name, links, résumé) live in `src/assets/personalData.js`.

## Project structure

```
src/
  assets/
    data/        # content + skill icon mapping
    lottie/      # Lottie animation JSON (loaded on demand)
  components/    # UI sections and shared components
  css/           # SCSS (card glow effect, globals)
  layouts/       # RootLayout composing all sections
  router/        # React Router setup
```
